---
layout: post
title: "Knowing Your Startup's Technical Maturity Level"
date: 2017-04-29
img: https://i.imgur.com/9lz5BG7.jpg
categories:
  - Startups
---
*As a startup developer I'm always trying to strike a balance between pragmatism and optimization. Since publishing this in October, 2015 I've continued to come back to this checklist as a baseline for startups who need more reliable software, and many of the items on this list were the first we tackled at [The Graide Network](http://www.thegraidenetwork.com/blog-all/2017/1/16/tech-accomplishments).*

-----

Developing software or products at a startup is a gradual process. I've often talked about how I don't believe software needs to be perfect from day 1 - in fact, I think [non-technical founders should get as far as they reasonably can on their MVP's before investing in engineering resources](/posts/creating-a-tech-startup-without-a-developer). Engineers are expensive; and until you know what the product is that you need to build and how it will make you money, bringing on technical talent is just a waste of their time and your money.

Eventually though, a startup needs to build strong technology for a few reasons: a technology company with a mature product can easily hire and onboard engineers; they know that releases aren't scary; they have confidence in their product; it's (relatively) easy to find good people who want to join their team; processes are in place to allow features to be released at a predictable pace. In short, life is easier when your technology is mature.

On the other hand, a startup company with an immature product has irregular bugs and downtime; their customers are often frustrated when using their app; employees fear the technology; and nobody is quite sure how things work. It's fine to start off this way if you have to, but no serious company can grow without becoming technically mature first.

## So how can we gauge a startup's technical maturity level?

First, let me say that _functionality alone is a terrible gauge of a startup's technology_. That's right, just because your app "works" doesn't mean your technology is stable, working, or secure. In fact, one of the most dangerous places to be as a founder is to think you've got a software product that can grow and scale when what you've really got is an impossible mess. But how can you tell the difference? 

## My scale for measuring a startup's technical maturity

I've defined 4 stages of technical maturity for a startup product. I have used these when evaluating or giving advice to startups as well as when we launch new things at Packback, but they're definitely a work in progress. I welcome your [thoughts and feedback on Twitter](http://www.twitter.com/karllhughes).

### 1. Functionality

Most of the product's basic features are implemented and have been released on a local, development, or simple production environment. The product works 90%+ of the time as expected.

#### Technical Details

*   Unit tests are sparse or non-existent
*   Often lots of "spaghetti code" and poor separation of concerns
*   May have a few acceptance or end-to-end tests if lucky
*   Typical of MVPs developed by low-cost overseas labor, sloppy contractors, or hackers

### 2. Deployability

The product can be painlessly pushed out to servers and updates can be made without excessive effort. The functionality on production servers is the same as on local/development servers. 

#### Technical Details

*   Server(s) have been provisioned and configured correctly
*   Configuration or deployment method is repeatable (eg: new servers can be spun up or down as needed)
*   Devs are able to deploy code without SSH-ing into servers regularly

### 3. Stability

Inconsistent or hard to reproduce bugs have been ironed out of the product. The product has users and a system for reporting and responding to bugs in a timely manner. Product improvements come through a defined pipeline and time is budgeted for paying down technical debt.

#### Technical Details

*   Testing across all major features
*   New features are implemented cleanly
*   Coding standards are adopted
*   Application can handle variable loads (eg: it can scale up when needed)
*   Some documentation is available to developers

### 4. Expandability

The developer(s) have high confidence in the product's stability, and aren't afraid of adding new developers or features quickly. Code is readable, documented, and [well-tested](/posts/testing-matters).

#### Technical Details

*   Tests across all major and minor features
*   Continuous integration system runs tests automatically
*   Changes don't regularly break existing functionality
*   Must get to this point before bringing on many new devs, especially entry level/interns
