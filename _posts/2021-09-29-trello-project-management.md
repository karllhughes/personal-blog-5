---
layout: post
title: Using Trello for Project Management
date: 2021-09-29T18:26:45.381Z
img: /assets/img/trello-project-management.png
categories:
  - tools
---
I've been using Trello for project management for years. While [it's not the only tool I recommend](https://www.karllhughes.com/posts/project-management-tools), it is one of the easiest to use, most flexible, and most reliable of the many I've tried.

In this post, I'll walk you through exactly how I use Trello for project management today. My process has evolved as Trello's feature set has evolved (and will likely continue to evolve), but this should give you a starting point if you're just getting started.

<iframe width="560" height="315" src="https://www.youtube.com/embed/F3qLERNbZy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- ad-banner -->

## Why Trello Makes a Great Project Management Tool

Before I get into the *how*, let's take a step back and talk about why you might pick Trello for your next ongoing or short-term project.

First, Trello is very flexible. It lets you configure your boards and lists in whatever way you find most appropriate for the task at hand. The downside to this flexibility is that you might not know where to start, but that's why I'm writing this guide.

Trello also has powerful automation tools and integrations built in. You can install power-ups like the [Trello calendar view](https://trello.com/power-ups/55a5d917446f517774210011/calendar) or [card repeater](https://trello.com/power-ups/57b47fb862d25a30298459b1) for recurring tasks. If Trello doesn't have a pre-built plugin for the task at hand, you can use Zapier or the Trello API to build your own automation workflow around your application. As a developer, I always like tools that allow me to hack and integrate them with other tools.

Trello is also easy to use and reliably works across any device, screen size, or browser. I love being able to open up Trello on my phone for a quick note and then do more rigorous project planning on my laptop. Once you get a team involved, you can leave comments and create due dates for cards, making sure everyone on your team stays in sync.

## How I Use Trello for Project Management

I started using Trello as a software engineer many years ago, so by the time I started my own business, I was very familiar with how it would work. Initially, I ran the whole company from a single Trello board, but [as we grew](https://www.karllhughes.com/posts/scaling-services), I created new boards for each part of the business.

![Trello boards we use at Draft.dev](https://i.imgur.com/212vnmE.png)

We now have almost a dozen boards, but most follow the same general pattern. Below, I've outlined the key pieces of each Trello board.

### Cards

Each Trello card represents a part of the entire project. The scope of each card will vary, but we try not to make any cards that will take more than a week to complete. Typically, a project manager (in many cases, me) will create the cards and add them to the board.

When planning a new card, we use three questions to help guide the contents of the card:

- **What are we doing?** - A quick summary of the task and expected outcome.
- **Why are we doing it?** - Context to help the team member who will complete the project understand *why* it needs to be done.
- **How should it be done?** - Details that will help the team member execute this piece of the project.

We also use custom fields, due dates, comments, and other Trello card features, so let's look at them next.

### Comments

Almost every project warrants a certain amount of discussion as it's being planned and implemented. The problem with channels like email and Slack are that they're not clearly linked to the specific project, so it can be hard to find conversations later when you want to refer back to them.

Using Trello comments helps alleviate this problem and by simply mentioning the person (or people) involved in the decision, you can leave a paper trail for any decisions made about the project.

![Trello comments](https://i.imgur.com/nwtkqvS.png)

### Due Dates

When projects are in progress, we often attach due dates to indicate the estimated completion date or next important milestone. Trello now lets you add due dates to items in your checklists as well, so this allows you to break down dates even further.

### Checklists

Speaking of checklists, these are a great way to show people what tasks need to be done to complete a specific card. Often these sub-tasks are very quick, but they might also be used to indicate blocking or waiting for updates.

Another reason I like to use checklists in Trello is that they give your team some idea of how the project was completed. If you ever work on a similar project, you have a record of the actions taken last time this project was previously done.

### Labels

Finally, labels are an important tool for categorizing Trello cards in large projects. Sometimes we use labels to indicate recurring tasks, especially urgent ones, or the skills required to complete the task. We also use them to indicate cards that are blocked by another team or member so they get extra attention on the board.

## Trello Lists for Project Management

Trello is typically used in a [Kanban-style workflow](https://www.themuse.com/advice/an-underrated-way-for-engineering-teams-to-improve-their-workflow), where each piece of work (represented by a card), moves from left to right as it's completed. Trello lists help you understand where a particular task is in the project management lifecycle, who's working on it, and what other tasks are also in progress at the moment.

![A kanban style Trello board](https://i.imgur.com/54HN4df.png)

Philosophically, Kanban seeks to limit work in progress, meaning that you shouldn't have more tasks in progress than you have team members, but I've seen teams take a more liberal approach as well. Again, Trello is very flexible; it doesn't necessarily force you into any specific project management framework.

In our case, we use the following six lists:

### 1. Backlog

By default, new ideas go directly into the backlog where they can be discussed and groomed. I've found that even if you *think* you've defined all the tasks required for a project, things are almost always added to the backlog over time.

Having a backlog is also convenient for keeping your team focused. Great ideas come up all the time during the course of a project, so you want to have a place to put them all. Backlogged projects don't need to be acted on right away, but conversations can happen in the comments before the team decides to officially prioritize them.

### 2. Planning

Typically each Trello card has both a planning and an execution phase. The planning list serves as a place to fill in details, add resources, ask more questions, and decide on the course of action. Sometimes cards just stay here for a day and other times they need to wait for a week or more to gather responses.

### 3. Ready

Cards in the ready list are available for a team member to work on. In the past, I've used labels to help denote which cards might be best for which team members, but you can also add team members to cards here.

Ideally, cards in the Ready list can be picked up by anyone on the team who's available. In practice, there are usually some limits to this, but we want cards to be that well-defined.

### 4. In Progress

Once a team member starts actively working on a card, they move it to the In Progress list. This denotes that they are currently handling this issue, so other team members don't accidentally take it on at the same time.

We try to limit the amount of work each team member is doing at a given time to one or two cards. Any more than that and the project probably needs to move back to Ready until it's the top priority for that team member.

### 5. Done

The last step in any card's lifecycle is the Done list. This list allows us to look back at previous projects and check the comments, checklists, team members, etc. so we can replicate them again later.

As noted in the above video, we sometimes use a Review list to check work before moving the completed card to Done, but that depends on the project and team.

### 6. Recurring

Finally, we keep a list of recurring cards. Using [Trello's Card Repeater power up](https://trello.com/power-ups/57b47fb862d25a30298459b1), we can bring certain tasks or projects back into the Ready list every week or month. I use this to remind myself to do things like track our KPIs or post new content on social media.

## Improving Your Trello Project Management Skills

Trello has published [a fantastic guide for using Trello](https://trello.com/guide/trello-101) on their site, but there's also a short, 2-hour [course on Coursera if you prefer videos](https://www.coursera.org/projects/trello-for-beginners). There's even a Trello board full of Trello resources you can [check out here](https://trello.com/b/Ui4A8cwF/trello-learning-resource).

![Trello Learning Resources](https://i.imgur.com/X5gLSX9.png)

Trello's been around long enough that you should be able to find plenty of good resources, but if you try it out and realize Trello isn't for you, there are other options. I've created [this list of project management tools](https://www.karllhughes.com/posts/project-management-tools) (mostly aimed at startup founders) that should help you start exploring.

Finally, if you're upping your project management skills in general, here are [my favorite books on the topic](https://www.karllhughes.com/posts/project-management-books).
