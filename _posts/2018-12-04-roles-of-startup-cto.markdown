---
layout: post
title: "The Many Roles of a Startup CTO"
date: 2018-12-04
img: https://i.imgur.com/TYBQOEy.jpg
categories: 
  - Startups
  - Management
---

<img src="https://i.imgur.com/e43eJtu.jpg" style="float:right; margin-left: 15px; max-width: 350px">

"Chief Technology Officer" (or "CTO") sounds like a glamorous title. It's right up there with "Chief Executive Officer" and "Chief Financial Officer" in the pecking order of a company's leadership, and at big organizations, it's quite an honor to hold. At an early stage startup, the distinction is slightly less exclusive.

After talking to a number of CTOs in the past few years, I've realized that the job of CTO in a startup is _way_ different from that in a fortune 500 company; probably much more different than that of CEO or even CFO. While startup CTOs can [hire developers to do specific tasks](https://www.karllhughes.com/posts/hiring-process), filling in the rest of the gaps is still a huge responsibility. It's likely that all that work will fall to the CTO.

_Note: If you're looking for more great reads for startup CTOs, check out [my favorite books here](https://www.karllhughes.com/posts/reading-for-startup-ctos)._

So rather than just oversee big picture technology direction or strategic partnerships (although he/she will certainly do that), a startup CTO pretty much does a bit of everything.

## Responsibilities of a Startup CTO
Here are just a few of the things startup CTOs end up taking charge of - whether we like it or not: 

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/AABZMJcqVA4' frameborder='0' allowfullscreen></iframe></div>

### 1. Building the MVP (Minimum Viable Product)

Most people who want a technical co-founder probably want someone to do this. Creating the first iteration of a startup's product usually falls to the CTO, and that makes a lot of corporate CTO's really bad for the job. Big company CTO's are usually 2 or 3 levels of management away from day-to-day engineering.

