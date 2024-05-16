---
layout: post
title: "Web Applications: The Guide for Building Webs Apps Without Code" 
img: "https://i.imgur.com/d7tbfNr.jpg"
date: 2018-07-07
categories: 
  - Archive
---

**Web applications are getting more and more popular, but in 2018, what's the best way to build one? The answer is: it depends on your needs. In this guide, we'll cover the best tools and lessons learned for building web applications without a developer.**

If you're not quite sure what a _web application_ is and how it's different from a [website](/posts/startup-website), that's okay. I'll cover that in detail in this guide. If you are more experienced in web applications, and you're just interested in learning best practices, jump right down to the section "[Things to Consider When Building a Web Application](#things-to-consider-when-building-a-web-app)". If you already have experience building web apps, but you'd like to learn about the best tools available for building them without code, head on down to "[Tools for Building Web Apps Without Code](#tools-for-building-web-apps-without-code)".

## What is a Web Application?

A web application is software that users can access from their web browser.

You probably use a web browser (like Chrome, Safari, or Edge) almost every day. As the internet has become more common, connection speeds have increased, and smart phones have gotten...smarter, web applications have boomed. Since the late 90's, information has been accessible over the internet, but browsers can do much more than serve up static text and styles today. Javascript - a programming language used by web browsers - has become very powerful and practically ubiquitous, leading to more complex and interesting possibilities for browser-based software.

But, I'm getting ahead of myself. Before we get too deep into how web applications work, it's important to understand what a web application is and why yu might need one for your business.

### Web Page vs. Web App

You could broadly put all websites on the internet into two categories: **web pages and web applications**.

While the distinction is getting harder and harder to discern, typically web pages are static, read-only websites designed to distribute information in only one direction. Web applications on the other hand are dynamic, two-way information distribution and gathering systems.

