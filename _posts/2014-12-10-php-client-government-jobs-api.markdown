---
layout: post
title: "A PHP Client for the Government Jobs API"
date: 2014-12-10
img: 
link: https://www.jobapis.com/open-source/govt/
categories: 
  - API Development
---
A while back I used the [Government Jobs API](http://search.digitalgov.gov/developer/jobs.html) for a sample project at a class I was teaching at Startup Institute. That was in Ruby, and they already included a link to their own [Ruby library for the API](https://github.com/GSA/jobs_api), so I figured I would make one in PHP - my language of choice for most things.

I haven't made my own API client for anything open source, but I've been doing quite a bit of it for our internal APIs at Packback, so this was a really quick little exercise. I used [Guzzle](http://guzzle.readthedocs.org/en/latest/) to handle the HTTP requests, and composer to pull the whole thing together. I still have to write tests, and I haven't included all the available methods for their API yet, but that's the beauty of open sourcing things.

### 2017 Update
Since publishing this, I've actually built a pretty large collection of open source job board clients. They're now all part of a [Github organization called JobApis](https://github.com/jobapis), and you can find the Government Jobs Client on Github as well.
