---
layout: post
title: "The Many Roles of a Startup CTO"
date: 2015-06-01
img: https://i.imgur.com/e43eJtu.jpg
link: http://www.karllhughes.com/?p=743
tags: [management, startups, cto]
---
"Chief Technical Officer" sounds like a glamorous title. It's right up there with "Chief Executive Officer" and "Chief Financial Officer" in the pecking order of a company's leadership, and at big organizations, it's quite an honor to hold. At an early stage startup, the distinction is slightly less exclusive. 

After talking to a lot of people in CTO or VP of Technology roles at bigger organizations, I've realized that the job in a startup is _way_ different from the same job in a fortune 500 company; probably much more different than that of CEO or even CFO. The trick is that in a startup, you can hire developers and IT people to do specific tasks, work in certain languages, or architect your projects, but filling in the rest of the gaps is still a huge responsibility, and it's likely that all that work will fall to the CTO. So rather than just oversee big picture technology direction or strategic partnerships (although he/she will certainly do that too), a startup CTO pretty much does a bit of everything. Here are just a few of the things we end up taking charge of - whether we like it or not: 

### 1. Building the MVP (Minimum Viable Product)

Most people who want a technical co-founder probably want someone to do this. Creating the first iteration of a startup's product usually falls to the CTO, and that makes a lot of corporate CTO's really bad for the job. Big company CTO's are usually 2 or 3 levels of management away from day-to-day engineering. 

### 2. Hiring engineers, IT professionals, and data managers

Finding and bringing on engineering talent is one of the hardest things tech startups have to do right now. The job market is really bad for employers right now (lots of demand for talent, only so many engineers) and hiring for cultural fit is often a challenge for people who are used to working in lonely silohs as developers. 

### 3. Figuring out company-wide security

I've never implemented a security policy before, but when one of our partners asked to see ours, it immediately fell to me to come up with one. Without established standards, I've found a lot of startups security to be absolutely atrocious or non-existent, so it's usually up to the CTO to shape things up. 

### 4. Product management

Most startups I've seen have a non-technical product manager and a de-facto technical project manager in their CTO. This usually means that while his primary goal is to make the vision of the non-technical manager a reality, it also means that he's got to manage the flow of work into his engineering or tech team.

### 5. Application architecture

MVP's rarely have a lot of high level architecture work, but when the time comes to plan a startup's version 2, the company rarely has the luxury of hiring a professional application architect. This work tends to fall to the CTO at least for a while.

### 6. Bug triage

As a startup grows, it usually finds the need to hire a low-wage customer service person (or get a service overseas to handle it), but what happens when this person or a customer finds a bug? It's unlikely that you've built a quality assurance team (see the next point), so it heads to the CTO to distribute bugs to his team accordingly. 

### 7. QA and testing

Once again, I've rarely seen an early stage startup with a dedicated QA team or even single person. Small companies usually come up with a system that splits testing and validation work between developers, but that system is usually dictated by...you guessed it...the CTO. This is the kind of tedious work that most corporate CTO's have long ago eschewed, and it adds to the challenge of finding a good CTO at a startup.

### 8. Dev ops

This has been my biggest challenge. As an application developer, my role at Packback has been the first time I've had to figure out application deployment on a relatively complex system from scratch. At first that meant a lot of shitty shell scripts and SSH-ing into the server, but I've picked up some tools to make it easier along the way. Once again, the CTO picks up the slack here until your startup can hire someone to handle it.

### 9. Data management

Big data is hot right now, but data scientists are a luxury that smaller startups usually have to wait on. Even if you can collect millions of data points on your customers, it's useless without a CTO who can come up with a decent system for storing and accessing this data securely.

### 10. Vendor relationships

We live in an API-driven world as developers. I can't remember the last time I built a project that didn't connect to at least two or three third party services from Google Analytics to Cloud SQL servers to Amazon S3\. It's awesome to have so much power at your fingertips as a developer, but as a CTO it's a lot to manage. You have to know who's updated which libraries, which plan you signed up for, and who's got access to your secret keys.

### 11. Overseeing the version 2.0

At some point in a startup's life-cycle it comes time to rebuild the MVP that is now likely being stretched way beyond its initial use case. Unless your startup has grown incredibly fast or you've pushed this step off for an extra long time, your CTO will probably be doing most of the planning work on this version as well. By this point, his role will be different than it was during the MVP days; now he'll have to manage a team of people rather than build it all himself.

### 12. Team growth management

Another reason that startup CTO's are rarely the same people who work as big company CTO's is that [managing growth of technology team is really hard](http://www.bersin.com/blog/post/2014/07/How-Do-We-Excite2c-Manage2c-and-Retain-the-Tech-Team.aspx). At the beginning you could excite your employees by offering them cool projects with lots of technical challenges. Now you've got to attract more specialized people with benefits, vacation days, and career advancement. Managing growth with 100 employees is totally different than managing growth with 5. 

### 13. Employee retention

Tech workers have options, so it's rare to keep one for more than 2 or 3 years these days. That means that as your startup exits the "tiny startup" phase and enters the "mid-sized startup" phase it's likely that your CTO will start dealing with some churn. Early employees yearn for the excitement of their first months with the company and start looking for new challenges or founding their own companies. The CTO who originally started building this thing alone in his apartment is now trying to convince his best talent to stay and minimize turnover.

These challenges are far from the only ones that early startup CTO's face, but they are some of the biggest ones, especially for people who mostly just want to write code. Have any other roles that the CTO fills at your company? Let me hear about it here or on [Twitter](http://www.twitter.com/karllhughes).