![](https://i.imgur.com/qlHsZRi.png)

For example, if you've made a profile on a website like [About Me](https://about.me), you've created a web page, not a web application. This profile looks nice and allows readers to learn and find more information about you, but it's not a two-way conversation. Readers can't interact with your profile, ask questions, or make requests. 

![](https://i.imgur.com/k5ye7Jk.png)

_My About Me web page at [about.me/karllhughes](https://about.me/karllhughes)._

[Draw.io](https://www.draw.io/) on the other hand is clearly a web application. When you open up the site in your web browser, the interface looks more like a desktop drawing program than a typical website, and you can both read information on the site as well as create and save your own drawings.

![](https://i.imgur.com/esvrvvR.png)

_[Draw.io](https://www.draw.io/) is clearly a web application, not just a web page._

Most websites are probably a little bit web page and a little bit web application, so again, don't get too hung up on the distinction. As we look at more examples, it should be clear whether or not you need a web app or just a web page for your business.

### Web App vs. Desktop App vs. Mobile App

Another important clarification to make before going any further is the difference between a web application, desktop application, and mobile application. While all three forms of software can be used to accomplish most of the same things, the big difference is how users access the application.

**Web apps are meant to be accessed in a web browser**, mobile apps are meant to be downloaded and used on a mobile device (eg: smart phone or tablet), and desktop apps are meant to be downloaded and used on a computer or laptop.

This difference in how the apps are accessed gives the software access to different built-in hardware and software on the device. This means that mobile and desktop apps have access to the device's built-in GPS, accelerometer, camera, Bluetooth connection, and much more, while web apps have very limited access to all these features.

![](https://i.imgur.com/0RZqjDU.png)

I don't want to get too technical, but this means that if you want to build software that connects to a Bluetooth watch through a user's smart phone, you're probably going to need a mobile app, and if your software needs to use a CD drive, you'll need a desktop app. These limitations may make you wonder why anyone would build a web app, but the truth is that there are a lot of advantages to building a web application. We'll cover these advantages in the next section.

## Why Build a Web Application?

One of the biggest reasons to building a web application rather than a desktop or mobile app is that **web applications can be built once and accessed everywhere**. With a desktop app, you have to consider that some users have a PC and others use Mac. Each operating system works differently, so programmers have to build two versions of your software. The same is true of Android vs. iPhone software - very little can be shared between the two platforms.

That's not the only reason though, so let's take a look at some other reasons people choose to build web apps over desktop or mobile ones.

### The Biggest Advantages to Web Applications

- The same web app can be used on a smart phone, PC, Mac, or any other internet-connected device.
- You don't have to ask users to update their software. When you want to make an update, you just update your web app and users automatically get the latest version next time they visit.
- Web browsers have more functionality than they used to. In fact, you can now use push notifications, access a user's camera, read GPS location, and more using only a web application.
- There are many great cheap or free tools for building web applications without code (see "[Tools for Building Web Apps Without Code](#tools-for-building-web-apps-without-code)" below).

All this leads to the biggest takeaway for non-technical founders: **web apps are an order of magnitude cheaper to build and maintain than native mobile or desktop applications**. This makes them great for MVPs, but the truth is that a web app may be all you ever need. Let's look at some examples of established startups and businesses that leverage web applications to serve their software.

### Examples of Web Applications

You're probably using several web applications on a daily basis, but it's worth taking a look at a few of the most popular web applications out there.

#### Gmail: Web-Based Email Client

![Gmail](https://i.imgur.com/TK9eHqI.png)

There was a time when email clients were mostly stand-alone programs that you installed on your computer - think Outlook or Apple Mail - but [Gmail](https://mail.google.com) changed all that. Google's email client is available for free on the web, and if you also use their mobile app, it stays in sync with the web version. This is a great example of a company using both a web and mobile app to great success.

#### Slack: Free Team Chat

![Slack](https://i.imgur.com/ATwIUmu.png)

[Slack](https://slack.com/) is a free team chat tool that's available as a web app, a mobile app, and a desktop app. While most users might default to the mobile or desktop apps, it's nice to have the option for web access in case they need access from a shared computer. Slack has taken advantage of the latest browser features (like camera and notification access) to make the web experience as close to the native experience as possible.

#### Evernote: Note-Taking and Sharing With All Your Devices

![Evernote](https://i.imgur.com/LvjUra3.png)

Note-taking apps are all over the place, but Evernote is probably the best one available. Like Slack, they offer native mobile applications, but their web experience is almost as full-featured as the mobile or desktop one. The big downside is that the web application isn't going to work when you're offline like the desktop version would.

## Does Every Business Need a Web Application?

While pretty much [every company needs a website](/posts/startup-website) these days, the truth is that some businesses don't need a full-blown web application. Businesses with physical locations may not need to have an online store, some startups _only_ offer a mobile app, and many B2B (Business-to-Business) service providers (like consultants) don't need a web app.

Before you commit to building a web application, ask yourself a few questions about your business, and think about the following factors:

### You Should Probably Build a Web Application If...
- You are going to sell a product online
- Your need to allow customers to log in and see reports and invoices
- You want to build a software tool that can be used remotely by users around the world
- You want to start a SaaS (Software as a Service) company
- You want to build a mobile app or desktop app, but costs prohibit it

### You Should Probably _Not_ Build a Web Application If...
- You will only sell your product in a physical location
- Your customers are happy receiving simple email reports and invoices
- Your software tool will only be used by users who install it on their computer
- Your business is a service or consulting business
- Your software requires features that are only available to mobile or desktop applications

Every company is different, but another way to decide whether or not a web application is worth it is to look at competitors in your industry. If most of them do not have a web application, it's likely you can start without one as well.

## Things to Consider When Building a Web Application

Web applications are much easier and cheaper to build than mobile or desktop applications, but they still require some foresight into the way users will access them, how data will be retrieved, and what triggers need to be kicked off. You can't ignore the fact that your web application may require users to input sensitive information like their credit card or email address, so you need to think about security as well. Here are just a few of the considerations you should take into account when building a web application.

### Users and Logins
Who needs to have access to your web application? Will you just use it internally or will customers need their own logins? How will users do basic account maintenance like change their email address or reset their passwords? Where are your passwords going to be stored? Do different users have different levels of access? There is a lot to think about here, so user logins and permissions can be much more complicated than you would think.

### Purchases
Many web applications support online purchases, but be careful with this. If you want to store and process credit cards, you will have to spend tens of thousands of dollars on securing your system for PCI compliance, and that can break a new business! Instead, most startups rely on third party payment processors like Stripe and Paypal to handle purchases.

### Security
Where will you store private user data? Who in your company will have access to it? What happens if this database is breached or data stolen? Would you even know? These questions and more are necessary prerequisites before you get too far into building a web app. Good security can be expensive, so try to rely on professional quality tools rather than building solutions yourself.

### Analytics, Logging, and Error Handling
Do you need to track how users are using your application? Do you want alerts when users encounter an error or when your site is down? Can users self-service problems or do they have to report them to you? Thinking about these "edge cases" up front and having a plan can greatly help the usability of your web application.

### Side Effects
At their core, most web applications take data as input from users, process this data, and then present some form of output (usually visual). The "process this data" step often involves side effects; for example, when users submit an order, you may want to be notified with an email or Slack notification. Sometimes what users do affects how other users see your web app. These side effects need to be handled somewhere, but if your web app's code can't do it, another method is to use a tool like [Zapier](https://zapier.com/).

### Scalability
How many users does your website need to support at once? While you may want to be cautious and build something that can serve thousands of visitors at once, this kind of high-scale web application can cost a lot of money and be very hard to build. Likely you can get away with starting at a few hundred users and growing as your traffic does. Either way, you should know how big of a scale you'll be operating at as this might influence the type of web application you want to build.

### Speed
Finally, do your users care about speed? While it's common knowledge that [a faster website will sell more products](https://neilpatel.com/blog/loading-time/), there's a practical limit to this too. Designing a super-fast website may cost you more than you can afford at this early stage in your product's life.

## How Web Applications Work

![](https://i.imgur.com/8fxLuPr.png)

As you have probably gathered from the examples above, web applications can vary greatly in their complexity, performance, and purpose. That said, there are three key elements that every web application will have to deal with:

### 1. User interface
The most obvious to end-users of your web application is the user interface. Usually this is a visual interface (like this website), but your web application could be [voice controlled](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API), [API-based](/posts/api-development), or even just a bunch of files that users can download. The important thing with any user interface is that **users can send and receive information through it**.

### 2. Data processing
After a user sends your web application input, the web application is expected to process it in some way. Sometimes this is as simple as cleaning up inputs to make sure users know when they make a mistake, and sometimes it's sending off notifications to people when they need to take action. For example, think of all the events that need to be processed when a product is ordered on a web application like Amazon:

- The item ordered needs to be pulled from a warehouse shelf, boxed up, and passed off to a shipping service.
- The customer's credit card should be charged the correct amount and sent a receipt.
- The item should be added to the user's order history.
- Ads for suggested items should be updated based on this order.
- etc.

### 3. Data storage
After or during the data processing phase, it's likely that some of this user input data should be stored for retrieval at a later date. Data storage isn't as simple as just putting everything in a spreadsheet though. Sometimes web apps _have_ to store certain data for regulatory compliance, sometimes they are _not allowed_ to store certain data, and sometimes there are regulations about _how_ certain data can be stored. When a web app gets really large, data storage, caching, and recovery can become very complex as even the fastest computers have a hard time searching millions of rows of data quickly.

## Tools for Building Web Applications Without Code

Now that you know what a web application is, why you might need one, and some of the things you should consider before making the move to build one, let's look at some options for creating your own web app. While all of these tools are high-quality, professional tools that should work for most businesses, there is always a possibility that none of them will work for your use case - sometimes custom code is still necessary. That said, there are many great options for building web applications without any code at all:

### [Wordpress.org](http://wordpress.org/)

**Description:** Wordpress has been around a long time, and it now powers millions of websites including massive ones like CNN and Tech Crunch. While it used to be just a blogging engine, it's grown to be much more thanks to thousands of free plugins and themes built by developers. The power of Wordpress is in its flexibility though as even small businesses can successfully use Wordpress, and founders without a developer can go a long way without ever editing any code.

**Pros:**
- Very robust ecosystem of themes and plugins
- The code and (most) plugins are free
- Best when managing a content-based site, but can work for ecommerce or even social sites

**Cons:**
- You will need to pay for hosting, so look for companies that specialize in Wordpress hosting
- Security can be an issue. Wordpress sites - especially those that are not set up properly - are vulnerable to hacking and spam
- If you go crazy on the custom plugins and themes, your site may start to operate strangely or slowly

### [Bubble](http://bubble.io/)

**Description:** Bubble is probably [the best web application builder I've seen](https://www.karllhughes.com/posts/10-web-app-builders) for those who don't code. You can use Bubble as your data storage or hook it up to an existing database or import data from a spreadsheet, kick off notifications when data changes, and handle user accounts and logins with ease. They even offer a mobile app builder if you want to expand your web app in the future.

**Pros:**
- User accounts and logins are handled for you
- Creating databases is simple and you can import CSV files with your data
- Their visual interface is much more intuitive than writing code
- If you have a developer, you can add your own custom code to your Bubble app

**Cons:**
- Learning Bubble is a big undertaking, and you still have to think like a coder to get the most out of it
- Bubble apps are never going to be super fast

### [Airtable](https://airtable.com/invite/r/4EaSmQNr)

**Description:** I've started using Airtable for almost everything that I used to pack into spreadsheets. While Airtable is more of a spreadsheet and data visualization tool, you can embed Airtables into your website and users can submit responses right in Airtable too. If you need side effects or extra data processing, just hook it up to [Zapier](https://zapier.com/).

**Pros:**
- Super simple to get started. If you can use Google Sheets, you can use Airtable
- Custom "views" for your data so you can change what users can see and how it is presented on your site
- Input forms to allow users to add content
- Can use with Zapier to trigger events in other services, send emails, etc.
- Database-style linking between records means much better data modeling than in a spreadsheet
- Every Airtable you make has API access, so developers can customize the presentation of the data in the future

**Cons:**
- Not as customizable as some options
- While you can customize colors a bit, you can tell when someone is using Airtable
- Won't work as a standalone solution. You'll have to integrate it with other tools to get a complete web app experience

{% assign tool = site.tools | where:"title","Shopify" | first %}
### [Shopify](https://www.shopify.com/)

**Description:** Shopify has become the standard for small, standalone eCommerce stores. If the primary goal of your web application is to sell physical products, Shopify is probably the easiest and best option. Fpr inspiration or to see what's possible, check out the [examples on BuiltWithShopify](https://www.builtwithshopify.com/).

**Pros:**
- Simple to set up and get started, but still pretty customizable
- Lots of themes and developers out there work with Shopify
- Can be customized or hooked into Zapier to handle side effects or process data
- Payment processing is done securely and you don't have to worry about hooking up a bunch of third party services

**Cons:**
- As with many all-in-one solutions, you're sort of locked into Shopify when you start using them. Migrating your data elsewhere might be a huge pain
- There are limits to the way you can present your products based on the themes available
- Their app or plugin store is paid, so you'll probably have to pay more to get added functionality

## Next Steps

If you have your own suggestions, feel free to [send me your suggestions on Twitter](https://twitter.com/karllhughes).
