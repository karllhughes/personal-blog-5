---
layout: post
title: "Security Tips for Early Stage Startups"
date: 2024-05-30
img: https://i.imgur.com/20vtqSOl.jpg
categories:
  - Entrepreneurship
---

It's rare for small companies to make security a high priority, but it's an increasingly important thing to get right. According to StrongDM, [61% of small businesses fell victim to a cybersecurity attack](https://www.strongdm.com/blog/small-business-cyber-security-statistics), and many of these could have been prevented.

So, if you're just starting a business, here are my quick tips and best practices. This won't take you all the way, but I hope it acts as a starting point for those of you getting started.

## 1. Someone needs to own security

The first problem with security at a startup is that someone needs to really own it. That doesn't mean your first hire should be a Chief Security Officer or that you need to make your engineers spend 40 hours per week on it, but someone should be the go-to person when it comes to questions of security. The key is that they have to care about security and they have to have the latitude to do something about it when they see a problem.

## 2. Security is part of everyone's job

That said, the person in charge of security at a startup isn't the only one who should know your company's policies or keep all the passwords. Everyone - including new hires - should be taught the basics. In my experience, young startup employees are some of the worst when it comes to security; they keep their passwords on a text file on their desktop and every single one of them is "password1". While a lot of engineers worry about complex security attack vectors, those employees are probably your weakest link.

## 3. Use existing frameworks and tools

Common threats like SQL injection are so easy to prevent, but only if you have a framework that mitigates it. Yet, it's still one of the most common attack vectors on the web. Similarly, things like identity verification can be done with tools like [Idenfy](https://www.idenfy.com/identity-verification-service/).

The mistake startups often make is rolling their own solutions to everything when off-the-shelf tools exist and are better maintained and more secure.

## 4. Perform security audits regularly

Every 6 months you should change all the passwords on all your systems and services. Remember that your server is just one place where attackers could break in; your code repositories are only as strong as the weakest team member's Github password. If you get in the habit of conducting an effective security audit regularly it can often reveal problems and vulnerabilities that may have otherwise gone unnoticed.

And if you're not already, get a password vault tool and use it.

## 5. Don't touch credit card data

[PCI compliance](https://www.pcisecuritystandards.org/merchants/how_to_be_compliant.php) is time consuming and expensive, so it's unlikely that an early stage startup will be able to do it. Fortunately, there are dozens of credit card processors that prevent you from ever storing or touching credit card data on your servers. Stripe and Braintree are two of my favorites.

## 6. Set up monitoring and logging

Finally, a good security engineer keeps an eye out for the unknown unknowns, and one of the best ways to do this is by setting up monitoring and logging on your servers.

This barely scratches the surface, so if you've got more security tips for early stage startups, let me hear about them on [Twitter](http://www.twitter.com/karllhughes).
