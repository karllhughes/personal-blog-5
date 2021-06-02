---
layout: post
title: "Sprint Planning and Agile Metrics"
date: 2021-06-01
img: /assets/img/sprint-planning.png
categories:
- Management
---

In late 2014, I was managing a team of software engineers working diligently on a complete rewrite of our platform at [Packback](https://www.packback.co/). While we checked in regularly on our progress, we were using a waterfall release cycle. When we finally flipped the switch and moved to our version 2.0 in May 2015, we decided to transition to an [Agile](http://agilemethodology.org/) process.

**Agile is great for [startups who need to build software](https://www.karllhughes.com/posts/creating-a-tech-startup-without-a-developer) at a predictable pace while remaining flexible enough to change the product frequently**. Using short, focused sprints, engineering teams can iterate faster and release new versions more regularly.

<!-- ad-banner -->

That said, Agile brings its own set of challenges. Just because you put a working system in place doesn't mean you won't run into issues along the way. A few things my teams struggled with when implementing Agile include:

*   Sprint planning workflows, including bottlenecks between our design, frontend, and backend team members
*   Being able to consistently predict the amount of work we could get done in any single sprint
*   Understanding which team members are consistently delivering results and which ones need more support
*   Rewarding "team players" who help the group succeed, not just themselves
*   Determining agile metrics that would be both useful and not overly paternalistic.

After eight years managing engineering and product teams at startups, I decided to document my entire sprint planning and tracking process here. Along the way, you'll learn key performance indicators and some [project management tools you can use](/posts/project-management-tools). I hope you can take this template and apply it to your agile startup to build better software faster.

_Want more advice for being a better engineering manager? Check out [my list of books for engineering managers](https://www.karllhughes.com/posts/reading-for-engineering-managers) for more great reading material._

## An Agile Product Team
Before we dive into agile metrics and the sprint planning process, it might be helpful to understand the makeup of a "typical" product team at a startup. Of course, every company does this differently, but it probably looks something like this:

- 1 product owner
- 1 designer
- 1-2 backend engineers
- 1-2 frontend engineers
- (optional) 1-2 full-stack engineers
- (optional) 1 QA engineer

![An agile product team](https://i.imgur.com/zjVNpQJ.jpg)

<!-- ad-banner -->

At one of my previous startups, our designer was also one of the company's co-founders, so she served as our product owner for most projects. This kind of role merger is typical at early-stage startups, but it can present new challenges. For example, we had a hard time getting enough of our co-founder/designer's time to plan and prepare for each sprint.

To keep things moving, we choose one engineer each sprint to serve as the [scrum master](https://www.projectmanager.com/blog/what-is-a-scrum-master-everything-you-need). They take the business requirements and turn them into stories that translate into engineering work, oversee the sprint planning and retrospective meetings, make sure standups stay on track, and deal with "unexpected" work that showed up during the sprint.

Many of the engineers I worked with in the past were full-stack, so they were able to support our frontend and backend as needed. Architectural decisions were often handled by the team member who knew that piece of the code best, but a lot of the time, this was a team effort.

## Sprint Planning and Execution
Our sprint planning starts three weeks before any engineering work does. Then, during the first sprint, we start the planning process for the next sprint.

I break sprints down into eight steps:

### 1. Prioritization

[<img src="https://i.imgur.com/DrIU9P8.jpg" class="image-right" alt="Doing Agile Right book cover" />](https://amzn.to/3uaGfbc)

During the previous sprint, our leadership team prioritizes features and work coming down the pike. It took a while for me to realize how counterproductive being reactionary (e.g., "oh, I just thought of a cool idea, let's do it now!") was. Moving a team towards a process will net you clear results in any size company, but especially in a startup where resources are tightly constrained.

Prioritizing work is a science and art unto itself, but one book I really like on this topic is _[Doing Agile Right](https://amzn.to/3uaGfbc)_.

### 2. Design
Once features are prioritized, our designer takes over and creates mockups or wireframes as necessary. When there are brand new pages or significant changes, this takes up to two weeks leading into the sprint, but it is often not that involved.

Some companies have separate design teams with their own sprints - which isn't a bad idea - but if your design team is just 1-2 people, this might not be necessary.

### 3. Writing Stories
Up until this point, the work is talked about in terms of "features" or "pages," so next, we take those features (represented by cards in Trello) and write one to five "stories" for each of them.

[Writing user stories is another big project](http://www.agilemodeling.com/artifacts/userStory.htm), so I won't go into that in detail, but **a good story makes it clear what the outcome should be for the end-user of the feature rather than define how the feature should be built**. After stories are written, we keep them in holding until the next sprint planning meeting.

<!-- ad-banner -->

### 4. Sprint Planning Meeting
When the engineering team is ready to start a new sprint, we decide on the next scrum master, and they lead the sprint planning meeting. In this meeting, we try to define:

-   A sprint goal and demo date
-   Points estimate for each story in the sprint (to help gauge team velocity)
-   Prioritized list of which stories the team has accepted for this sprint
-   A _How to demo_ field filled in for each story in the sprint
-   Specified time, place, and method (in-person or virtual) for our daily standup (I've since [moved away from Slack](https://www.karllhughes.com/posts/no-slack), but these can be done in-person, via video, or via [Status Hero](http://statushero.com/))

I also found it helpful to have a representative from the business side in sprint planning meetings as it's the last time for them to chime in on any missing details.

### 5. Executing the Work
Our stories are now all lined up in order of priority in the Sprint Backlog, and the engineering team gets to work. When a team member takes on a story, they attach themselves to the story and move it to our _In Progress_ column in Trello.

When a story is complete on their local machine, the developer will push the branch to Github and make a pull request. I won't get into the specifics of our branching model, but it's [similar to this one](http://nvie.com/posts/a-successful-git-branching-model/).

The story is then verified and the code reviewed before being merged into our development branch. This serves as a holding place for work that is complete and ready to be demonstrated on demo day.

### 6. Demo Day
It's important for engineering teams to show the business what we do. If our sales, marketing, and customer support people don't know what we're working on or what's been released, they can't do their jobs as well, plus it helps build trust and transparency.

So after every sprint, we hold a brief *demo day* (usually 1-2 hours), where the scrum master goes through each story and shows that it now behaves as expected. If something isn't working as expected or someone notices an issue, we either move the story back and try to fix it before the release or hold it back so we can finish it in the next sprint.

<!-- ad-banner -->

### 7. Sprint Retrospective
Being self-aware is one sign of a mature team, so during our retrospective we talk about:

-   What went well this sprint
-   What we could improve on in the next sprint
-   Feedback for the business
-   Feedback for the scrum master/engineering team

We also take a look at the total completed and estimated points. This agile metric helps the engineering team see how they are doing at estimating and gives us a better idea of our team velocity. The metrics are also displayed on a sprint dashboard, which I'll share later in this post.

### 8. Deployment
Finally, when all the stories are demoed, and the team is ready, we merge our development branch into the main branch. Deployments were always a huge headache when I first started writing code ten years ago, but the [CI/CD tooling](https://www.karllhughes.com/posts/continuous-integration) has gotten infinitely better since then.

During deployment, we watch our logs and make sure nothing gets stuck. With big releases, there is almost always an edge case or two we didn't think of, and then we have to decide whether to deploy a hotfix or roll back to the previous version of our application.

![Deployment is like a rocket launch for agile](https://i.imgur.com/wwBttYI.jpg)

<!-- ad-banner -->

## Agile Metrics and Tracking Sprint Progress
I mentioned above that during our retrospective, we review some key metrics related to our sprint, but we also make them visible to everyone _during_ the sprint as well. We track estimated points, completed points, and the number of stories delivered by each team member. Here's how our sprint tracking dashboard evolved over time:

### Starting with the Retrospective
Once we got in the habit of tracking our points consistently, the next step was to build a basic summary of each sprint to review after it was complete. This helps us keep up with our average throughput and serves as a rough estimate of how well we did as a team in estimating and completing points.

Here are some of the metrics we review after each sprint:

![Agile metrics related to completed points and cards after each sprint](https://i.imgur.com/kfhCyQc.png)

The above chart tells us at a glance how productive each of us was and how evenly distributed our work was between job functions.

Just because a team member has lower numbers doesn't mean he or she performed especially poorly, so we have to take note of anomalies. For example, it's reasonable that a developer got sidetracked by taking care of a number of hard-to-estimate bugs that came into the sprint late, and therefore didn't get as many points as they normally would. Over time these sorts of events tend to even out, but it's a good idea to record them anyway.

### Real-Time Sprint Tracking

Once we had a system in place for reviewing our sprints, I wanted to allow the whole team (and even people outside the engineering team) to see in real-time how our sprint was going. While [burndown charts](https://en.wikipedia.org/wiki/Burn_down_chart) are the typical gauge for sprint tracking, they aren't the only effective way to visualize progress.

Since we use Trello for tracking our sprints, I decided to hook up some charts in [Klipfolio](https://www.klipfolio.com/) using Trello's API. Here are the three main "klips" (Klipfolio's word for widgets) we keep an eye on:

#### 1. Sprint Planning Progress

This chart shows us at a glance how many pieces of work are specced and designed for the next sprint as well as how evenly distributed work is for the current sprint. This helps us reduce planning bottlenecks as well as offers a visual indicator if the workload is out of balance (e.g., too much work for the frontend devs, not enough for the backend).

![Sprint Planning Progress](https://i.imgur.com/A54ryi0.png)

#### 2. Sprint Goal

Next, we have a visual indicator of how close our sprint is to being finished and the percentage of points we've completed. There's also a bar chart that shows where the work is distributed in the process. This helps us see if lots of items are stuck in QA or if we're way behind our scheduled pace.

![Visualizing the sprint goal](https://i.imgur.com/84YmLMF.png)

### 3. Team Contributions

Finally, we have a chart that breaks down how much each team member has contributed to the sprint in progress and the type of work that has been completed (frontend, backend, etc.). While we don't push competition between team members, it's helpful to point to a metric like this when someone puts in extra effort and gets more done than we expect of them. Conversely, it could be a sign that we didn't estimate points well. Either way, this chart makes it clearly visible where outliers are.

![Points completed by team member](https://i.imgur.com/EFeL1KU.png)

## Agile Tools
There are seemingly infinite agile tools available now, but if you're a small team, I'd recommend **sticking to the tools you know**. With this in mind, here are some of my favorite agile tools for early-stage startups:

1. **Trello** - I've used [many project management tools](/posts/project-management-tools), but Trello is a good, simple option. If you need more complexity but want to keep the free price point, [Clubhouse](https://clubhouse.io/) is also worth checking out.

2. **[Status Hero](http://statushero.com/)** - In the modern era of remote-first work, a tool like Status Hero is perfect for keeping your team updated without needing to be in one place/time every day. I used to do in-person standups every morning, but I no longer think this is necessary.

3. **GitHub** - Implementing a branching and pull-request system is essential. GitHub is still the best option as it's got great integrations, actions, and a solid commenting system. We used pull requests to ensure that at least two team members sign off on each code change before it hits the development servers.

4. **Klipfolio** - Many project management tools offer dashboards, but there are often limits to how well they integrate with other tools. Using Klipfolio, we can gather data from Trello, GitHub, and more to publicly share our progress with the rest of the company.

<!-- ad-banner -->

![Agile tools](https://i.imgur.com/Crb595L.jpg)

_Want more advice for being a better engineering manager? Check out [my list of books for engineering managers](https://www.karllhughes.com/posts/reading-for-engineering-managers) for more great reading material._

## Conclusion

Agile is all about continuous improvement, and no system is ever truly finished. Estimates are never a perfect metric, and nobody gets them right every time. While this Agile process worked pretty well at my startup team at Packback, it's likely that the next time I'm leading an engineering team, we'll try different variations.

The thing I like about Agile is that **it's meant to be different for everyone** - there's no "perfect" implementation. If you've got your own version of Agile that works for you, I'd love to hear about it. [Let me hear more on Twitter](https://www.twitter.com/karllhughes).
