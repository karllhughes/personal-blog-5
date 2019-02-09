---
layout: post
title: "Writing Less Software to Accomplish More"
date: 2018-02-05
img: https://i.imgur.com/Q3rBr7S.png
tags: [mvps, engineering, startups]
---
Creating custom software should be the last resort for early stage startups.

Writing good software is a slow and expensive process. Writing bad software is even slower, especially when you want to change things. Startups need to move fast and spend as little money as possible, but many first-time founders, unaware of the true cost of developing software, spend too much time worrying about their product and too little time figuring out how they can generate value for their customers.

I've written [about this before](https://www.karllhughes.com/posts/creating-a-tech-startup-without-a-developer), but I was reminded of it when talking to my friend who has been working on getting his small startup off the ground. They've been through three product iterations with three different sets of developers who each pushed for a complete rebuild as the previous iteration was "not worth fixing." As I listened to the requirements for the project, I realized that there wasn't anything  that couldn't be built using Squarespace, Zapier, Wufoo, and Stripe.

As the tools for helping non-developers build websites get better, there's almost never a reason to build an MVP from the ground up with custom software. In this post, I'd like to highlight some of the ways teams I've been on have built lean MVPs with little to no dev work. But first, I'll introduce the important "Build-Measure-Learn" cycle for some context.

## The Build-Measure-Learn Cycle

