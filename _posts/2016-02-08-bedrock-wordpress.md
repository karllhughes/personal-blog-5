---
layout: post
title: "Bedrock: Bringing Modern PHP to Wordpress"
date: 2016-02-08
img:
categories:
  - Archive
---
I cut my teeth writing websites in Wordpress, but I've fallen out of love with it over the past five years. Initially, Wordpress is exciting because within minutes you can bring a site up and make it live to the world. Even better, you can edit code straight from the dashboard and see your changes immediately right in the browser. Of course, it won't take long before you realize that this is a _terrible_ idea, and you'll either get lost in complexity or you'll have to start at square one learning [PHP the right way](http://www.phptherightway.com/). **What if Wordpress didn't have to be bad?** But what if a situation comes up where you want the ease of use of Wordpress _and _to use the best practices of modern PHP? That's where [Bedrock](https://github.com/roots/bedrock) comes in. 

![bedrock for wordpress](https://i.imgur.com/oRh92Fb.png)

Bedrock adds a few key features that make using Wordpress easier for developers without taking away the awesome features included in the platform for non-techies or the ecosystem of free themes and plugins. With Bedrock, you get:

*   An improved folder structure that moves loading the app out of the root directory
*   Theme and plugin management with [Composer](https://getcomposer.org/) (this is my favorite feature)
*   Wordpress configuration with Dotenv files rather than a hardcoded php file

**The Wordpress core** The powerful Wordpress core files are loaded in via Composer when you set up your first Bedrock app. What's nice about this is that upgrading Wordpress is as simple as redeploying your application. **Loading your own custom theme via Composer** Composer is PHP's go-to package manager. With the myriad themes and plugins available for Wordpress, it makes a ton of sense to use Composer as an easier way to manage them, but Bedrock is the first good implementation of this that I've seen. I implemented this in my blog by first creating my own theme as a Composer package and then including it in [my blog's composer.json file](https://github.com/karllhughes/KH-Blog/blob/master/composer.json#L22). Now when I make updates to the theme, they are pulled in via Composer rather than me trying to copy all the files manually. **Wordpress configs** Another weak point for Wordpress is the requirement that configuration variables (including your database connection) be either kept out of version control and manually added to a PHP file or checked into your app and modified on the server directly. [PHP's Dotenv project](https://github.com/vlucas/phpdotenv) has been integrated and it's a big improvement for development. If you'd like to try Bedrock out yourself, check out [my implementation on my personal blog](https://github.com/karllhughes/KH-Blog). I've also got a [theme you can use to get started](https://github.com/karllhughes/titeblog-theme) by loading it in your own composer file. Also, for more on improving Wordpress, check out my post on how I got my Wordpress site to [load in less than 1 second without upgrading the servers](/posts/wordpress-1-second).
