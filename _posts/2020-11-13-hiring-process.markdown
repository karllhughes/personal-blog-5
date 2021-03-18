---
layout: post
title: "Recruiting and Hiring Software Engineers"
date: 2020-11-13
img: /assets/img/hiring.png
categories: 
  - Management
  - Software Engineering
---

<!-- ad-banner -->

When I took my first real management role as [Packback's Head of Engineering back in 2015](/posts/packback-engineering), I inherited a great team of engineers who were hired before my promotion. Later that year, when the time came for me to do some of my own hiring, I had to quickly adopt a process for finding and onboarding new software engineers.

I started with the framework my predecessor used and brought in some heavy influences from _[Peopleware](/posts/peopleware)_ and Josh Tyler's _[Building Great Software Engineering Teams](http://amzn.to/1XQAfT7)_. Over the years, I've refined my hiring process - mostly through trial and error - to come up with the iteration described here.

My approach is a little unconventional, but I hope it inspires you to think outside the box. This is going to be a long read, so I've broken it down into five sections:

1. [The Problem with Hiring](#the-problem-with-hiring-software-engineers)
2. [Skills I Look For](#skills-i-look-for-in-software-engineers)
3. [How I Find Candidates](#how-i-find-software-engineers)
4. [How I Hire Engineers](#how-i-hire-software-engineers)
5. [The Mistakes I've Made](#mistakes-ive-made-when-hiring-software-engineers)

_Note: If you're looking for some books to help you on your journey as a software engineering manager, [here are some of my favorites](https://www.karllhughes.com/posts/reading-for-engineering-managers)._

## The Problem with Hiring Software Engineers

Any [engineering manager](https://www.karllhughes.com/posts/engineering-manager) who's hired people in the past will tell you that it's hard. 

There are lots of constraints, no way to fairly compare two candidates, and suitable candidates for one team may be horrible for another. Because it's so hard, the process has evolved to favor people who think like the interviewers, who know someone at the company, or who perform well in high-pressure interviews. It leaves people with non-traditional backgrounds struggling, often works against diverse candidates, and is nothing like the day-to-day work that most engineers do.

For example, a typical interview may require a phone screen with a recruiter who tests for "soft skills." Next, an engineering manager may screen for baseline technical skills, and then the candidate may be asked to complete an independent project or come into the office for a whiteboarding session. In either case, **the interview is nothing like a typical day working as an engineer** (although the "take-home" project may be the closest in some environments).

Soft skills are important, but "tell me about a time when..." questions favor people who are quick to make things up, and they [don't demonstrate real judgment or problem-solving skills](https://www.forbes.com/sites/lizryan/2014/03/04/why-i-hate-behavioral-interviewing/#7229c954693c). It's impossible to assess someone's character in a 30-minute phone screen, so at best, you can weed people out who are completely unreliable or have poor verbal communication skills.

Similarly, it's very hard to judge a person's technical ability in all things during a 1-hour tech screening. The field of web development (and software engineering in general) is so vast that nobody is going to match your requirements perfectly. You can ask them what technologies they're familiar with and see if they can have a coherent conversation about technical topics, but you probably can't bump up against the edges of all of their knowledge, especially if it doesn't overlap with your own.

Finally, I've never done whiteboarding or live coding sessions with candidates, but [a lot of people really hate them](https://theoutline.com/post/1166/programmers-are-confessing-their-coding-sins-to-protest-a-broken-job-interview-process), and I think there's a good reason for that. In the real world, programmers pushed in front of an audience to solve a problem with an obscure algorithm, no time for independent research, and no access to resources. I would never do this job if that were my day-to-day.

Testing programmers at something they don't need to be good at and expecting to learn something about how they would work at your company is delusional. These kinds of interviews only serve to make the hiring team feel superior and ensure better outcomes for engineers with traditional CS backgrounds.

<!-- ad-banner -->

## Skills I Look for in Software Engineers

![Software Engineering Skills](https://i.imgur.com/FfOzjCZ.jpg)

In an effort to redesign our hiring process around the skills that actually matter in software engineering, I took the problem down to [first principles](https://fpt.guide/). What skills do I need in a team of software engineers?

### Initiative
I have never liked micromanaging people. I remember being a team lead at a restaurant in college and getting irrationally annoyed with people who would stand around while customers were lining up at the register. "Go, take an order or something!"

I digress.

Most software engineers who are looking for a job have a certain level of initiative, but great software engineering candidates go the extra mile all the time. For example, I worked with a guy at Packback who had built a website and extremely popular Twitter account to follow the chatter on police scanners. He did all this to learn new things for fun.

Software engineers who take initiative don't wait for the hiring manager to email them back, they ask about next steps, and they read about the company before they show up for an interview. It's not really that hard, but it does take time, and very few candidates do it.

### Reliability
Initiative is a start, but [I don't want a hero](https://www.karllhughes.com/posts/hero-myth). I want to build a team of consistently reliable engineers who improve over time.

Candidates with a history of staying in jobs for a long time, strong references, and commitment to projects usually make it to the top of my list when hiring. 

### Competency
When I was a new engineering manager, I over-indexed on technical skills. It's easy to fall into the trap of grading engineers based purely on their technical knowledge, but arcane trivia does not make a sound engineer.

I'll talk more about how I gauge a candidate's competency later in this post, but the key question I ask is, **do I think this engineer can learn to solve the problems we are facing?**

It's not about whether they know all the answers on day one, but instead, I look for curious people who are lifelong learners with a drive to improve themselves. If they have that, I'll find a way to get them the information they need to succeed in this role.

### Interest in the Mission
I used to call this "passion," but after a [lively conversation on the Exceptions Welcome podcast](https://www.listennotes.com/podcasts/exceptions-welcome/building-a-resilient-career-dea4tx69g32/) I decided to rebrand this skill.

Ultimately, I only want to hire software engineers who care about our industry, the problems we're solving, and the method we're using to get there. If we aren't pointing in the same direction before they join, I don't want to spend the first six weeks convincing them.

While I don't want unquestioning loyalty or people who live at the office, I do think it's important that software engineers are actually interested in the work they will be doing. It'll make them happier, and that positivity rubs off on everyone.  

## How I Find Software Engineers

![Finding Software Engineers](https://i.imgur.com/bTlxNvy.jpg)

<!-- ad-banner -->

I've used several methods for finding and recruiting software engineers over the years. While I don't have a ton of data to back up these methods, here's what I've found works for me.

### Job Listings

Job listings are the _[landing page](https://unbounce.com/landing-page-articles/what-is-a-landing-page/)_ for job hunters.

A compelling job listing should outline the tools and languages the candidate should know, the projects the candidate will work on, and as much information about day-to-day expectations as is reasonable. I try to make job listings interesting and creative, so I typically use a GitHub repository with lots of information about our team, our company, and the job interview process ([here's an example of the repo I set up for The Graide Network](https://github.com/thegraidenetwork/job-openings)).

Remember that you won't just share this listing with candidates. You'll also be emailing it out to everyone in your network, sharing it on social media, and linking to it from your website. It's a public-facing document that should be good looking and functional.

### Networking

I've never paid money to promote a job listing, but I doubt it's worth it, and here's why:

**The best software engineers are never _actively_ looking for a job on job boards.**

They're locked away behind gatekeepers called "their network," which includes former managers and coworkers, friends, and people who know them from professional organizations. They jump ship when someone they trust tells them about a great opportunity or when they decide to ask around. Senior software engineers often laugh about how many Linkedin messages we get from naive recruiters.

So, what's the trick to building a network full of software engineers?

Time.

People are surprised when I tell them that [I spend 4-8 hours per week building and maintaining my network](https://www.karllhughes.com/posts/the-key-to-networking-keeping-in-touch), but the dividends on that investment have been enormous. Whenever I have a new job opening, I write up a job listing and start passing it around. I keep a huge list of people I'd like to work with someday, so I go through it and find an excuse to get lunch.

If you're not actively building your network right now, start [writing](https://ctocraft.com/blog/how-to-use-writing-to-build-a-solid-talent-pipeline/), [speaking](https://www.karllhughes.com/posts/speaking-guide), and taking meetings with interesting people. It's the best investment you can make in your career.

### Cold Outreach

Another unpopular recruiting tool for finding software engineers is cold outreach. I've found that it can work, but you have to be careful. It's easy to come off as spammy or annoying.

Treat cold outreach as an excuse to grow your network rather than jumping straight to "the ask." Reach out to people, ask them genuine questions; do some research on their background; get to know them. You're just having a conversation, and eventually, you might slide in a mention that you're keeping an eye out for software engineers.

End each call by asking if you can follow up in a few months and (shocker!) actually do it. I've met some outstanding people this way, even if we never ended up working together.

### Recruiters

Recruiters get a bad name in the software engineering world because they can be pretty annoying. I've had junior recruiters cold call me at work or send job requests to my company email. Not a good look.

On the flip side, there are a few well-networked and honest tech recruiters out there. Just be ready to pay big bucks as the best likely work on a [retainer rather than contingency](https://theundercoverrecruiter.com/contingency-vs-retained-recruiters-what-difference/).

Even if you do get a recruiter, you need to keep recruiting too. If your recruiter doesn't have any luck, you don't want all your leads to dry up with them.

## How I Hire Software Engineers

![Software Engineering Hiring Process](https://i.imgur.com/X7YQXI4.jpg)

<!-- ad-banner -->

Now that you know what I'm looking for and how I start to find software engineering candidates, the next piece in the hiring process is the job interview. I've made adjustments to this process over the years, but at this point, I've landed on these five steps for hiring engineers.

### Step 1: The Informational Interview

Instead of setting up "phone screenings," I treat our first call as a two-way [informational interview](https://en.wikipedia.org/wiki/Informational_interview).

The candidate needs to know if we'd work well together, and I need to know if they've got the four skills I listed above. I don't try to suss out deep technical knowledge, but if there's something in their work history or resume that stands out, I'll ask about it. I end the call by selling them on the role and seeing how interested they might be in the job.

### Step 2: An In-Person Pairing Project

I used to assign a "take-home" project to candidates who passed my initial phone screening. My thinking was that this would allow them some room to flex their creative muscles, and it wasn't time-constrained. Plus, it didn't require my team to spend much time with candidates until they completed the project, and the candidate could do the work at a time convenient to their schedule.

The problem with this independent project is that **it didn't tell me anything about how a candidate would work in a team context**, so I still had to have a session with the rest of the team to figure out if they would gel with everyone.

We also lost some good candidates because they didn't invest time in the "right" parts of the project. For example, if someone didn't write tests or didn't cover enough cases, they might not look as good as someone who did, even if the project didn't strictly require it.

So, in 2018, I started using an in-person pair programming project for job candidates. This is much more similar to what our team members do in their day-to-day work, and it's generally a lot more fun than whiteboarding or take-home projects.

I typically pick an open-source project with a few issues we can make progress on in 2-3 hours, schedule a time to get together with the candidate, and pair program on an issue. From this interaction, I can assess their critical thinking ability (especially when they're the navigator), their communication skills, the speed at which they pick up new things, and our ability to work closely together. Similarly, it allows the candidate to see whether they'd like to work with me for the next few years.

Finally, we'll close out the session with more questions if any weren't answered in the first informational session.

### Step 3: Meeting the Team

Candidates who pass the informational interview and technical assessment will meet the rest of the engineering team.

This is the chance for the rest of the engineers to see if they think they'd like working with the candidate and ask their own questions. We typically use a set list of questions to more easily compare candidates who make it to this stage. [Jeff Hyman's book, _Recruit Rockstars_](https://amzn.to/2GVgIQz), has some good insights into making your interview questions more objective.

After the rest of the team has met the candidate, I'll ask the team for their input individually. I used to put everyone in a room to talk openly about the candidate, but this led to groupthink, and the loudest engineers usually got an outsized influence on hires. Now, I weigh my team's input but don't let them vote on the outcome.

### Step 4: Reference Checks and Offer

Before I decide to extend an offer, I ask the candidate for references. You would think that reference checks would be an easy step, but I've had multiple candidates put down lukewarm references. This makes me really doubt their judgment and wonder if there's something else I'm missing.

Assuming their references corroborate the candidate's experience and stated work history, I'll call the candidate to make an offer.

I always present offers over the phone and follow them up with an email. Giving the candidate a number over the phone helps me know if they're enthusiastic about it or if I made too low an offer. It also gives them a chance to ask any immediate questions before taking a couple of days to think about it. 

### Step 5: Onboarding

As I make an offer and finalize compensation, the process of onboarding has already begun.
 
I try to meet with each new hire to lay out expectations for their first few weeks and do a planning session to help them get up to speed on their first project. From there, onboarding depends on the new hire's experience level. I wrote a long summary of [my talent development and onboarding process here](https://www.karllhughes.com/posts/developing-talent) if you want to dig more into this issue.

## Mistakes I've Made When Hiring Software Engineers

I'll say it again, but hiring is hard.

Even with a well-developed process and a fair bit of experience, I have made a couple of really bad hires. But, mistakes are part of the learning process, so if you are new to hiring software engineers, expect to screw it up too. Here are the four most blatant mistakes I've made:  

### 1. Ignoring Red Flags

This was my biggest blunder by far. I hired a candidate who was 30 minutes late for an interview because he was so swamped at his current job. When I hired him, he was always "really busy" but never focused or working on the right things. He worked a ton but never got anything done.

### 2. Focus on Technical Knowledge Over Learning Capacity

During one round of hiring, I passed on several high potential bootcamp graduates because I wanted someone who had spent a couple of years in the field. This seems reasonable, but what I got was someone who had spent many years doing things the wrong way, so they came with bad habits that I had to try to break.

### 3. Engaging Recruiters Before My Network

Despite investing so heavily in my network, I didn't utilize it nearly enough for the first few hires I made. I turned to recruiters early, and while recruiter _can work_, they're [not the best way for small companies to find their first few software engineers](https://blog.ycombinator.com/how-to-hire-your-first-engineer/).

### 4. Not Defining the Skills I Wanted to Hire For

It took me a long time to realize I needed a rubric for hiring.

Instead, I looked for a candidate who knew a specific set of languages and frameworks, so I wouldn't have to teach them everything from day one. This led me to pass on several candidates who were excited about our mission but not perfectly aligned on technical skills.

![Hiring without a rubric](https://i.imgur.com/ifKE2JM.jpg)

<!-- ad-banner -->

While hiring software engineers is still challenging, having a robust process that focuses on the skills (both technical and non-technical) that you need makes it much better. Reflecting on what's worked in the past always helps me understand how I can make my process better in the future, so I'd like to hear from you.

What's your hiring process like? [Find me on Twitter](https://twitter.com/karllhughes) to pick up the conversation.

_Note: This post was originally published in 2016, but was updated in 2017, 2018, and most recently in November 2020._
