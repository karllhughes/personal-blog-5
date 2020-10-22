---
layout: post
title: "Five Takeaways from Clean Code: A Handbook of Agile Software Craftsmanship"
date: 2017-04-16
img: https://i.imgur.com/EHex9XC.png
categories:
  - Software Engineering
---
*I first published this post in May, 2015, but Clean Code is timeless. If you're new to programming, read it because it's a great primer. If you're experienced in programming, read it because it's a great reminder.*

-----

As regulars to my blog know, [I've been reading more this year](/posts/trello-as-a-reading-list/), and while most of the books I've finished in 2015 have been fiction, I've also made an effort to spend some time with books that will advance my professional knowledge.

Software engineering is a challenging field because it changes quickly and there's no end to what you can learn. While you can certainly gather applied knowledge from just _doing_ it and reading code, it's helpful for me to read principles out on paper (or on screen at least).

The first book I completed on software design this year was [_Clean Code: A Handbook of Agile Software Craftsmanship_ by Robert Martin](http://www.amazon.com/gp/product/0132350882/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0132350882&linkCode=as2&tag=volb-20&linkId=HA7LRZAECMH5WSGS). While some of the examples were a bit laborious to read (I'm not very experienced with statically typed languages like Java), it was still very helpful to see real world applications along with the advice the book offers. There were many smaller details that I highlighted from the book, but rather than list the dozens of those, I wanted to pass along my five favorite big-picture takeaways. I hope other software developers find these helpful, and if you feel that you could improve on any of them, I'd recommend checking out the book. 

## 1. Write Code that's Testable and (Almost) Everything Else Falls Into Place

> "Without tests every change is a possible bug. No matter how flexible your architecture is, no matter how nicely partitioned your design, without tests you will be reluctant to make changes because of the fear that you will introduce undetected bugs."

Testing is underutilized in the PHP community, and unfortunately there are a lot of developers out there who still aren't taking advantage of it at all. That said, once you do get familiar enough with unit testing that it doesn't scare you, it's clear that testing makes you more productive, more flexible to changes, and speeds up the ramp-up time for new developers. Besides the obvious advantage of telling you when your code stops working as expected, creating code that is testable forces you to separate concerns and inject dependencies rather than spaghetti stringing methods together. Testable code is the sign of good design that is also well executed.

> "Making our systems testable pushes us toward a design where our classes are small and single purpose. It’s just easier to test classes that conform to the SRP. The more tests we write, the more we’ll continue to push toward things that are simpler to test. So making sure our system is fully testable helps us create better designs."

## 2. Don't be Afraid to Create More Classes

The [single responsibility principle](http://en.wikipedia.org/wiki/Single_responsibility_principle) is one of the biggest stressed points in _Clean Code_, both explicitly and tangentially. Each function should be responsible for one thing, and if it becomes clear that a function is doing more than one thing, it should be split. When a class containing functions holds the responsibility for several categories of functions, it's time to split it as well:

> "The name of a class should describe what responsibilities it fulfills. In fact, naming is probably the first way of helping determine class size. If we cannot derive a concise name for a class, then it’s likely too large."

I feel like a lot of developers in the PHP world are still adapting to object oriented programming. While the infrastructure to create classes has been in place for a while now, there are still a lot of people hacking around with massive pages of globally available functions in their web sites (cough, cough: Wordpress). Fortunately modern frameworks like Laravel have some awesome constructs to help with single responsibility in classes ([read up on Command Handlers if you're interested](https://mattstauffer.co/blog/laravel-5.0-commands-and-handlers)).

## 3. Make Parts Interchangeable

> "In the context of dependency management, an object should not take responsibility for instantiating dependencies itself. Instead, it should pass this responsibility to another 'authoritative' mechanism, thereby inverting the control."

Reusability is another hallmark of a well designed program, and one of the best tools to encourage reuse is dependency injection via an IoC container. If you're new to software design or those terms make no sense to you, [read up on them](http://fabien.potencier.org/article/11/what-is-dependency-injection). It took me a while - and a lot of reading code - to get to a point where I understood dependency injection, but it's awesome for creating reusable, testable code.

## 4. All Clean Code Starts as Messy Code

> "It is a myth that we can get systems 'right the first time.' Instead, we should implement only today’s stories, then refactor and expand the system to implement new stories tomorrow. This is the essence of iterative and incremental agility. Test-driven development, refactoring, and the clean code they produce make this work at the code level."

It's a little discouraging as a new developer when you look at your work on a brand new project compared with that of a more mature open source one out on Github. "How did they write such clean code?" you wonder. It seems like you'd never be able to come up with such an elegant solution. _Clean Code_ the book really helped me be okay with starting out with my own messy code. Nobody writes clean, elegant code the first time through, and most mature projects have been refactored more times than you realize. Requirements change, solutions change, developers change, and along the way a good system with responsible developers will slowly but continuously improve.

## 5. Refactoring Happens Now or Never

That said, you have to refactor quickly:

> We’ve all looked at the mess we’ve just made and then have chosen to leave it for another day. We’ve all felt the relief of seeing our messy program work and deciding that a working mess is better than nothing. We’ve all said we’d go back and clean it up later. Of course, in those days we didn’t know LeBlanc’s law: _Later equals never_.

If you continually put off refactoring messy code, you'll eventually find yourself with a mess too big to deal with, and then you get yourself into a situation where a massive rewrite is required. Big rewrites take twice as long as anyone thinks and likely cost three times as much. Nobody likes them, and you're bound to lose some functionality in the process.

> "I like my code to be elegant and efficient. The logic should be straightforward to make it hard for bugs to hide, the dependencies minimal to ease maintenance, error handling complete according to an articulated strategy, and performance close to optimal so as not to tempt people to make the code messy with unprincipled optimizations. Clean code does one thing well." - Bjarne Stroustrup, Inventor of C++
