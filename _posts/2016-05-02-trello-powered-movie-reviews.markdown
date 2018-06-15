---
layout: post
title: "Trello-Powered Movie Reviews"
date: 2016-05-02
img: 
link: https://www.karllhughes.com/?p=897
tags: []
---
Ever since I started using [Trello](http://www.karllhughes.com/tag/trello/) a few years ago, I've been finding new ways to use it for organizing and tracking things over time. I'm a huge fan of how versatile yet structured it is. One of my many personal boards is a [Movie Reviews board](https://trello.com/b/XJQWgIyI/movies). I started this board because I wanted to keep a running list of movies I wanted to see and how much I liked them. I'm not really any good at writing movie reviews, but as I compiled more and more of them, I started wondering if there was a good way to display them on a website somewhere? Sure, you could read them in Trello, but Trello is not optimized for readers, so I started looking into their API. [![](https://i.imgur.com/epQOO4R.png)](http://movies.khughes.me/#/)

### Trello as a backend

Trello's API allows you to grab all the data on a public board without authorization, so this is a perfect backend for a frontend Angular application. I started off thinking maybe I would write it in Angular 2, but the documentation was pretty sparse and reading source code isn't something I love doing in my free time. Instead I spun up an AngularJS 1.5 app using Babel and Browserify to allow me access to [ES2015](https://themeteorchef.com/blog/what-is-es2015/) (or ES6? I'm not sure what they're calling it these days...) features like modules. While the improvements are ultimately just syntactic helpers, I still think they help Javascript look much cleaner and more readable. I also like how they abstract away Angular, making it much easier to write true unit tests.

### Turning a Trello Board into a website

So, after a few weekends hacking away at this thing, I finally came up with "[Mellow](http://movies.khughes.me/#/)" (a mashup of "movies" and "trello"), which I'm hosting at [movies.khughes.me](http://movies.khughes.me/#/). On its own, this isn't that exciting of a website. It's not super pretty, and there isn't a ton of content there yet, so it's got room for improvement. But, what this project did get me thinking about was the broader uses for Trello as a CMS. [![](https://i.imgur.com/iMGvYcI.jpg)](http://movies.khughes.me/#/)

### Trello as a CMS

This isn't a completely original idea. I read an article in [The Changelog a few months back about how they use Trello to build their email newsletter](https://changelog.com/trello-as-a-cms/), and there's even a service someone set up called "[Websites for Trello](https://websitesfortrello.com)" that seems to be doing this. Still, I think there's probably use cases that would benefit from an open source framework that leans on Trello as a CMS. I can definitely imagine hosting simple blogs, recipe lists, book and movie review sites, etc. with Trello as a backend. If you're interested in picking up a project to build an open source CMS around Trello, [let me hear about it](https://twitter.com/KarlLHughes) or [fork my project on Github](https://github.com/karllhughes/trello-movie-reviews). If not, keep your eyes open because I might be tackling this project on my own soon.
