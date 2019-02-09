---
layout: post
title: "JobsToMail: Your Personal Job-Search Assistant"
date: 2016-09-26
img: https://i.imgur.com/zfPuNVD.png
tags: [jobapis, php, open-source]
---
If you've looked for a job in the past few years, you probably know how much time trolling job boards can take out of your life. In fact, I'd argue that getting out and meeting people is a much more effective strategy than checking job boards at all, but it doesn't hurt to know who's posting jobs if you're in the market.

Another thing I've noticed lately is that I don't want to check 100 different sites every day for information. For example, [I subscribe to about 300 engineering blogs](http://feedly.com/jobbrander/Engineering%20Blogs), but there's no way I want to go check every one of those websites every day. I use a Feedly collection and IFTTT to email myself a daily summary of all the new articles posted, and this works really well for keeping me informed with a minimal amount of effort.

### Job board search as a service

My system for keeping up with engineering blogs got me thinking: what if I could help job seekers keep up with dozens of job boards by sending them a single simple email every day?

I've been maintaining the [JobApis project](https://www.jobapis.com/) (formerly JobBrander) for a few years now, so I've gathered a lot of knowledge and created many open source clients for job boards. A job board to email project would be a great way to combine my knowledge with something that might actually be useful. So I released [JobsToMail](https://www.jobstomail.com/) as an [open source project](https://github.com/jobapis/jobs-to-mail) and free service this weekend.

### How JobsToMail Works

The goal of JobsToMail is to create a personal assistant for job seekers. People looking for jobs should be out there meeting people, doing interviews, coffee chats, etc, and not spending all day trolling job boards. JobsToMail saves you time by looking for new jobs every day on several major job boards and then sending the results to you in a single email. Under the hood I'm using the [Jobs Common](https://github.com/jobapis/jobs-common) and [Jobs Multi](https://github.com/jobapis/jobs-multi) projects to interface with 13 job board APIs with plans to support many more in the future.

If you want to get even more technical, read on...

### Collecting and emailing jobs

The signup process is a very simple form submit where the user submits their email, search term, and location. This triggers an email to the user with a confirmation link. Once clicked, that link will "confirm" the user's email and the user will start to receive an email every day.

I'm currently hosting the project on [Heroku](https://www.heroku.com/) and using their [Postgres](https://www.heroku.com/postgres) and [Scheduler](https://elements.heroku.com/addons/scheduler) add-ons to handle the database, queuing, and cron jobs. The reason I went with Heroku was for [ease of setup and deployment](https://www.karllhughes.com/posts/continuous-integration). I'd like people who want to host their own version of the project to be able to easily setup the application, and Heroku is one of the easiest ways to deploy an application as a single developer.

Heroku Scheduler kicks off an artisan command (I'm using [Laravel 5.3](https://laravel.com/docs/5.3/) and PHP 7.1 for the project) which in turn queues up a job for each user in the system to collect and email them jobs. With a small userbase, iterating through all users is not a problem, but I may have to make this more robust if I get a lot of signups someday.

Each job is processed asynchronously by Laravel's job/event handler system, which is one of the handiest features in the framework. Each job goes to each job board and gets a collection of jobs then all the collections are sorted and an email is queued up for the user. This part takes several seconds, but if it hangs for any reason, jobs are retried a few times before being thrown into a "failed_jobs" table.

Finally, I'm using Laravel's new Notification feature to send an email to the user who requested it. In production I'm relying on Sendgrid to send the emails as Heroku doesn't support SMTP or PHP's mail function. Finally, each email that is sent includes an unsubscribe link that is unique to each user. When visited, the unsubscribe URL immediately removes the user from our distribution list so they will no longer receive emails for that search.

### Where is JobsToMail going next?

Long-term, my goal is to continue making JobsToMail a more valuable service to job seekers and hopefully a more accessible project to future open source contributors. There are also a lot of "obvious" features that I chose to left out in the interest of keeping the MVP lean, but hopefully users will give me some feedback for where to take the project next.

So, if you're interested in trying it out, go to [www.jobstomail.com](https://www.jobstomail.com/) and don't forget to submit your ideas for improving the project on [Github](https://github.com/jobapis/jobs-to-mail) or to me directly on [Twitter](https://twitter.com/KarlLHughes).