Startup CTOs should be very well versed in the [tools and technologies available for building MVPs](https://www.karllhughes.com/tools/), whether those be web apps, mobile apps, desktop software, or hardware. They can't be afraid to get their hands dirty because even if there is a budget to hire a team, the CTO will inevitably play back-up for any roles that can't be filled immediately.

### 2. Hiring engineers, IT professionals, and data scientists

Finding and bringing on engineering talent is one of the hardest things for tech startups to do in 2018. The job market is really tight for employers right now (lots of demand for talent, only so many engineers) and hiring for cultural fit at a small startup is often a challenge. Many developers want to specialize while startups demand generalists.

The CTO at a startup will have to get good at hiring, onboarding, training, and eventually replacing the company's technical staff. Having a proven hiring process and strong network will help here.

### 3. Figuring out company-wide security

I've never implemented a security policy before, but when one of our partners asked to see ours, it immediately fell to me to come up with one. A startup's [CTO will likely be the first team member to own security](https://www.karllhughes.com/posts/security-tips-startups), run audits, document security procedures, and train everyone on the basics.

### 4. Product management

Most startups I've seen have a non-technical product manager and a de-facto technical project manager in their CTO. This usually means that while the CTO's primary goal is to make the vision of the non-technical manager a reality, it also means that they've got to manage the flow of work into the engineering team.

In other cases, a startup may have a [CTO who stands in as the product manager](https://www.reddit.com/r/startups/comments/a20mp9/product_management_ceo_or_cto/eauh5ud/) or at least takes an active role in laying out the product planning process. In my current role at The Graide Network I lead both product and technology, which has been a stretch, but learning new things is the norm at startups.

### 5. Application architecture

Minimum viable products often suffer from incoherent, poorly evolved architectures. When the priority is to move fast and learn things, engineers may not have time to test everything and release a bug-free product much less refactor towards a centrally planned architecture.

That said, a good startup CTO will recognize when poor architecture is slowing down the team, and will step in to settle technical debt as needed. Eventually architecture may be passed off to senior engineers or dedicated teams, but it's likely that this will fall to the CTO for a while at least.

### 6. Bug triage

As startup grow, they usually need to hire customer service people, but before that happens, what do startups do when someone finds a bug? Without a mature quality assurance team (see the next point), it heads to the CTO to triage bugs, replicate and document the behavior, and then distribute bugs to the team to fix.

Deciding what to do when a bug comes in requires detailed knowledge about the tech required to fix it as well as the business' priorities and direction. A CTO who knows both the business and the code well will be best positioned to do this.  

### 7. QA and testing

Once again, it's rare to see an early stage startup with a dedicated QA (Quality Assurance) team or even single person. Small companies usually come up with a system that splits testing and validation work between developers, but that system is usually dictated by...you guessed it...the CTO. This is the kind of tedious work that most corporate CTO's have long ago eschewed, and it adds to the challenge of finding a good CTO at a startup.

That said, some of the fun of testing is coming up with a strong testing architecture. I really enjoyed planning out [our testing layers](https://www.karllhughes.com/posts/testing-layers) at The Graide Network, and while it still involves some messy hands-on work, the CTO is likely the only person who knows enough about the whole system to test it thoroughly. 

### 8. DevOps

When I first transitioned from software engineer to a leadership role, DevOps was my biggest challenge. For the first time, I had to figure out application deployment on a relatively complex system from scratch. At first that meant a lot of shell scripts and SSH-ing into the server, but I've [picked up some tools to make it easier](https://www.karllhughes.com/posts/continuous-integration) along the way.

Once again, a startup's CTO will pick up the slack here until they can hire a dedicated DevOps engineer to handle it.

![](https://i.imgur.com/9nVmGDYl.jpg)

### 9. Data science and machine learning

Data science, machine learning, and AI are hot topics right now, but data scientists are a luxury that smaller startups usually cannot afford. Even if you can collect millions of data points, it's useless without a CTO who can come up with a decent system for storing and accessing this data securely and quickly.

The good news is that there are a lot of tools for machine learning that don't require much specialized knowledge in this area. I was shocked at how quickly we could run machine learning experiments at Packback with just a few thousand data points and a free trail of [Microsoft's Machine Learning Studio](https://azure.microsoft.com/en-us/services/machine-learning/).

### 10. Vendor and customer relationships

We live in an [API-driven world](https://www.karllhughes.com/posts/cloud-services). I can't remember the last time I built a real project that didn't connect to at least two or three third party services. From Google Analytics to cloud SQL servers to Amazon S3, it's awesome how much power you can get for a very low cost. But as a CTO, it's a lot to manage. 

Startup CTOs have to keep up with who has updated which libraries, which service plans you signed up for, and who's got access to your accounts. When a vendor goes down for an update or makes a breaking change to their API, the CTO is on the hook to figure out what needs to be done.

Similarly, CTOs have to manage customer relationships, especially if the product integrates with other software or has its own API. I've been called into a number of sales calls when clients wanted to know about specific security or compliance questions, or they want to discuss a "must-have" feature for our next release.

### 11. Overseeing the version 2.0

At some point in a startup's life, it comes time to rebuild the MVP. Likely stretched _way_ beyond its initial use case and struggling to keep up with a growing user base, the CTO must decide when it's time to start replacing the old with something new and what that new something will be.

Unless your startup has grown incredibly fast or you've pushed this step off for an extra long time, your CTO will probably be doing most of the planning work on the version 2.0 as well. By this point, the CTO's role will be different than it was during the MVP days - probably more management and less hands-on work - but there will still be plenty of roles the CTO must fill.

### 12. Team growth management

Another reason that startup CTOs are rarely the same people who work as big company CTOs is that [managing growth of technology team is really hard](http://www.bersin.com/blog/post/2014/07/How-Do-We-Excite2c-Manage2c-and-Retain-the-Tech-Team.aspx). At the beginning you can excite your employees by offering them cool projects with lots of unsolved technical challenges. As the team grows, the CTO will have to attract more specialized people with traditional benefits, vacation days, and a structured career ladder. Managing growth with 100 employees is totally different than managing growth with 5.

### 13. Employee retention

Tech workers have options, so it's rare to keep one for more than 2 or 3 years. That means that as a startup exits the "tiny startup" phase and enters the "mid-sized startup" phase it's likely that the CTO will start dealing with some churn. Early employees yearn for the excitement of their first months with the company and may start looking for new challenges or go found their own companies. The CTO who originally started building this thing alone in his apartment is now trying to convince his best talent to stay and minimize turnover.

![13 Roles of a Startup CTO](https://i.imgur.com/qmBywUb.jpg)

These challenges are far from the only ones that early startup CTO's face, but they are some of the biggest ones, especially for people who mostly just want to write code. 
 
Looking for more reading material? Check out [my favorite books for startup CTOs](https://www.karllhughes.com/posts/reading-for-startup-ctos).
