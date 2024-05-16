---
layout: post
title: "Security Tips for Engineers at Early Stage Startups"
date: 2017-04-26
img: https://i.imgur.com/20vtqSOl.jpg
categories:
  - Archive
---
*Since publishing this post in August, 2015 I've become somewhat fanatical about getting my company's employees, my wife, and my family to use the internet securely. Data breaches are very easy now. People use many services on a daily basis, so shared passwords is an increasingly common attack method. If you're a typical internet user, get a [password manager](https://en.wikipedia.org/wiki/Password_manager); if you're a CTO or engineer at a startup, get ready to own security.*

-----

It's rare for early stage startups to make security a high priority. You don't hear two first-time founders bouncing ideas off each other that include a plan for mitigating phishing attacks on their early employees.

## 1. Someone needs to own security

The first problem with security at a startup is that someone needs to really own it. That doesn't mean your first hire should be a Chief Security Officer or that you need to make your engineers spend 40 hours per week on it, but someone should be the go-to person when it comes to questions of security. The key is that they have to care about security and they have to have the latitude to do something about it when they see a problem.

## 2. Security is part of everyone's job

That said, the person in charge of security at a startup isn't the only one who should know your company's policies or keep all the passwords. Everyone - including new hires - should be taught the basics. In my experience, young startup employees are some of the worst when it comes to security; they keep their passwords on a text file on their desktop and every single one of them is "password1". While a lot of engineers worry about complex security attack vectors, those employees are probably your weakest link.

## 3. Use a framework

SQL injection is so easy to prevent, but only if you have a framework that mitigates it. Whether you've rolled your own or you're using something open source, don't ever set up a project that takes user input without a framework to prevent code injection attempts.

## 4. Perform security audits regularly

Every 6 months you should change all the passwords on all your systems and services. Remember that your server is just one place where attackers could break in; your code repositories are only as strong as the weakest team member's Github password. If you get in the habit of conducting an effective security audit regularly it can often reveal problems and vulnerabilities that may have otherwise gone unnoticed.

## 5. Don't touch credit card data

[PCI compliance](https://www.pcisecuritystandards.org/merchants/how_to_be_compliant.php) is time consuming and expensive, so it's unlikely that an early stage startup will be able to do it. Fortunately, there are dozens of credit card processors that prevent you from ever storing or touching credit card data on your servers. Stripe and Braintree are two of my favorites.

## 6. Set up monitoring and logging

Finally, a good security engineer keeps an eye out for the unknown unknowns, and one of the best ways to do this is by setting up monitoring and logging on your servers.

Have your own security tips for early stage startups? Let me hear your thoughts on [Twitter](http://www.twitter.com/karllhughes).
