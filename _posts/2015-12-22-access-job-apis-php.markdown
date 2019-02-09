---
layout: post
title: "Jobs Common: Making Access to Job Board APIs Effortless in PHP"
date: 2015-12-22
img: 
tags: [php, programming, open-source]
---
If you're a developer and you want to create a job board aggregator or supplement your own site's job listings with listings from other providers, here's a dead simple way to do it. 

## Jobs Common: Standardizing Job Board API calls in PHP

[Jobs Common](https://github.com/jobapis/jobs-common) is a project that @[stevenmaguire](https://twitter.com/stevenmaguire) and I have been working on for the past year to make accessing job board API's in PHP easier and the data they return more standardized. It started with just four job boards in May of 2015, and since then it has ballooned to provide **support for 13 job boards** including Indeed, Careerbuilder, SimplyHired, and Ziprecruiter.

This week, I relaunched the [documentation site](https://jobapis.github.io/) and released [a new demo application](https://github.com/jobapis/jobs-common-demo) to make it even easier for developers to get started. Let's take a look at how easy using Jobs Common is vs. accessing job board APIs directly.

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

This will get you a [standardized Schema.org JobPosting object](https://schema.org/JobPosting) that can now be compared with the results returned from Careerbuilder, SimplyHired, or Indeed's APIs. If you want more, check out the documentation on [all the providers we currently support](https://jobapis.github.io/open-source/#Jobs-Common-API-Clients), and feel free to jump in if you'd like to contribute your own!
