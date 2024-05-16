---
layout: post
title: "Sub 1-Second Page Load Time in Wordpress"
date: 2016-01-11
img: https://i.imgur.com/51nbhGK.png
categories:
  - Archive
---
Wordpress has a bad reputation on the web for being bulky and slow, but that doesn't have to be the case. As most bloggers build up more content, add bigger images, install new plugins, and move to feature-rich themes they forget that [speed is a huge factor in their site's performance on the web](https://googlewebmastercentral.blogspot.com/2010/04/using-site-speed-in-web-search-ranking.html), especially with more consumers using mobile devices. 

So, a few weeks ago, I decided to take my personal blog, which is hosted on a Hobby Heroku dyno ($7/month) and runs on Wordpress, and make it my goal to serve it up to users in less than 1 second. Now, Heroku hobby dynos are not exactly powerhouses in the server world. They just [have 512MB of ram](https://devcenter.heroku.com/articles/dyno-types#available-dyno-types) and moderate processing power, and unless you want to pay a bunch of money (I don't) for hosting, cranking up your servers is not the most efficient way to increase your Wordpress site's performance. Admittedly, some of these tips might require pretty involved development work, but a few of them are surprisingly easy to pull off, even for the casual tinkerer. Here are the six things that I did to get my Wordpress site to a sub 1-second load time:

### 1\. Run the latest version of PHP

PHP 7 offers a lot of new features over PHP 5.X, but more interestingly, it offers a huge performance increase. While it looks like HHVM, Facebook's PHP compiler, may be a bit faster, the [results were pretty nominal](https://kinsta.com/blog/hhvm-vs-php-7/), and the switching cost is a bit higher for HHVM than for PHP 7, so I opted to just upgrade to PHP 7.0.0. Heroku is now running PHP 7 by default, so that's good news if you're already hosted there.

### 2\. Upgrade your Wordpress core

Updates to the Wordpress platform happen pretty frequently, but it's important not to get too far behind. Core updates [improve speed, security, and functionality](https://premium.wpmudev.org/blog/speeding-up-wordpress/#update-cms), so they're a no-brainer if you're trying to get the most speed out of your Wordpress install possible.

### 3\. Remove bulky plugins

I've found that a lot of Wordpress plugins, even very popular ones, are very poorly written and not at all performant. If you have the resources, hire a developer to spend a couple hours taking a look at your plugins to make sure there aren't any red flags. If there are plugins that you know you don't use, you should definitely uninstall them as they may be slowing down your site behind the scenes.

### 4\. Strip down your theme

The other culprit in most slow Wordpress sites is a poorly built theme. It's relatively easy to test your theme, just make another version of your Wordpress site on another domain and change the theme. Compare the page load time between the two, and see if your theme in production is significantly slower. For my sub 1-second site, I customized a simple boilerplate theme called [HTML5 Blank](http://html5blank.com/) and added a few [Foundation components](http://foundation.zurb.com/sites/docs/) to handle buttons, grids, and icons. I also explicitly removed jQuery and all the Javascript that Wordpress automatically includes so the only Javascript the site loads is the script required by Google Analytics. There's a surprising amount of interactivity you can include in a site [without loading a massive Javascript library](https://www.smashingmagazine.com/2015/12/reimagining-single-page-applications-progressive-enhancement/). ![](https://i.imgur.com/Gj8qPGJ.png)

### 5\. Minify and cache your scripts

Another big performance boost that most Wordpress developers miss is in minification and caching. CSS and Javascript files can be minified, concatenated, and cached using a content delivery network, which means that browsers won't have to download 12 different supplemental files every time they load a page on your site.

### 6\. Cache static pages with Varnish

After completing steps 1-5 above, I had my page load time down to a consistent 1.5 to 2 seconds, but I wanted to see if I could go further. In my site's case, most of the content is static (meaning users can't interact with or add to it), and I only post an update every week or so. I'd had a little exposure to [Varnish](https://www.varnish-cache.org/) from when [Packback was on Shark Tank](http://bluesky.chicagotribune.com/originals/chi-shark-tank-chicago-packback-bsi,0,0.story), so I decided to dig in deeper and set it up for my own site. Varnish is a complete page caching mechanism that basically saves a static version of any page on your website and serves that up to visitors unless you tell it to do otherwise. For static pages like blog posts and pages, Varnish is perfect, and thanks to services like [Section.io](https://www.section.io/), you don't even have to install it on your own server. So that's everything I did to get my Wordpress site to a sub 1-second load time. My blog's whole [code base is open source](https://github.com/karllhughes/KH-Blog), so if you're interested feel free to fork it for your own Wordpress site.

#### Taking page load time further

There's plenty more that you could do to speed up a Wordpress site, depending on where you host it, how you set up your database, and how comfortable you are digging into code. If you've got your own tips or you'd like to hear more, [shoot me a message on Twitter](https://twitter.com/karllhughes).
