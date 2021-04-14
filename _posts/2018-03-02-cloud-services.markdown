---
layout: post
title: "The Age of Cloud Services"
date: 2018-03-02
img: https://i.imgur.com/2IQOJ7R.jpg
categories:
  - Software Engineering
  - API Development
---
Cloud based web hosting has enabled small startups to build and scale software applications that can compete with much larger companies, and now most large enterprises are [taking advantage of cloud hosting](https://www.forbes.com/sites/vmware/2017/04/07/cloud-2-0-companies-move-from-cloud-first-to-cloud-only/#9994cb44d5ed) as well. Businesses have embraced this move because it saves them money and makes it much faster to scale up or down their operations. While there are pockets or resistance, we're at the point where it's pretty much best practice _not_ to provision your own "bare metal" servers unless regulations require it or your scale is to the point where you _must_ create your own hosting services (eg: Amazon, Google).

This cloud-powered revolution has made a huge impact on the software development industry, but I think an even bigger change is on the horizon thanks to **third-party cloud services**.

## What are Cloud Services?

**Cloud hosting platforms** enable you to bring your own software (in the form of deployable `.exe`s, Docker images, or source code) to a vendor's infrastructure, saving you the time and trouble of keeping a server running.

**Cloud services** handle a complete business function for you without the need to know exactly how they work under the hood. Often these services provide a [REST API](https://restfulapi.net/) that allows developers to hook into their functionality within their own applications.

### Example: Email Sending Services

If the definition above didn't clarify things, hopefully some examples will.

One category of cloud service that many developers already lean on is **email sending services**. I have never wanted to go through the infamously challenging process of [setting up my own email server](https://www.digitalocean.com/community/tutorials/why-you-may-not-want-to-run-your-own-mail-server), and even if you are a glutton for punishment, it's probably not in your company's best interest for you to spend a portion of your time each month making sure that service is running and patched and that new best practices are applied.

So what most developers will do is use a service like [Sendgrid](https://sendgrid.com/), which will allow customers to send emails through their API. They take care of applying the right headers, rotating IPs when one is marked for spam, and even managing templates for you if you'd like. Most small and medium-sized businesses realize that sending emails is not a _core business function_ so they are okay paying someone else a monthly fee to handle email deliverability for them.

This realization in the realm of email is just the beginning of what cloud services can provide.

## Why is this happening?

Before we explore some of the services that are available, let's explore some of the larger trends that are enabling cloud services to thrive.

- **Makes engineers more focused/effective** - Speaking as a software engineer, I can tell you that I'm not excited when I have to implement a feature that's been done on 1000 other sites before. Most good developers want to face unique and interesting challenges that _can't be solved via Stack Overflow_, so having them implement an email server just to tell your customers that their order is on the way is not particularly exciting. Developers who push secondary concerns off to third party services can be more effective and contribute more business value than those who don't.
- **Lower cost** - From a business perspective, it's also usually cheaper to use third party, specialized services rather than to [hire engineers](https://www.karllhughes.com/posts/hiring-process). There are currently limits to this - at some point Sendgrid might be more expensive than hiring a team of engineers to maintain a network of email servers - but like the cloud hosting problem above, that's a unique and rare situation.
- **Easier to start [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service) businesses** - Because the tools for [starting a software as a service business](https://www.karllhughes.com/posts/creating-a-tech-startup-without-a-developer) have gotten better, more people are starting and succeeding with their own niche software as a service businesses. This is a self-fueled cycle, which makes the growth curve for SaaS tools exponential (at least until the market is flooded with options).
- **Cultural shifts** - With the widespread adoption of [Agile](http://agilemanifesto.org/) best practices, companies are moving to shorter iteration cycles, building "lean" products, and using open source software. It's hard to imagine the cloud services revolution happening if we were all still building proprietary, [waterfall-style](https://en.wikipedia.org/wiki/Waterfall_model) projects.
- **Technological environment** - Finally, the widespread adoption of certain technologies is making this move to cloud services possible. Software developers have (mostly) decided to standardize around HTTP APIs, networks are better and more reliable (especially between data centers), and cloud hosting providers are offering better and cheaper services for more specialized use cases than ever before.

## What service providers are available today?

The part that's hard right now about building software with third party cloud services is finding and deciding on the services that are right for your project. Mostly this is due to a young and fragmented market, so I expect we'll see consolidation and standardization make this easier in the near future. In the meantime, I have been keeping track of [some of the services that are available](https://www.karllhughes.com/tools/), and you can basically categorize them in one of the following ways:

- **Developer-centric platforms** - This class of tools is meant to be used primarily by developers, for example [Spark](https://spark.laravel.com/) (a PHP-based "SaaS-in-a-box" solution), Sendgrid (the email sending service mentioned above), and [Stream](https://getstream.io/) (a newsfeed service). Some have non-developer UI's, but you pretty much have to have a developer to fully integrate with them.
- **Non-developer platforms** - These tools are aimed at a non-technical audience, but that doesn't mean developers can't point team members to them. I've been pushing my teams to build landing pages in [Squarespace](https://www.squarespace.com/) or [Wordpress](https://wordpress.com/) for years because paying developers to update copy on landing pages is extremely expensive and naive.
- **Hybrid platforms** - Some platforms can be used by non-developers, but are greatly enhanced by involving an engineer - even temporarily. For example, [Zapier](https://zapier.com/) is great for connecting APIs, but if you have a developer you can also run arbitrary Javascript or Python code, making it possible to automate just about anything with very little custom code work.

![](https://i.imgur.com/ifadZkG.jpg)

## What's still standing in the way?

There are legitimate reasons _not_ to adopt cloud services, and there are some things that make them less than ideal. I've run into the following limitations so far, but every app is different:

- **Finding the right service** - As I mentioned above, the market is young and fragmented, so finding the best cloud service can be challenging. You may spend a lot of time researching or you may never find the perfect fit.
- **Scalability** - I've run into services that worked great for a few hundred users, but started to break down under a production-level load. Some services may offer plans that scale to "enterprise" levels, but they may not be affordable anymore.
- **Culture** - Some developers are afraid of using software they didn't build. This is naive, but it's a cultural hurdle you should be aware of.
- **Network latency** - When you string together 2-5 services hosted in various locations, you may or may not get a quick response. Until more cloud services build systems distributed geographically, network latency will be a problem.
- **Security** - While more mature cloud service providers (like Amazon or Google) offer detailed permissions and security features, many do not offer much more than basic password authentication and some don't even offer team-level permissions.
- **Testing and dev environments** - We've figured out workflows that automate testing and deployment to dev and staging environments in the software development industry, but cloud services are not quite as robust.
- **Reliability** - Finally, it can be hard to assess uptime or reliability for third party services - especially those geared towards non-developers. If you must provide a high level of uptime to your customers, you may have trouble relying on some third party services.

You may think that with these serious limitations are a roadblock, but like any emerging technology, cloud services are in their infancy. They will get better, and will likely be the standard in software development for many small to medium-sized businesses in the future, so the earlier you start learning them the better.
