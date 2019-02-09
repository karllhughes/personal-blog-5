---
layout: post
title: "Building an Agile Sprint Tracking System"
date: 2016-04-25
img: 
tags: []
---
I've found [Agile](http://agilemethodology.org/) to be a great tool for helping startups build software at a predictable pace while remaining flexible enough to deal with the changing needs of an inherently volatile organization. Still, there are some challenges to implementing it, and just because you put a working system in place doesn't mean you won't run into issues along the way. A few things that we've struggled with when implementing [Agile at Packback](https://www.linkedin.com/pulse/agile-startup-our-product-process-packback-karl-l-hughes) include:

*   Bottlenecks between our design, frontend, and backend team members
*   Consistently predicting the amount of work we can get done in any single sprint
*   Showcasing team members who go above and beyond (and conversely holding those who underperform accountable)
*   Rewarding "team players" who help the group succeed, not just themselves

As we've improved our process over time, here are the steps we've taken to solve the above challenges and more:

### Step 1: Implement Tracking

Our first step was to implement a [Scrum framework](http://scrummethodology.com/). Since I've covered this in a [previous blog post](https://www.linkedin.com/pulse/agile-startup-our-product-process-packback-karl-l-hughes), I'll skip the details, but basically, our system tracks estimated points, completed hours, and number of stories delivered by each team member in each area of our codebase.

### Step 2: Build a Review System

Once we got in the habit of tracking our points consistently, the next step was to build a basic summary of each sprint to review after it was complete. This would help us keep up with our average throughput and serve as a rough estimate of how well we did as a team in estimating and completing points. Here are some of the metrics we review after each sprint: ![](https://i.imgur.com/kfhCyQc.png) The above chart tells us at a glance how productive each of us were and how evenly distributed our work was between job functions. A note about this review process: just because a team member has lower numbers doesn't mean he or she performed especially poorly, so we have to take note of anomalies. For example, it's reasonable that a developer got sidetracked by taking care of a number of hard to estimate bugs that came into the sprint late, and therefore didn't get as many points as he normally would. Over time these sorts of events tend to even out, but it's a good idea to record them anyway.

### Step 3: Real Time Sprint Progress

Once we had a system in place for reviewing our sprints, I really wanted to take it to the next level and allow the whole team (and even people outside the engineering team) to see in real time how our sprint is going. While [burndown charts](https://en.wikipedia.org/wiki/Burn_down_chart) are the typical gauge for sprint tracking, they aren't the only effective way to visualize progress. Since we use Trello for tracking our sprints, I decided to hook up some charts in [Klipfolio](https://www.klipfolio.com/) using Trello's API. Here are the three main "klips" (Klipfolio's word for widgets) we keep an eye on:

#### 1\. Planning

This chart shows us at a glance how many pieces of work are specced and designed for the next sprint as well as how evenly distributed work is for the current sprint. This helps us reduce planning bottlenecks as well as offers a visual indicator if the workload is out of balance (eg: too much work for the frontend devs, not enough for the backend). ![](https://i.imgur.com/A54ryi0.png)

#### 2\. Sprint goal

Next, we have a visual indicator of how close our sprint is to being finished and the percentage of points we've completed. There's also a bar chart that shows where the work is distributed in the process. This helps us see if lots of items are stuck in QA or if we're way behind our scheduled pace. ![](https://i.imgur.com/84YmLMF.png)

### 3\. Team contributions

Finally, we have a chart that breaks down how much each team member has contributed to the sprint in progress and the type of work that has been completed (frontend, backend, etc.). While we don't push competition between team members, I think it's helpful to point to a metric like this when someone puts in extra effort and gets more done than we expect of them. Conversely, it could be a sign that we didn't estimate points well. Either way, this chart makes it clearly visible where outliers are. ![](https://i.imgur.com/EFeL1KU.png)

### Step 4: Iterating on the results

Agile is all about continuous improvement, so even though we have a system that works today, we're always looking to tighten it up based on the challenges we face. For example, I've recently seen more bugs work their way into sprints after they start, and our system doesn't really credit bug fixes well. I'll be working on a way to improve that in the next iteration. Another issue we are constantly aware of is that estimates are never a perfect metric in themselves. We don't always get them right, so sometimes people get more or fewer points than they deserved. We'll eventually figure out a way to improve this and we may bake it into our tracking system down the road. I hope this is helpful to other small organizations implementing Agile and sprint tracking. If you have questions, your own tips, or whatever else, [let me hear about it on Twitter](https://www.twitter.com/karllhughes).
