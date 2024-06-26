---
layout: post
title: "API Testing Presentation at API Strategy & Practice Conference"
date: 2017-11-03
img: https://i.imgur.com/Pi78blE.jpg
categories: 
  - Archive
---

This year, I decided to make speaking at a conference one of my goals (and I made a big list of conferece CFP dates that you can use as well). A couple months ago I was invited to speak at the Linux Foundation's [API Strategy & Practice Conference](http://events.linuxfoundation.org/events/apistrat) in Portland, Oregon.

At the conference, I gave a presentation on API testing which you can now watch here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/NcQryexNKhM?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>

#### Links
- [Watch the API Testing Talk Youtube](https://www.youtube.com/watch?v=NcQryexNKhM)
- [Get the slides](https://drive.google.com/open?id=1va2Ny5a5lEu1fKBa6w5XYDAqaE2otiBR6bZFgjncWxA)
- [Talk information](https://apistrat17.sched.com/event/414b17fdda21239616cac543f54c542f)

## About API Strategy & Practice

I was really excited about this conference even before getting chosen as a speaker. We've been building microservices with REST APIs here at The Graide Network since I joined last summer, and before that we used similar architecture at Packback.

This conference is put on by the Linux Foundation and the [Open API Initiative](https://www.openapis.org/), both great organizations with a huge influence in the open source community. While I'm not building all my projects with the Open API spec (yet), I have used their specifications in Swagger and AWS's API Gateway.

My talk was about creating a test plan for distributed architectures and builds on [this piece I wrote about testing microservices](/posts/testing-layers).

## What's Unique About Testing APIs?

If you're building software that is intended to be accessed over a REST API, you're most likely using HTTP as your border between applications or services. This means that in your automated testing, you need to test each API internally (through unit and integration tests) as well as how it interacts with its siblings and dependent services.

I've actually [written on this topic here on my blog before](https://www.karllhughes.com/posts/testing-layers), but this presentation was a bit more generalized since my audience is using a variety of languages and frameworks. Plus, I had to get a lot of information into my 20 minute time slot.

## Why Test Distributed Systems?

I'm glad you asked because in addition to addressing this question in the talk, I was invited to write a [blog post about it for Linux.org](https://www.linuxfoundation.org/blog/2017/10/testing-important-distributed-software/), but I've also written about the [importance of software testing here on this blog as well](https://www.karllhughes.com/posts/testing-matters).