I read [The Lean Startup](http://amzn.to/2EyYGhu) a few years ago, and it's made a huge impression on my thought-process as a software engineer and startup product manager. One thing that I've tried to implement is a quick build-measure-learn iteration cycle.

Typically, people think of this cycle as being a long process, where the entrepreneur must come up with an idea, raise money, and hire engineers before they can start building a product, measuring its impact, and learning enough to start another iteration:

![](https://i.imgur.com/4oGxSaR.png)

But that's definitely _not_ the way a lean startup should work. Our iterations need to be faster, we need to learn much more before we invest (or find others to invest) money in our ideas.

> “The question is not 'Can this product be built?' Instead, the questions are 'Should this product be built?'" - [The Lean Startup, Eric Ries](http://theleanstartup.com/principles)

## What if I just hire one engineer?

Part of the problem that inexperienced entrepreneurs face is that they don't know the cost and challenge of hiring, leading, and managing an engineer.

While the cash cost is pretty significant (usually $100k/year or more), there's also the fact that most engineers on their own are software engineers, not product managers, so you'll also need someone (probably you) to direct them on priorities and keep them on task. You'll also have to learn enough of their language (do you know the difference between an "API," "database," and "HTML"?) to have a meaningful conversation with them and help them prioritize the product.

Beyond that, writing custom software almost always takes 2-3 times as long as you think it will ([it's a known problem, and it's even a problem if you know about it](https://lifehacker.com/estimate-how-much-time-you-need-for-a-project-then-dou-1592791225)), you almost never get the product right on the first iteration (meaning you need to keep that expensive engineer around longer than you were hoping), and your engineer will probably overbuild it, especially if he's got some experience.

The other common solution I hear is to hire outsourced developers to build your MVP. While it is _sometimes_ cheaper up-front, it's almost certainly more expensive in the long-run, and you have to remember that your outsourcing partner **does not have the same interest as you do in your project's success**. They'll all try to sell you on how much they care, but they're trying to churn through your project to move on to the next one. Full stop. ([I've written more about outsourcing and offshoring here if you want to read more](https://www.karllhughes.com/posts/risk-of-offshore-outsourcing)).

## So what should non-technical founders do?

This is where some examples might be helpful. I can't explain in one blog post how to build any MVP you can dream up, but I can give you some examples of projects I've worked on that have used zero to minimal code to get the build-measure-learn cycle started. If you want more examples, check out [Lean Customer Development](http://amzn.to/2BQH0Lt) and [The Customer Funded Business](http://amzn.to/2EBBuzl) as both books have good ideas for developing products without raising money first.

### 1. Building a College News Blog at Uloop (2011)

I joined Uloop in 2011 after starting my own college blog at The University of Tennessee. My "product" was a Wordpress site that I had hacked around on and added a number of plugins to in order to manage a team of around 30 writers. Uloop tasked me with scaling up the process so over my first few months with the company I started recruiting writers at colleges across the country.

While keeping writers engaged was a challenge, we were able to bring on over 500 writers and generate 100s of thousands of pageviews for the site over the first year. Unfortunately, content isn't valuable without a way to monetize it.

![](https://i.imgur.com/v2qD1Qh.png)

The team at Uloop was really good at being scrappy and making money though. Something I learned at that job is that there are sometimes market opportunities that seem too easy, but are still worth pursuing. After a few months of working on Uloop News, we managed to purchase [UWire](http://uwire.com/), and we quickly integrated their PR customers into our news blog, allowing them to publish their releases with guaranteed coverage on Uloop News for a small fee.

Neither side of this two-sided marketplace required a fancy product. We used mostly off-the-shelf plugins for Wordpress and Google forms to take orders from UWire customers. Occasionally we had to make phone calls or emails to handle payments, but since our volume was relatively low, we didn't need an automated payment solution on day 1.

The outcome of this lean product was thousands of dollars in revenue in our first year, a new focus on fresh content for Uloop, and eventually it set the company up to buy College Media Network a few years later. While I left Uloop in 2013, they continued to focus on news content as a headlining feature for years afterwards, and eventually built it into their primary platform.

### 2. Packback's Question & Answer Platform (2015)

I've written about [Packback's pivot](https://blog.codeship.com/incremental-software-development-with-php-microservices/) a few times before, but I'll include a short version of our pivot here as it's extremely relevant.

In 2015, we were struggling with the two-sided textbook rental marketplace we had built. Publishers were not giving us distribution rights to their books, so in an effort to get more college students on our platform, one of the founders started a side project that would become Packback's focus over the next year. The idea was to give professors a free tool to engage their students in class and thereby market our textbook platform to a captive audience. The first iteration of the "Q&A Community" product was built on Google Drive, Mailchimp, and a whitelabeled community platform called Answerbase.

![](https://i.imgur.com/AQk1IVv.png)

Students would sign up on Answerbase, we'd copy their info into Mailchimp (using that to send mass emails reminding them to check the platform), and then generate reports in Google Drive for the professor to see how their class was doing each week. Within a summer semester we had tested the new platform and realized we had a hit...sort of. Professors liked being able to see engagement numbers without forcing students in large lecture halls to have discussions, and students liked having a community of their peers to ask insightful questions in. Unfortunately, it didn't help us sell more textbooks, so we decided to see if we could charge students for access to the platform directly.

![](https://i.imgur.com/gd2ZJXK.png)

The next iteration of Packback's platform used Zapier to automate the signup process and a Wufoo integration with Stripe to charge students for access. We had thousands of students sign up to use it, and quickly realized that there was a viable business model in the tool we had created. We began integrating a little custom code for generating reports, and over the next year, rebuilt the platform from the ground up. Today Packback is growing and just closed a $4.2 million series A round of funding all thanks to a very lean MVP that required almost no engineering effort.

### 3. The Graide Network's Plan to Help Teachers (2014)

Before I joined [The Graide Network](https://www.thegraidenetwork.com/), the non-technical founders put together a viable MVP which allowed them to test the model. The goal was to see if teachers would trust outsourced graders with their work and to figure out if these remote teaching assistants (mostly college students studying to be teachers) would be reliable and accurate enough in their grading.

Blair Pircon (and Liz Nell starting in 2015) testing the hypothesis by working with teachers via email, passing around documents in Google Drive, and using Excel spreadsheets as a template for Graiders. As the number of assignments grew, the small team started using a spreadsheet to keep track of Graiders and applicants that they got from college job boards.

![](https://i.imgur.com/KKjwJ0q.png)

While this "stack" isn't glamorous, it worked, and The Graide Network has raised close to $1 million in seed funding to help us scale up the operation. As the team's needs have grown, we've continued to rely on a blend of custom software and off-the-shelf tools (Zapier, Textus, and Slack to name a few).

## Conclusion

I realize that plenty of great companies have been built on technically challenging problems that required great engineering effort, but the truth is if you're a small business trying to build something on the web, you're probably not in that camp. Software products tend to be overbuilt for two reasons: (1) that business people don't know about the tools that are available for building lean MVPs, and (2) engineers don't know or don't want to push nontechnical solutions.

As engineers, we have to get over our hubris and realize that our jobs exist to serve a purpose and improve the business, while business leaders need to get a little creative and not immediately throw their problems over a wall to an engineering team. If you're interested in tools that might be useful for starting a website, app, or data-driven business without code, [let me know](https://twitter.com/karllhughes). I've been doing some research on these tools and would be happy to collaborate.
