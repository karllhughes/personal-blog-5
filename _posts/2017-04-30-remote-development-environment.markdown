---
layout: post
title: "Setting up a Remote Development Environment with Google Chrome and DigitalOcean"
date: 2017-04-30
img: https://i.imgur.com/USkbqGm.png
link: http://www.karllhughes.com/?p=820
tags: [programming, google]
---
*I tried out this remote development setup for about 6 months back in late 2015, but it just ended up being too painful to use the remote IDE all the time. [PHPStorm](https://www.jetbrains.com/phpstorm/) has a remote development option though, so I may try that. Now that Docker for Mac is out and working well, I haven't run into the same issues I once was with running lots of VMs.*

*Still, this isn't a bad setup if you're interested in developing on a smaller machine or you move computers often.*

-----

My Macbook Pro is a couple years old now and I've been thinking about switching to something more portable (that new [MacBook is awful tempting](http://www.apple.com/shop/buy-mac/macbook/space-gray-256gb)), but being a developer, I don't want to get stuck with an underpowered device that won't run any project I have to throw at it for the next few years.

The inspiration for this project hit me when I saw my colleague Eric Tendian logging into his remote desktop PC at home through his Chromebook. If you're comfortable on the command line and aren't afraid of working in Linux, then why not make your whole development environment remote?

## Why would you want to do development work on a remote machine?

First, let's talk about why you would want to go through the process of developing on a remote machine. There are certainly some tradeoffs - I'll talk about the cons toward the end of the article - but here are the advantages of a remote work environment:

*   **Portability:** Don't have your computer with you, but you want to make a quick code change? This set up allows you to have access to your dev environment anywhere you have an SSH connection, meaning any terminal, Chrome web browser, or even a mobile app.
*   **Cost:** A new Macbook Pro will set you back between $1300 and $3000, but if you can do your dev work on a Chromebook and a Digital Ocean droplet, you can spend less than $200 up front and $40/month or less to keep your environment running.
*   **Environmental Consistency:** I almost always work with Linux servers, and while 95% of the time, there's no real difference between them and my Mac OSX, it's nice to know that my development environment more accurately mirrors our server's.
*   **Future Proofing:** As more of our tools go to the cloud, I think it's reasonable to assume that more of our computing power will too. The economies of scale and awesome tools for virtualization are making it cheaper all the time to get server space, and with the internet being available just about everywhere, connectivity is becoming less of an issue.

As I got into researching this project, I realized I was far from the first person to have this idea, so there are a ton of great tools and guides out there. Here's what I went through to get my set up and running: 

### 1. Setting up the DigitalOcean droplet

DigitalOcean's droplets are scalable virtual private servers that range in price from $5/month to $160+/month depending on the size and bandwidth you need. Setting up a new one is pretty simple, but here's a [good guide if you are new to provisioning Linux](https://robots.thoughtbot.com/remote-development-machine). Once I created the droplet, I used my Mac's terminal to log in as the root user. Once in, I created a new user so that I could lock down the root user (a major security issue), and then I [gave the new user an SSH key](https://www.howtoforge.com/linux-basics-how-to-install-ssh-keys-on-the-shell) so that it could connect with remote services and servers.

### 2. Getting essential Chrome Apps

Up to this point, I had done all the work in my bash terminal, but I ultimately wanted to be able to get in via Chrome. I also wanted a cloud text editor (for when I inevitably got sick of vim), a way to make calls to the server, and a way to navigate my databases. Here are the collection of tools I ended up settling on:

*   [Codeanywhere](https://codeanywhere.com/) (also includes a basic shell, but it's very slow)
*   [Chrome Secure Shell](https://chrome.google.com/webstore/detail/secure-shell/pnhechapfaindjhompbnflcldabbghjo?hl=en)
*   [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) (great if you do a lot of work creating API's)
*   [Chrome MySQL Admin](https://chrome.google.com/webstore/detail/chrome-mysql-admin/ndgnpnpakfcdjmpgmcaknimfgcldechn/related?hl=en)

### 3. Configuring the DigitalOcean droplet for remote web development

Now the hardest part (if you're not a sysadmin): configuring your DigitalOcean droplet.

Linux is an awesome operating system, but there isn't a lot installed or configured by default. Depending on the kind of development you need to do, this step will vary greatly. For me, I had to install PHP 5.6, Apache, Composer, and a few essential PHP extensions. Having done this before, it wasn't a huge deal, but be prepared to spend some time on this. An alternative method would be to find an image or use one of DigitalOcean's application images to get you started. ![](https://i.imgur.com/feVAuoG.png) If you get stuck, feel free to [leave me a message on Twitter](http://www.twitter.com/karllhughes) and I'll see if I can help.

## Downsides to remote development

As promised, I do want to acknowledge the negatives to taking this approach to development. While I haven't gotten to a point where I'm doing all my dev work on a remote server, I have switched a number of my side projects over, and here's what I've encountered so far:

*   **Security:** If you don't lock down your server, anyone who knows the IP/web address can see your projects on the web. If you need to expose the projects to an open port, the I'd recommend using Apache's basic auth or locking down the IP addresses that can access the site.
*   **Connectivity:** Obviously you must be online for this approach to work. This isn't really a problem since I have to be online to do just about any development work anyway, but if you're used to working offline this approach may frustrate you.
*   **Cost:** For a high end DigitalOcean droplet with 16GB of ram, you'll spend $160/month. At that price, you could finance a Macbook Pro over two years and have something to sell back at the end of it. While most web developers won't need a server with 16GB of ram, it may not end up being the cheapest option if you do.

**Other uses for a remote environment** Having your development projects in a convenient remote location gets you a lot more than just an easy way to develop on any machine. Here are some other reasons you may want to try this approach:

*   Use a remote environment to set up and experiment with Docker containers instead of using virtual box locally
*   Share your remote development environment between developers to minimize environmental issues
*   Host your clients' projects remotely to allow them easy access to your code and exact server setup when you complete the project

Questions? Comments? Having trouble? [Find me on Twitter and let's chat](http://www.twitter.com/karllhughes).
