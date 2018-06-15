---
layout: post
title: "My First Weekend with Hyper.sh"
date: 2017-05-06
img: https://i.imgur.com/acG2EO7.png
link: 
tags: [programming, devops, docker]
---
I've been doing a lot of searching for a simple Docker hosting experience lately.

I'm pretty committed to [Docker Compose](https://docs.docker.com/compose/) for running containers locally and  [Codeship for my continuous integration](https://blog.codeship.com/author/karlhughes/), but I hadn't found a container hosting service that was (1) simple enough for me to use on side projects, (2) reliable enough to use in production, and (3) not prohibitively expensive.

My goal this weekend was to get a couple side projects up and running on [Hyper.sh](https://hyper.sh/), and here's how it went.

## About the projects

Both the projects I wanted to deploy this weekend were NodeJS apps: [my personal blog](https://github.com/karllhughes/personal-blog), and a microservice that [emails me the latest articles](https://github.com/karllhughes/feedbin-mailer) from [Feedbin](https://feedbin.com/) every day.

Currently, both projects were set up on a Digital Ocean droplet and running with Docker Compose. That meant that I had to write a lot of scripts to automate deployments, and it was honestly a huge pain point. I've found that for side projects if I don't automate the minor stuff (deployments, CI, etc.) I probably won't update them very often. Digital Ocean droplets are great, but each one cost me at least $10 (the $5 ones couldn't build my Docker images reliably), and running multiple side projects on each was problematic. If one went down or had a memory leak, it would take other ones down with it. Another option I've used in the past is Heroku, which I also like, but I don't know about its support for Docker. If anyone's tried that I'd be willing to hear about it.

Since my semi-automated process hosting on Digital Ocean wasn't working well for these two apps, I decided to find an alternative.

## What is Hyper.sh?

I read about [Hyper.sh](https://hyper.sh/) on [HackerNews](https://news.ycombinator.com/item?id=12891584) a while back. I liked the idea of container-first infrastructure, and I first got an MVP of my personal blog running on their containers back in February. I didn't migrate then though as I hadn't figured out how to move data around, so when I sat down this weekend, I realized that it would actually work pretty well for my workflow.

### My Hyper.sh workflow

So here's how I'm using Hyper.sh for both of the projects mentioned above:

For [my personal blog](https://github.com/karllhughes/personal-blog), I downloaded my blog's data (it's using json files and [NEDB](https://github.com/louischatriot/nedb)) from its current server and created a [Hyper.sh Volume](https://docs.hyper.sh/Feature/storage/volume.html). I then attached it to a container that runs the NodeJS process using a [Hyper Compose file](https://github.com/karllhughes/personal-blog/blob/master/docker/compose.hyper.yml). Then I attached the container to a [Hyper.sh FIP](https://docs.hyper.sh/Feature/network/fip.html) which I mask using CloudFlare for DNS.

Now when you go to www.karllhughes.com you're getting served a Node app running on a 512MB Hyper.sh container which costs a fraction of what my DigitalOcean container did. It's also easier to manage. When I update code and push it, Codeship builds the image, pushes it to Docker Hub, then uses a Hyper.sh CLI container to [pull and recreate the container](https://github.com/karllhughes/personal-blog/blob/master/docker/deploy.hyper.sh).

The [feedbin-mailer](https://github.com/karllhughes/feedbin-mailer) project is even easier since it doesn't need a webserver. When I update code, I again use the Hyper.sh CLI container to [update the image](https://github.com/karllhughes/feedbin-mailer/blob/master/docker/deploy.hyper.sh), then I set up a [Hyper.sh Cron job](https://docs.hyper.sh/Feature/container/cron.html) to automatically run the script every morning.

![](https://i.imgur.com/Z7EMKqw.png)

### What I like

- **UI** It's nice to see what's running and when it was last updated without typing a bunch of stuff into the CLI, although their CLI is pretty nice too. The `--help` flag works for every command I've used.
- **Documentation** Almost every question I've had has been answered by a closer read of the documentation.
- **Pricing** I agree with [Hyper.sh's pricing page](https://hyper.sh/pricing.html), it is a crime to pay just to power on an instance. For most of my side projects, using a whole server just to host a few hundred visitors per month (or simply run a Node script every day) is very wasteful.
- **Support** Finally, the team at Hyper.sh has been pretty responsive considering I think there are just [four of them](https://www.linkedin.com/search/results/index/?keywords=hyper.sh&origin=GLOBAL_SEARCH_HEADER). They've always pointed me in the right direction for documentation I've missed and usually gotten back to my posts on [the forum](https://forum.hyper.sh/).

### What Hyper.sh could improve

- **More community engagement** The forum is there, but there are just a few people posting on it. If they've got users, maybe a little time spent on marketing to them or rewarding active participants would be well spent. I'm sure there are people out there who have tread the same problems I faced while setting up Hyper.sh.
- **More examples and use-cases** One thing that larger hosting companies do well (Digital Ocean being probably the best) is provide clear, step-by-step tutorials for lots of use cases. I'd start by documenting tutorials for using Hyper.sh to host 5 or 10 of their most popular stacks. If anyone at Hyper.sh is listening, I'd be happy to contribute, just [reach out](https://twitter.com/KarlLHughes).
- **Dealing with volumes** Finally, I did find some operations with volumes to be a little less intuitive than I had hoped.
  - First, there's not an easy way to download or back up a volume's contents to my machine. My plan is to write a Docker container to do this via S3 or something, but something like `hyper volume download <VOLUME NAME>` would be amazing.
  - Second, there isn't a way to disconnect a volume from a container and then reconnect it to another without taking the container down. I was hoping to do this for my deployment process.
  - Third, using volumes in multiple containers is a pain. You have to set up a shared volume container which then uses NFS to allow each container to attach to it. I am not enough of a Docker expert to propose a better solution, but I'm hoping they come up with something.

While I still have some testing to do before I recommend Hyper.sh for my work projects (I always like to give things a few months of side project testing before I bring them into the office), I'm happy to have found a Docker hosting solution like [Hyper.sh](https://hyper.sh/).
