---
layout: post
title: "Continuous Integration on a Budget"
date: 2017-04-27
img: https://i.imgur.com/9nVmGDYl.jpg
categories:
  - Archive
---

*Since I wrote this in September, 2015, continuous integration has become pretty much the standard for smaller, more nimble companies, and it's even making inroads at the enterprise level. The tools are so much better than they were 3 to 5 years ago, that there's really no excuse not to automate your builds, tests, and deployments.*

*The tools I mention in this article haven't changed too much since I wrote it, but I have written a bit [more about this topic on Codeship's blog](https://blog.codeship.com/setting-up-and-deploying-a-modern-php-application/), and will be putting out a new piece soon on CI with Docker. I am now using Webpack to build most of my frontend projects (instead of Grunt), and have stopped using Envoyer at the moment as it was more complex than what I needed.*

-----

A lot of people think that continuous integration is a luxury afforded only to companies with dedicated devops teams and massive budgets. That may have once been the case, but it is no longer true thanks to the many software tools and open source projects now available. In fact, I'd make the argument that small teams especially can't afford _not_ to invest in continuous integration. Once you make unit testing and automated deployments part of your normal project workflow, it's hard to go back.

## First, what is continuous integration?

Before I dig into the tools I use at work and on open source projects, let's make sure we all understand the concept of continuous integration.

Strictly speaking, [continuous integration](https://www.thoughtworks.com/continuous-integration) is the process of merging all developers' work into a main repository on a daily (or more frequent) basis.

More broadly, the term has come to imply that the code is also [automatically tested](/posts/testing-matters), built, and deployed to a server when it is updated, so CI can be used as a way of describing your engineering team's entire deployment process.

These concepts (continuous integration, automated testing, automated builds, and automated deployments) are all part of the same process of releasing and updating code, so for the remainder of the article, I'll be talking about the processes we use to achieve all four goals under the umbrella of continuous integration. There is a spectrum of quality, customizability, and cost associated with each of the three CI paths I'll outline below, and there are certainly tools that go way beyond what I'll cover, but I hope this serves as a good introduction to anyone who's been afraid of making CI a priority in their project - no matter how small.

## The tools we use at Packback

At Packback we have a team of five engineers and we've raised some funding, so we can justify spending more on tools that help us manage deployments and continuous integration. Still, we keep things pretty lean and rely on a lot of open source or free solutions. 

#### [Codeception](http://codeception.com/)
Codeception is a PHP unit testing framework that offers behavior driven elements missing from using PHPUnit alone. It adds a layer of complexity, but there are benefits to its enhanced assertions. 

_Cost: Free_ 

#### [Grunt](http://gruntjs.com/)
Modern frontends are built, not statically hosted, so we use Grunt to concatenate and minify our script files as well as run our test-runner (see below).

_Cost: Free_

#### [Karma](http://karma-runner.github.io/0.13/index.html)/[Jasmine](http://jasmine.github.io/)
You certainly don't have to use Jasmine with Karma, but we've found it the easiest combination of framework and runner for our Javascript testing. 

_Cost: Free_

#### [Laravel Forge](/posts/laravel-forge)
We use a PHP framework called Laravel for our backend APIs. The creator of Laravel has also been running a couple of complementary products that help developers deploy and manage their projects. Forge handles provisioning and deployment onto our servers.

_Cost: $10 - $20/month_ 

#### [Envoyer](https://envoyer.io/)
Forge is great for deploying to a single server, but Envoyer adds the ability to deploy to multiple servers with zero downtime. It's another Laravel-specific tool, but you can use it for other PHP projects as well.

_Cost: $10 - $50/month_

#### [Github](https://github.com/)
If you're a web developer and you're not familiar with Github get off my site and [go read about it](http://www.howtogeek.com/180167/htg-explains-what-is-github-and-what-do-geeks-use-it-for/). There are certainly other options for hosting your repositories, but I've always been a Github fan.

_Cost: Free - $200/month_

#### [Codeship](https://codeship.com/)
Codeship is the truly continuous integration part of this whole workflow. They give you a platform that will run your tests, deploy to one or multiple servers or services, and notify you if there was any problem along the way.

_Cost: Free - $600/month_

#### [Digital Ocean](https://m.do.co/c/888fefc32a01)
Digital Ocean offers one of the [easiest and cheapest options for hosting](https://m.do.co/c/888fefc32a01). You can effortlessly scale servers and manage your DNS records there as well.

_Cost: $5 - $80/month per server_

**Packback Continuous Integration Workflow**

![](https://i.imgur.com/9nVmGDYl.jpg)

## The tools I use on personal projects

I don't want to spend $100/month just to host my personal website, so I've pared down my CI setup on personal projects. At this point I can get away with a low cost Heroku dyno as my only overhead. 

#### [PHPUnit](https://phpunit.de/)
PHPUnit may be the no-frills option for PHP testing, but it's also the most common and well documented.

_Cost: Free_

#### [Gulp](http://gulpjs.com/)
Whether you use Grunt or Gulp comes down to preference. I like Gulp because it's bundled in Laravel, and it's my framework of choice.

_Cost: Free_

#### Github
Great for open source and closed source, Github starts with very cheap plans for individuals who just want a couple of private repos.

_Cost: Free - $200/month_

#### Codeship
Get up to 100 builds per month (enough for my personal projects) free. 

_Cost: Free - $600/month_

#### [Heroku](https://www.heroku.com/)
The only downside to Digital Ocean is that you occasionally have to SSH in and fuss with a setting or install a new service. You also have to deal with load balancing and scaling on your own. Hosting with Heroku means that you get all that built in, but you do pay a little more for a decent server.

_Cost: Free - $500/month per server_

**Personal Project Continuous Integration Workflow**

![](https://i.imgur.com/dyFtQdh.jpg)

## The tools I use for open source projects

Most open source projects rely on free tools unless there's a bigger organization backing them. Fortunately, there's a lot of good continuous integration tools out there for people who want to contribute to the open source community.

#### [PHPUnit](https://phpunit.de/)

As the most common PHP unit testing framework, it's probably a good idea to use PHPUnit for open source projects. Don't want to deter people from contributing just because they're unfamiliar with your testing framework.

_Cost: Free_

#### [Scrutinizer](https://scrutinizer-ci.com/)
Scrutinizer calls itself a "continuous inspection platform" which basically means that it inspects your code's quality every time you push a change. This is really helpful when you have a variety of contributors with different skill levels contributing to a project and it gives you an idea of where code can be improved. It also integrates results from Travis (see below) to tell you if you're build is failing or not.

_Cost: Free for open source_

#### [Travis CI](https://travis-ci.org/)
Travis will run your tests and build your code on multiple server configurations so you can ensure that packages you release as open source will work in any environment. 

_Cost: Free for open source_

#### Github
Once again, Github is the place to be for open source projects. 

_Cost: Free for open source_

**Open Source Continuous Integration Workflow**

![](https://i.imgur.com/NSZ0llt.jpg)

So that's it. If you've got questions or you want to plug your own tools for CI, shoot me an [email](mailto:khughes.me@gmail.com) or a [Tweet](http://www.twitter.com/karllhughes).
