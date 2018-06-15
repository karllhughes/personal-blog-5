---
layout: post
title: "Building a Free Website on the GABA Stack"
date: 2018-01-26
img: https://i.imgur.com/lnx7vsT.png
link: 
tags: [mvps, engineering, github, airtable, programming]
---
There are hundreds of ways you can put up a website without writing much code, but one pattern I've started playing around with is the GABA stack.

### What is the GABA stack?
You hear a lot about "LAMP" and "MEAN" stacks, but this is a bit different. Instead of using the fanciest new developer tools to build highly-scalable, well-crafted applications, GABA is all about **building something quickly and cheaply with as little code as possible.**

So what does "GABA" stand for?

- **G**ithub Pages - If you just want to host static HTML with a little Javascript or jQuery, [Github Pages](https://pages.github.com/) is the best option. It's free, it lives in the same place as your source code, and you can extend it to use something more robust like [Jekyll](https://jekyllrb.com/) once you need more than one page in your webapp.
- **A**jax/jQuery - If there's anything that needs to be dynamic on the frontend, we'll rely on [jQuery and Ajax](https://api.jquery.com/category/ajax/) to grab it from Airtable's API. jQuery also gives you some basic DOM manipulation tools and interactivity. I know it gets a lot of hate because it's been misused for so long, but really, it's a good tool for sites that don't need single page apps like Angular.
- **B**ootstrap - HTML and CSS are tedious to write, but [Bootstrap](http://getbootstrap.com/) requires no work or decisions to get going. Combine it with some custom colors, [Google Fonts](https://fonts.google.com/), and [Font Awesome](https://fontawesome.com/) icons, and you've pretty much got everything you need for a simple UI.
- **A**irtable - [Airtable](https://airtable.com/invite/r/4EaSmQNr) is my absolute favorite tool I found in 2017. Like Google sheets, it lets you store your data in a shareable, online spreadsheet-like format. Unlike Google sheets, it also comes with an API, database-like filters/queries, and customizable input forms and views. This means that you can set up an embedded Airtable form to handle data inputs and then display this data by calling their API right from your frontend.

### What does this look like?
I put together my first proof of concept using this stack over a couple early mornings this week. It's hosted now at [news.fored.us](https://news.fored.us/). The site is just a news feed of education blogs that I've aggregated using [Zapier](https://zapier.com/), [RSSMix](http://www.rssmix.com/), and [Airtable](https://airtable.com/invite/r/4EaSmQNr), but it's presented such that I can learn what people on the site want to see in future iterations of the project. If I see a lot of people clicking on the RSS link, that's the feature I'll build next; if they're clicking the "Popular" tab often, that's what I'll tackle.

[![](https://i.imgur.com/GBvNz8x.png)](https://news.fored.us/)

The goal of an MVP (even just a little side project like this) is to find something that might be useful to really build, so while I did write a little code (just some [HTML and Javascript hosted on Github](https://github.com/foredus/news-frontend)), there's nothing complicated in here. All the hard stuff (permissions, data storage, aggregation, etc.) is handled by the supporting services.

Since the site costs me (practically) nothing to keep running, I can just check the traffic every few weeks and see if there's any indication for what to build next. If nobody uses it, I'll try something different and I'll have lost almost nothing but a couple hours.

### What do I still need to figure out?
While my first proof of concept using the free GABA stack is up and running, it's admittedly very simple and wouldn't work for many applications. That said, I'm thinking that this could be scaled up quite a bit using other freely available tools:

- **User authentication/login** - I'm planning to try a service like [Auth0](https://auth0.com/) for this, but other single sign-on solutions might work.
- **Caching Airtable results** - Unfortunately Airtable only allows 5 requests/second, so if my site suddenly gets barraged with traffic, it's going to lock up. A simple proxy service would mitigate this, but I haven't found one that I can use as a service that's free. Worst-case scenario might be setting up a passthrough Node or Nginx container somewhere to handle this for me.
- **Searching** - I'll likely use [Algolia](https://www.algolia.com/), a managed search service, to handle indexing and searching news articles. Since my project is open source, it'll be free for a few thousand records.
- **Payments for advanced features** - I'm not really sure if anything here is worth charging money for, but it's possible that future iterations of the project may warrant it. If so, I could integrate a payment for using [Stripe](https://stripe.com/) or set up recurring payments with [Moonclerk](https://www.moonclerk.com/) pretty easily.

Have your own ideas for setting up a free/minimal web app? I'm always interested in hearing about MVP hacks like this, so [reach out on Twitter](https://twitter.com/karllhughes) to pick up the conversation.
