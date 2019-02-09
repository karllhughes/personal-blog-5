---
layout: post
title: "Creating Standards for Job Search API Clients in PHP"
date: 2015-03-30
img: 
tags: [jobapis, php]
---
_Since publishing this, I've actually built a pretty large collection of open source job board clients. They're now all part of a [Github organization called JobApis](https://github.com/jobapis). Much of this post is now outdated, so if you run across it and want to know the latest state of this project, head over to [www.JobApis.com](https://www.jobapis.com/) to learn more._

-----

I've been playing around with several job search API's for the last year as a part of a personal research project. Basically I wanted to run a search query on several job board sites and receive a standard result. I decided to start by investigating 7 job board APIs. I eventually created a PHP API Client for each.

## The problems

As you start reading the documentation on these projects, you'll quickly realize that there is very little standardization in the world of job board APIs. For my project, I needed to attack the following problems:

1.  Every job board's API demands different request parameters
2.  Ever API returns a different object; some will only do XML, some JSON, and the names of fields can be all over the place
3.  Some require API/Publisher keys
4.  Some have libraries, some don't; very few have good ones in PHP
5.  Even if there are libraries, they still return non-standard results so you can't compare one with another
6.  Many of the PHP libraries are outdated, and don't take advantage of stuff like [Composer](https://getcomposer.org/) which makes it super easy to include in a project

## The solution

### 1\. Standardizing jobs and a jobs collection

In order to easily save jobs to a database or even compare jobs from more than one source, the results from the job search APIs needed to be standardized. I started by creating a [JobsCollection](https://github.com/karllhughes/jobs-objects/tree/master/src/Jobs/Collections) class that is designed to contain a collection ([like an array, but better](http://www.sitepoint.com/collection-classes-in-php/)) of jobs along with some common attributes related to the source and query made to achieve these results. I also wanted each job within each collection to be standardized, so I created a [Jobs class](https://github.com/karllhughes/jobs-objects/blob/master/src/Jobs/Job.php) that gives each job listing a set of standard attributes. _An example of a Jobs object returned from the Indeed API_ Finally, I wanted each API client to implement a standard set of methods, so I created an [interface to serve as the contract for these API clients](https://github.com/karllhughes/jobs-objects/blob/master/src/Jobs/Interfaces/JobsClientInterface.php). This step isn't 100% necessary, but I figured that in case I came back later to add more API clients for more job boards, it would help me ensure that each one was built similarly. This [collection of classes is on packagist](https://packagist.org/packages/karllhughes/jobs-objects) so that I could include it in each client easily.

### 2. Creating PHP API Clients for each job board

I created a project for each of the APIs and added them to Github. I'm continuing to add to this collection of job search APIs. You'll want to use the Version 2 releases of these clients (I'll merge them into master soon) because the Version 1 releases are missing the Jobs Collection standardization that I implemented later. I'll probably write a blog post for each later, but here's the basic process: First, I set up a Provider that is used to instantiate the client and job object. Laravel introduced me to dependency injection in PHP, so while my implementation is rather primitive, it at least allows me to unit test the client without difficulty. Next, I created the Client.php file. This handles all the basic methods needed to make API calls and returns the standardized job collection. Each API is different, but the process is pretty much the same for all of them:

*   Create a request URL including your API key, publisher id, etc.
*   Add query parameters for the keyword, location, page, count, etc.
*   Make the request (I used Guzzle to handle that part)
*   If the response is valid, send it to the Transformer and return the results

The Transformer.php takes the non-standard output from each API and matches the attributes up to standard attributes on each Job object. These objects are added to a collection in the Client and then returned.

### 3. Examples and Demo

Each project has a folder of examples and a few unit tests so if you'd like to dissect the code or use the libraries yourself that can be your guide.

### 4. Next steps

If you'd like to contribute or you have feedback or questions, [just let me know](mailto:khughes.me@gmail.com).
