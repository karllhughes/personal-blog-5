---
layout: post
title: "Open Source Update: 13 Job Board API Clients"
date: 2015-12-03
img: 
tags: []
redirect_to: /
---
As some of you may know, I've been working with [Steven Maguire](https://twitter.com/stevenmaguire) for the past year on a project to help [standardize the retrieval of data from various job boards](http://www.karllhughes.com/2015/job-board-api-1-release/). As of today, our little project supports **13 job board APIs**, and now I am finally using our open source project in production for JobBrander. We've also started work on a transformer class (mostly Steven so far) to help you turn the job objects our client returns into useful output like Eloquent Models or CSV files. **How I'm using the project for JobBrander** JobBrander provides two things:

1.  Blog posts directed at entry level professionals
2.  _Job listings aggregated from other sites_

It's that second one where the job board standardization project comes in. Our goal at JobBrander is to help entry level job seekers in any ways we can, so while writing blog posts is great, I think the automated aggregation of scattered job content has even more potential. Using the open source job board project we released earlier this year, we're aggregating over 3000 jobs from 11 of the providers **every day**. Now that we have a reliable way to bring jobs to our readers, we're going to begin aggregating more data including cost of living data for entry level job seekers considering a move, company research to help readers feel out the kinds of employers they want to work for, and better search functionality. There's still a long way to go before what we have is truly unique at JobBrander, but I'm excited about the start. **We're looking for more contributors and users** My hope is that others in the PHP community find a use for our job board api clients as well. Two contributors don't make a great open source project alone, but I think there are a ton of novel ways to use job board APIs. That's why we're really interested in getting more users and possibly contributors. So, if you need help getting started, [shoot me an email](mailto:khughes.me@gmail.com), [find me on Twitter](http://www.twitter.com/karllhughes), or just [get into Github and check out the readme](http://code.jobbrander.com/).
