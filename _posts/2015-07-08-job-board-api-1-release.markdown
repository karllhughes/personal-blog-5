---
layout: post
title: "Job Board API Standardization"
date: 2015-07-08
img: 
link: http://www.karllhughes.com/?p=755
tags: [jobapis, php, open-source]
---
*Since I published this post in 2015, we've done a lot of work on this job board API standardization project and rebranded it. Check out the latest at [JobApis.com](https://www.jobapis.com/)*

-----

A few weeks ago, I wrote about an idea I had to help developers gain access to the myriad job board API's out there. [That blog post](/posts/php-job-search-api-clients) generated some interest from my friend and former coworker, [Steven Maguire](https://github.com/stevenmaguire), and with his help, we got the project to a [stable version 1.0 release](https://github.com/jobapis/jobs-common/tree/1.0.0). 

## The goal of the project remains the same: to make accessing job board API's easier for PHP developers.

Steven took on the majority of the work rebuilding the core package (jobs-common). He has done work with the PHP League on their [OAuth package](https://github.com/thephpleague/oauth2-client), which is somewhat similar in nature, so he brought some really good insight to this project. Finding a way to cleanly generalize the many different formats and API styles of the job boards is no small task, but Steven did a great job building an AbstractProvider class to pretty much give you an outline for building new providers. After he had the core package and the [Indeed provider](https://github.com/jobapis/jobs-indeed), I started putting together more provider packages and together we tackled new issues with the core package as they came up. Setting up new providers is now _much_ easier than it was in my first project.

Some of the key technical features of our Jobs Common package (the core set of classes that each provider uses) are:

*   [**Schema.org JobPosting Specification**](http://schema.org/JobPosting) - Data standardization is a huge part of this project. One job board API might call their listing title field "job-title" another might call it "title" and yet another "name". Schema.org has taken on the task of coming up with standard fields that projects like ours can use, so we've taken advantage of that.
*   [**Guzzle 6**](http://guzzle.readthedocs.org/en/latest/) - In an effort to become compatible with the [newly created PSR-7 spec](http://www.php-fig.org/psr/psr-7/), we upgraded the HTTP client to [Guzzle 6](https://github.com/guzzle/guzzle/releases/tag/6.0.0). We aren't fully taking advantage of streams in large results lists yet, but it sets the project up for improvements in the future.
*   **[Composer](https://getcomposer.org/) **- This was a requirement from the first iteration of the project. Composer allows you to easily include this package in your own PHP project. I'll be doing some walkthroughs on this blog later to show just how easy this is.

We also added some things to help ensure our tests and code quality stays high. Steven introduced most of these to the project as well, so I've got to pass a lot of the credit his way:

*   **[Scrutinizer](https://scrutinizer-ci.com/)** - Assesses code quality, test coverage, and documentation.
*   **[Travis CI](https://travis-ci.org/)** - Runs a complete build on different versions of PHP and makes sure there no errors.
*   **[Versioning/changelog](https://github.com/JobBrander/jobs-common/blob/master/CHANGELOG.md)** - Obviously should have been done before, but I wasn't as diligent when working alone.
*   **Unit test coverage** - I did some unit testing in my original version, but the coverage now is much better.
