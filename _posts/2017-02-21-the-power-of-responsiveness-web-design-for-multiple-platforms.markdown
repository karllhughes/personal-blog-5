---
layout: post
title: "The Power of Responsiveness - Web Design for Multiple Platforms"
date: 2017-02-21
img: https://i.imgur.com/QPAYcp7.jpg
tags: [web-design, responsive-design, apps]
---
*Since writing this post in 2012, the case for responsive (and now [progressive](https://developers.google.com/web/progressive-web-apps/)) websites has gotten even stronger. The frameworks available make it easy to do, and the variety of screen sizes has only increased.*

-----

As more and more content consumers use "non-traditional" devices to access the internet, content providers are offering a variety of solutions. While large organizations with lots of content may choose to develop a mobile app in house, that takes _a lot_ of work. Think about it, not only do you have to make a version for iOS and Android, you've then got to think about optimizing it for larger screen sizes used by tablets like the iPad. 

## But What About the Little Guys?

For smaller companies, individual bloggers, and resource-strapped news providers, there is a viable alternative: **Responsive Design**. 

## What is Responsive Design?

A website that is responsive is one that essentially "responds" to the device accessing it. For example, if the reader is using a desktop computer, their screen resolution is likely high enough to support a wide page with lots of columns. But, if the reader is using a mobile phone, they probably only have room to see one narrow column, and wider sites will be cumbersome to read as they will likely have to do a lot of side scrolling. 

There are several ways to approach responsive design. ~~For this site, I used a slightly modified version of [Scherzo](http://leonpaternoster.com/wp-themes/), a light, responsive Wordpress theme created by Leon Paternoster.~~ (I now use [Milligram](https://milligram.github.io/) to handle responsiveness here) If you resize your browser window, you'll notice that as your window gets narrower, the content shifts and column widths change. Since this site is a pretty simple blog without ads, this theme works great, but with more complicated sites, responsive design becomes a little more demanding. 

## A Demonstration with Media Queries

Harnessing the power of CSS Media Queries, you can move elements around the page. The following screen shots are all from the same site that I created as a demo of how responsive design can optimize your site's appearance without changing the overall styling.  Another advantage is that you can use a single code base, eliminating the need for a "mobile-only" site that is styled completely independently of your primary site.

## Examples of Responsive Layouts

![](https://i.imgur.com/WJBvAJo.jpg)

![](https://i.imgur.com/fMfDiZM.jpg)

![](https://i.imgur.com/QPAYcp7.jpg)

![](https://i.imgur.com/Yz8p7hE.jpg)

As you can see, the layout and section sizes change based on the screen width available, giving the reader more access to the higher priority items (the content) on the page. Without creating an app, it's very possible to give readers a good experience on mobile by harnessing responsive design.
