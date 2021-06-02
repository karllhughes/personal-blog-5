---
layout: post
title: "How Do Open Source Companies Make Money?"
date: 2021-03-17
img: /assets/img/open-source-companies.png
categories:
- Software Engineering
- Startups
---

A few weeks ago post, I wrote about the [case for simple business models](/posts/startup-business-models) in startups. This sparked a later conversation about open source companies and their business models. So, I figured I would focus on the question of how companies building open source software make profitable businesses.

I'll start with a brief example...

## The Story of _Diaspora_

[<img src="https://i.imgur.com/dad9z2a.jpg" style="width: 240px; float: right; margin-left: 10px;" alt="More Awesome Than Money book cover" />](https://amzn.to/3dBhUXk)

I recently finished [More Awesome Than Money](https://amzn.to/3dBhUXk), a book about the college students who started [Diaspora](https://en.wikipedia.org/wiki/Diaspora_(social_network)), an open source, privacy-focused answer to Facebook. As a business, Diaspora was never very impressive, but its message resonated. They raised over $200,000 from Kickstarter and ended up with over half a million users at their peak.

With such a successful launch, you'd think that Diaspora could buy enough time to figure out how to grow the project and make a viable business, but it's not that easy. Being decentralized meant that they couldn't really charge users (at least not all of them) and it worried traditional investors who wanted to see a plan for monetization. Additionally, the founders were inexperienced college students who struggled to retain good employees and managers.

The social network eventually met a slow, tragic end with one of the founders committing suicide and another heading back to college. The remaining founders ran out of money and while the codebase is still [under active development](https://github.com/diaspora/), it runs as a non-profit that is largely supported by its contributors.

<!-- ad-banner -->

## Why do People Write Open Source Software?
> "People engage in creative endeavours because it satisfies some deep need within themselves to exercise creativity and solve problems often with little regard to the societal benefit." - [James Bottomley, Distinguished Engineer at IBM Research](https://opensource.org/node/1009)

To be honest, most open source projects aren't started for money. Part of the point of the Diaspora story is that even though their business failed, their idea and their codebase lives on. Software developers who write open source software rarely care to monetize it as the road to making money in open source is much more difficult than making money as a software engineer.

But maintaining a large open source project [is a lot of work](https://mikemcquaid.com/2019/05/20/research-study-interview-work-of-maintaining-open-source-software/), and many developers wouldn't mind being paid for their time. Some even go so far as to spawn successful companies from their open source projects, but this is admittedly rare.

## The Challenge of Open Source Business Models
To understand the reason that building a profitable open source business is hard, you first have to understand what open source software is and how licenses work.

### What is an Open Source Company?
**An open source company as any business whose primary product is open source software.**

Software that is open source distributes the source code publicly. Because maintaining software is a lot of work, many of the largest open source projects are primarily supported and owned by for-profit companies.

A well-known example is [Automattic](https://automattic.com/), the parent company that maintains and distributes [WordPress.org](https://wordpress.org/). While Automattic now runs several closed source software products in addition to the open source WordPress, they started primarily as an open source business.

![WordPress is owned by Automattic, an open source company](https://i.imgur.com/7h5UkeF.png)

[Red Hat](https://www.redhat.com/en/about/open-source), the maintainer of one of the most popular Linux distributions, is another example of a large open source company. While they continue to build some [free, open source solutions](https://developers.redhat.com/products), they offer high-touch services and remote support to maintain the business.

![Red Hat is an example of an open source company](https://i.imgur.com/On0vVjm.png)

<!-- ad-banner -->

### Open Source Does Not Necessarily Mean Free
So if the source code in open source software is available to anyone on the internet, why does anyone pay for it? While much open source software is free, that's not necessarily the case as [many different licensing schemes are available](https://opensource.org/licenses).

I'm not a lawyer, but I've built enough software to understand that just because code is out there on the internet doesn't mean you're necessarily allowed to use it. Similar to how images are subject to copyright even though they can be viewed online, code is also copyrighted by default. You can't just copy a nontrivial codebase and use it in your application without permission.

Some open source licenses come with restrictions. For example, some require you to make any software you build with their code open source as well. Others are open source, but not free for for-profit enterprises to use.

Now, let's not be naive. Once software is out in the public domain, some people will steal it, and they'll likely get away with it. But, for open source companies, this might not be a huge problem. In the rest of this article, I'll share some of the most popular ways for open source businesses to profit from their code, even when it's available for all the world to see.

## 6 Ways Open Source Companies Can Make Money

> "[There have] only been two successful models for monetizing open source. One is the public cloud model (...offering open source as a service) and then [there is] Red Hat's model, which is to be a significant contributor and offer on-premises [software] and drive roadmaps for customers." - [Jim Whitehurst, CEO at Red Hat](https://www.techrepublic.com/article/heres-red-hats-open-secret-on-how-to-make-3b-selling-free-stuff/)

While Jim might be right about there being two primary business models for open source software, I think there are enough variations that it's worth mentioning a few more. I've worked with several open source companies in the past (as a contributor, service provider, and consultant), and I've seen six ways that they can make money:

### 1. Donations

![Donations power many open source projects](https://i.imgur.com/o0WcosX.jpg)

While not typically used by large for-profit companies, some individual developers make pretty good money by taking donations for their open source work. Patreon, GitHub, and [Buy Me A Coffee](https://www.buymeacoffee.com/) are all popular platforms that allow individuals and businesses to help support open source projects that they use or want to see maintained.

The downside to this model is that it's really hard to build predictable, sustainable income from it. Some people will heavily use and benefit from updates while [never paying the creators](https://www.ashedryden.com/blog/the-ethics-of-unpaid-labor-and-the-oss-community), and this frustrates those who do support the project. If you've ever asked your boss if you can start paying for some of the free, open source software you use at work, you know how tough this can be to sell.

### 2. Hosted Version of the Product
Some open source projects allow you to run their software on your own servers for free, but they'll charge you for a hosted version. For example, you can deploy [n8n.io](https://n8n.io/) to an AWS or DigitalOcean machine and keep it running on your own, or you can [sign up for their hosted version](https://www.n8n.cloud/) and avoid the hassle of maintaining servers.

While this tactic won't work for every open source project, it's a very popular option. It offers a clear delineation between the paid and free versions of the product, and can be bundled with other features like support and training. The downside is that your margins are never going to be very high. If you charge too much, users will be able to justify the cost of maintaining their own servers.

### 3. Paid Support or Courses
Red Hat's model of open source software financed by paid support contracts and on-premise configuration takes more human hours, but it allows them to improve the user experience dramatically. When companies look at the cost to troubleshoot open source software, it's usually a better deal to sign up with the people who made the software rather than learn it themselves.

If you want to make your software more accessible, you can sell training at a lower cost than hands-on management and support. For example, [The Linux Foundation](https://shareasale.com/r.cfm?b=734319&u=1653894&m=59485&urllink=&afftrack=) helps maintain hundreds of open source projects and makes money through [its training courses](https://shareasale.com/r.cfm?b=734319&u=1653894&m=59485&urllink=&afftrack=).

<a target="_blank" href="https://shareasale.com/r.cfm?b=1214291&amp;u=1653894&amp;m=59485&amp;urllink=&amp;afftrack="><img src="https://static.shareasale.com/image/59485/TrainingAffiliateAds_728x90-Generic.png" border="0" /></a>

### 4. Open Core
Adam Wathan started Tailwind UI as an open source CSS library in 2017. After two years, he [went full-time on the project](https://adamwathan.me/going-full-time-on-tailwind-css/) and has now made [$2 million in revenue from the project](https://adamwathan.me/tailwindcss-from-side-project-byproduct-to-multi-mullion-dollar-business/).

While Wathan's story is exceptional, it highlights how a free, open source project can make real money by charging for extras (in Adam's case it's [premade UI components](https://tailwindui.com/)). I would call Tailwind an open core product because while the framework and features are all free, you can support the project and save yourself time by buying extras.

Some open core projects do this by charging for features that larger customers are more likely to need like advanced user management, specialized integrations, or SAML access (there was a [good thread on Indie Hackers about this model recently](https://www.indiehackers.com/post/how-i-earn-a-living-selling-my-open-source-software-476f6bb07e)). This is a solid strategy if you know enterprise users will need certain things that individuals and small companies won't.

### 5. Dual Licensing
Similar to the open core model, some open source projects offer a dual license. This might allow a small, independent developer to use the software free, but companies using it for a profit must pay a license fee. For example, [Qt offers a dual license](https://www.qt.io/licensing/):

> "Qt for Application Development is dual-licensed under commercial and open source licenses. The commercial Qt license gives you the full rights to create and distribute software on your own terms without any open source license obligations...Qt for Application Development is also available under GPL and LGPLv3 open source licenses."

Companies can decide which license is appropriate and pay Qt as needed. While some companies might abuse this license structure, lawyers will look at things like this in detail if the company ever decides to sell or go public.

### 6. Selling Other Products
As in Automattic's case, they offer a free, open source product (WordPress.org) and a suite of related and unrelated proprietary products to generate revenue from. This model is easiest to manage if your other products support the open source one, but some companies raise money from venture capitalists to fund the open source tool's growth while they figure out other products to build.

The downside to this model is that building and maintaining multiple products is a lot of work. Small teams will find this distracting and it might mean the open source product suffers.

## Learning More

[<img src="https://i.imgur.com/BQxNXfE.jpg" style="width: 240px; float: right; margin-left: 10px;" alt="For Fun and Profit book cover" />](https://amzn.to/3buqGnd)

If you're interested in building a profitable open source project and you want to learn more, I'd suggest a few resources:

- [For Fun and Profit: A History of the Free and Open Source Software Revolution](https://amzn.to/3buqGnd) - If you're looking to learn about the history of open source, Tozzi's book is a good starting point. It's brief and mostly objective.
- [Fundamentals of Open Source Management](https://shareasale.com/r.cfm?b=734319&u=1653894&m=59485&urllink=training%2Elinuxfoundation%2Eorg%2Ftraining%2Ffundamentals%2Dof%2Dprofessional%2Dopen%2Dsource%2Dmanagement%2F&afftrack=) - This free course gives you a business and legal overview of open source. Good for technical and non-technical open source project contributors.
- [Introduction to Open Source Development, Git, and Linux](https://shareasale.com/r.cfm?b=734319&u=1653894&m=59485&urllink=training%2Elinuxfoundation%2Eorg%2Ftraining%2Fintroduction%2Dto%2Dopen%2Dsource%2Ddevelopment%2Dgit%2Dand%2Dlinux%2F&afftrack=) - More technical in nature, this course will show you some best practices for developing secure, scalable open source software. This course focuses on open source software, an introduction to Linux systems and the use of Git, the revision control system.
