---
layout: post
title: "Accessing Job Board APIs in PHP"
date: 2015-12-22
img: /assets/img/job-board-apis.png
categories:
  - API Development
---

Niche job boards have made a surprising comeback in the past few years. Despite the fact that many large players are well-established in job listings and recruiting, new boards like [We Work Remotely](https://weworkremotely.com/) and [Remote.co](https://remote.co/) have successfully made a niche for themselves in the past few years.

That said, aggregating data from multiple job boards is not easy. In this post, you'll see some of the challenges as well as a solution I've been working on for the past year to help make job board data collection more achievable.

## The Problem
As you start reading the documentation on [the various job board APIs available](https://jobapis.github.io/open-source/), you'll quickly realize that there is very little standardization in the world of job board APIs. For instance:

1. Every job board's API demands different request parameters
2. Every API returns different data; some will only do XML, some JSON, and the names of fields can be all over the place
3. Some require API/Publisher keys
4. Some have libraries, some don't; very few have good ones in PHP
5. Even if there are libraries, they still return non-standard results so you can't compare one with another
6. Many of the PHP libraries are outdated, and don't take advantage of stuff like [Composer](https://getcomposer.org/) which makes it super easy to include in a project

If you're a PHP developer, and you want to create a [job board aggregator](https://www.smartrecruiters.com/resources/glossary/job-aggregator/) or supplement your website's job listings with jobs from other providers, I built a new tool that can help.

## Jobs Common: The PHP Job Board API Client

[Jobs Common](https://github.com/jobapis/jobs-common) is a project that @[stevenmaguire](https://twitter.com/stevenmaguire) and I have been working on for the past year to make accessing job board API's in PHP easier. Since we started the project with just four job boards in May, we've added **support for 13 job boards** including Indeed, Careerbuilder, SimplyHired, and Ziprecruiter. We've also standardized the data they return so that it's easier to work with.

You can also find the [documentation site](https://jobapis.github.io/) and [a demo application](https://github.com/jobapis/jobs-common-demo) to make it even easier for developers to get started.

In this post, we'll take a look at how easy using Jobs Common is vs. accessing job board APIs directly.

### Example 1: Getting Jobs from Dice the Hard Way

Let's say that you want to get the latest 'product manager' jobs from Dice's API. First, you need to read through their documentation. Next, you'll need to figure out a curl request to make. You'll probably come up with something like this:

```
http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=product+manager&city=Chicago,+IL
```

The results you get from Dice will look something like this:

```
{
 "count": 1581,
 "firstDocument": 1,
 "lastDocument": 50,
 "nextUrl": "/api/rest/jobsearch/v1/simple.json?areacode=&country=&state=&skill=&city=Chicago%2C+IL&text=product+manager&ip=&diceid=&page=2",
 "resultItemList": [
 {
 "detailUrl": "http://www.dice.com/job/result/10267593/288598?src=19",
 "jobTitle": "Product Manager",
 "company": "Restaurant.com",
 "location": "Arlington Heights, IL",
 "date": "2015-12-18"
 },...]}
 ```

Now, you'll need to decode the JSON string Dice's API returns, and parse those results using a PHP script. You'll need to cast each item in the results list as your own type of job object, and figure out what to do next. Admittedly, it's not that bad, but what if you wanted to do it for 3, 4, or 5 different job boards? That's where Jobs Common really shows its value.

### Example 2: Getting Jobs from Dice with Jobs Common

As you can see on the [documentation page for the Dice provider](https://jobapis.github.io/open-source/dice/), getting jobs in a standard format using our jobs-dice package is just a few lines of code:

```
$client = new JobBrander\Jobs\Client\Providers\Dice;

$jobs = $client->setKeyword('product manager')
    ->setCity('Chicago')
    ->getJobs();
```

This will get you a [standardized Schema.org JobPosting object](https://schema.org/JobPosting) that can now be compared with the results returned from Careerbuilder, SimplyHired, or Indeed's APIs. If you want more, check out the documentation on [all the providers we currently support](https://jobapis.github.io/open-source/#Jobs-Common-API-Clients), and feel free to jump in if you'd like to contribute your own.
