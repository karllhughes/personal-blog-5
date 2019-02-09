---
layout: post
title: "Roadblocks to Project Estimation"
date: 2017-04-15
img: https://i.imgur.com/4PREITr.jpg
tags: [programming, product-management, estimation, agile]
---
*When I first published this in April, 2015, we were trying to obsessively estimate our projects at Packback. Looking back, this was premature. The truth is, we should have simply been breaking down our projects into smaller bites when there were problems, but I was a new manager and wanted to have some metrics to feed up the chain.*

*I don't push estimation as much anymore when there's just one engineering team as the loss of productivity measuring estimates vs. actual time is probably higher than the minute gains in optimizing estimates. Instead, I would encourage each engineer to outline their solution before starting. This makes them think through the problem, which is really the goal of estimating anyway.*

-----

Project estimation is something that every engineering and product manager wants to get good at, but it seems to be a problem that very few have mastered. I'm not especially great at estimating things, but from the past few years with startups, I have noticed some things that tend to stand in the way of a decent project time estimate.

Some of these things are in control of the engineering and product team, but some are outside business forces that are almost impossible to predict. In a startup, these issues are compounded by a tight or non-existent budget and managers who may be inexperienced.

## New team members

It's nobody's fault, but new team members need time to adjust and learn your team's system and technology. Even if they have worked with similar code, your implementation is almost certainly different, and even if it's not, your team's personal and political dynamic is different. I've said this before, but the biggest mistake managers can make is thinking of engineers as interchangeable cogs in a machine. The truth is that every one is different, and getting them into the groove of a new position takes time and introduces unknowns into a project.

## A constantly changing project spec

Good businesses iterate a lot on their products. Poorly run businesses fail to finish testing one thing before they move on to the next.

It can be challenging, but getting the product owner and engineering team to agree to a minimum requirements list will make everyone happier down the line. I say "minimum" requirements because if we're obeying agile principles, that is just our starting point for future iterations. Even if we need something more advanced down the line, we have to agree on the minimum that the app must do.

## Unfamiliar technologies

I encourage my team to experiment with new platforms, frameworks, and tools, but estimation doesn't play well with new variables like this. We try to get our experimenting out of the way before we get to the meat of our project and draw up our estimated timeline to completion. Occasionally something new enters the mix, but I've learned that it always slows things down more than the developer expects. In the long run, using something outside of your current toolbox may be the best choice, but you'll probably give up short term gains to introduce it.

## Research projects

Some projects are two-way research projects. On one end, the business wants to know the technical limitations of a new project in order to determine the spec, and on the other end, engineering needs to do research before we can honestly answer the question about what's possible. We had a project like this at Packback recently relating to gathering thousands of textbook prices every day. Nobody on our engineering team specializes in big data, and we collectively lacked the experience to estimate a project like this or know how to limit its scope. It's caused a lot of back and forth between the business and engineering team, and it's been a challenge to estimate.

## Deployment

I love small teams because you get to work on a little of everything, but that also means everyone has to do some of the dev-ops. In a larger organization this might not be such a pain point for project estimation, but at a small company like Packback, it's a challenge that adds a lot of unknowns, especially when we're spinning up a new project or using a new stack. The only thing I've found to help alleviate this so far is to standardize deployments as much as possible. If you're going to use Digital Ocean in one place, use it everywhere; if you're running automated tests with Codeship in one project, use it in all your projects.

## Dealing with scale

Creating a web application that works for 100 users is easy. It doesn't matter how clean your code is or how good your monitoring service is or if one even exists. This same pain of scaling applies to other engineering projects as well ([there is an episode of Developer Tea that uses the analogy of making 100 sandwiches vs. 1 sandwich](https://developertea.com/episodes/9981)).

What challenges have you encountered when estimating projects?
