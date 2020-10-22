---
layout: post
title: "Testing the Layers in a Microservice Architecture"
date: 2017-04-19
img: https://i.imgur.com/vTbDied.jpg
categories:
  - Software Engineering
  - API Development
---
We've gotten to make some [huge improvements to the tech stack](http://www.thegraidenetwork.com/blog-all/2017/1/16/tech-accomplishments) at The Graide Network over the past year, but one of the things I'm most proud of is our automated testing system. When I joined the startup last fall, there were no tests; no way to tell if something was wrong on the site; no way to catch bugs before they went into production. Needless to say, we couldn't ship much code in the first few weeks.

So, we started to invest in a test suite by writing some Behat tests in [Mink](http://mink.behat.org/en/latest/). Our application wasn't written to be tested, so unit tests were initially next to impossible, but behavior-driven tests gave us at least a little confidence to start refactoring to microservices.

Over the next few months, we've built out six microservices on the backend, an [Angular](https://angular.io/) frontend application, and made some major improvements to slim down the legacy application. At a high level, our architecture looks something like this:

![](http://i.imgur.com/kQrADqw.png)

## So how do you test it?

One of our biggest challenges in managing our microservice architecture is testing. This seems to be a common problem for architects who choose microservices; we're far from the first company to encounter and solve this problem. One of the most helpful resources I've found is [Martin Fowler's Testing Strategies in a Microservice Architecture](https://martinfowler.com/articles/microservice-testing/), which I would strongly recommend.

While Fowler's approach is great from a general perspective, I wanted to offer up details on our implementation and how a microservice testing approach works in practice.

## Testing layers

Each of our microservices and each frontend application lives in its own repository and on its own server, so everything is highly decoupled. The great thing about this is that we can switch components out and upgrade individual APIs without taking the whole system down. The challenge with this architectural choice is figuring out how to test each individual service without standing up all the services it depends on.

Our testing strategy is broken down into several layers within each application and integration layers around multiple components of the application.

### Layer 1: API tests

Each API (or microservice) is written in [Laravel](https://laravel.com/), and communicates with internal APIs, external APIs, and a database over an HTTP or TCP connection. These are pretty typical PHP applications, but instead of serving up user views, they return JSON responses.

As for testing, we use a mix of unit, integration, and acceptance tests as seen here:

![](http://i.imgur.com/R5KyCsC.png)

#### A. Unit tests

Since we rely on a well-tested framework, we choose not to test some components which are already adequately tested in Laravel. While a lot of developers put application logic in their controllers, we keep our controllers slim and instead pass off most of the business logic to Jobs, Repositories, and Models, but pretty much every custom layer in the application is unit tested.

#### B. Integration tests

Some pieces of the application lend themselves especially well to integration tests. For example, the [Eloquent Models](https://laravel.com/docs/5.4/eloquent) we write are so tightly bound to the database that it's convenient - and more productive - to integration test them with a real database connection rather than try to mock it.

We keep our models slim, so our integration tests just verify that they retrieve data from the data as we would expect. For example, here's a typical model in our Assignments API:

```php
<?php namespace GraideNetwork\Assignments\Models;

use GraideNetwork\Base\Models\AbstractModel;
use Illuminate\Database\Eloquent\SoftDeletes;

class Inquiry extends AbstractModel
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $guarded = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function assignment()
    {
        return $this->belongsTo('GraideNetwork\Assignments\Models\Assignment');
    }

    public function scopeGraiderRequest($query, $userId = null)
    {
        return $query->where('type', config('enums.inquiry_types.REQUEST'))
            ->where('graider_id', $userId);
    }
}
```

Our integration tests for this model just need to check two things:

- If we query this model using `with('assignment')`, does it return its parent assignment?
- If we query this model using the `graiderRequest($userId)` scope, will it find all Inquiries that are of the `type` `Request` and where the `graider_id` matches the `$userId` passed in.

We try to test the unhappy cases as well (eg: if we query without the `with('assignment')` argument, it should _not_ retrieve the parent assignment).

#### C. Acceptance tests

Let me make a distinction here: we call any tests that test a single microservice or frontend application "acceptance" tests, while tests that test the entire network of services and applications are called "end-to-end" tests. Your terminology may vary, but the distinction is important.

In order to run an acceptance test on an API, we test each microservice and its database connection _without_ testing the other APIs in our system. We do this by mocking the HTTP Client at runtime and binding the mocked version of the client to Laravel's application service provider (this bit of code [is actually open source](https://bitbucket.org/thegraidenetwork/tgn-clients/src/26cbb2fe38c9067df37e33cf074589b5a916bf61/src/Testing/AcceptanceTester.php?at=master&fileviewer=file-view-default) if you'd like to see it). When we write each acceptance test, we just need to let the test know which mocked API calls will be made and what they will return. This effectively decouples our microservices for testing purposes.

### Layer 2: HTTP Client library tests

We don't test our internal API clients within each microservice because they are used in multiple places. So, we [released a Composer Package](https://bitbucket.org/thegraidenetwork/tgn-clients) for our microservice HTTP clients, and wrote unit and integration tests there.

![](http://i.imgur.com/u0F1RAS.png)

#### A. Unit tests

The unit tests within our HTTP client package are pretty simple since our internal HTTP clients are just wrappers around [Guzzle](http://docs.guzzlephp.org/en/latest/). They ensure that parameters are passed in, transformed, and sent Guzzle, and that the expected response is passed back to the caller.

#### B. Integration tests

Our HTTP client integration tests actually make calls to the microservices. These are still a work in progress, but the idea here is that these integration tests (in addition to each API's internal acceptance tests) will help ensure that the APIs are responding as we expect.

### Layer 3: Frontend tests

We have two frontend systems: our legacy application, which sits in front of all the microservices and our Angular frontend app, which will eventually replace the legacy application. Since we're moving away from the legacy frontend, I'll omit it, although we do currently unit and end-to-end test that application as well. As for the Angular frontend application, the testing layers look like this:

![](http://i.imgur.com/qEyLDWs.png)

#### A. Unit tests

Just like with our backend code, we unit test each sub-layer within the Angular application by mocking any dependencies ([Angular's dependency injection makes this easy](https://angular.io/docs/ts/latest/guide/dependency-injection.html)) and using [Angular CLI](https://github.com/angular/angular-cli) to wrap the Karma tests. As with any testable code, the key is to keep components lean, but I'm admittedly still learning a lot about the best way to structure an Angular app.

#### B. Integration tests

We don't run end-to-end tests directly within our Angular app, but we do run integration tests with mocked API responses. This ensures that the entire Angular application is transforming and presenting data as we would expect, but it allows us to avoid requiring all of our backend microservices to be running just to run the test suite.

### Layer 4: End-to-End tests

While [some developers eschew comprehensive end-to-end test suites](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html), I do find that they hold some value, especially in preventing regression when your company is small and does not have dedicated testing resources (eg: our team at the Graide Network). But, I also realize that end-to-end tests are probably the least helpful in a microservice architecture as they don't tell you on their own where something went wrong; just that it did.

So rather than build an end-to-end testing suite in our code (which application would it even "live" in?), we decided to use a third party service called [Ghost Inspector](https://ghostinspector.com/) which automatically runs our end-to-end test suite twice per day on our dev server. Ghost inspector lets you record tests by simply clicking around your webapp, so an intern or even a product manager can create tests in a pinch. Once recorded, Ghost will run the tests automatically at a specific time (or when triggered by your CI server) and report back to you if something goes wrong.

Our dev environment resets itself between the Ghost Inspector runs so that next time the end-to-end suite goes, the application will have the data it expects.

![](http://i.imgur.com/hzQv09b.png)

Unlike the other testing layers we use, the end-to-end tests actually run the whole network of services. There's no mocking of clients or API calls, so the kinds of tests we can do are somewhat limited. For example, it's not possible to determine if an email or Slack notification was sent when testing with Ghost Inspector. But, that's why we have multiple layers of tests. On its own, no single testing layer is a good indicator of our application's health, but in concert these testing layers help us ensure that our code is working every time we deploy it.

Have feedback or questions? Have your own microservice testing strategy? I'd love to hear about it! [Find me on Twitter and start a conversation](https://twitter.com/KarlLHughes).
