---
layout: post
title: "How Microservices Help Enforce Domain Driven Design"
date: 2016-05-16
img: 
categories:
  - Archive
---
I'm working my way through a long backlog of episodes of Software Engineering Radio right now, and I just listened to [Eric Evans' episode on 10 years of Domain Driven Design](http://www.se-radio.net/2015/05/se-radio-episode-226-eric-evans-on-domain-driven-design-at-10-years/). Evans is the author of the original book on [Domain Driven Design](http://amzn.to/2287YWI), and during the episode he talked about some of the forces and trends that have come and gone in the past 10 years and how they've influenced and changed DDD.

## What is Domain Driven Design?

Domain Driven Design (or DDD for short) is a method of software development that encourages developers to use the same or similar terminology for creating the objects they work with as the business uses for its operations. The technical definition from Wikipedia is:

> Domain-driven design is an approach to software development for complex needs by connecting the implementation to an evolving model. The premise of domain-driven design is the following:
> 
> *   placing the project's primary focus on the core domain and domain logic;
> *   basing complex designs on a model of the domain;
> *   initiating a creative collaboration between technical and domain experts to iteratively refine a conceptual model that addresses particular domain problems.

In practice, this means that a business that sells shoes online should probably have database models and objects that reflect the needs of a shoe store. So, there may be a Catalog model that contains many Products that in turn have many Attributes. These attributes should include price, color, size, make, model, etc. In the case of an example like e-commerce - which has been done many times before - Domain Driven Design seems almost too obvious, but where DDD really helps is in the specialized and unique ways in which a business operates. For example, if you're an online shoe store that sells products for elite athletes you may offer very different services from one that sells products for children under 10\. Sure, there's crossover, but those two domains are definitely different, so the software solution we use to sell them should probably be slightly different.

## Where do microservices come in?

Let's switch gears to talk about microservices for a minute. [Microservice architecture](http://martinfowler.com/articles/microservices.html) embraces small, encapsulated pieces of software deployed separately and usually accessible via an HTTP layer. In short, microservices today mean lots of small APIs that talk to each other and one or more frontend clients. The awesome thing about microservices and DDD is that they work really well together. One of the keys of a good Domain Driven Design system is enforcing bounded contexts, which means that within different parts of the organization the models you create may be thought of differently. For example, in our shoe store, the New Product Innovation team may look at Products as fluid objects with many interchangeable attributes while the Customer Service team may see those objects as very rigid items and may only care about attributes like price, make, model, and size. One cares about creating and updating products while the other cares about getting attributes of existing products. Microservices lend themselves to reflecting these bounded contexts in a number of ways, but in our shoe store example, let's think of a good Products API. This microservice might care about Products in many contexts, but it can offer different endpoints to deal with each. So, you could build some endpoints for the New Product team to use when designing, creating, or editing shoes (probably POST and DELETE and PUT calls) and other endpoints for the customer service team to read the data they care about in their day-to-day operations (probably GET requests).

### Another example from Packback's domain

At Packback, we use this architecture pattern when thinking about our users in different contexts. We have two products (Packback Books and Packback Questions) which share the same Users microservice. This allows users of one product to skip the signup process for the other product, but gives them different information in their dashboard based on which product they're logged into. Often, the two frontends share the same backend endpoints, but occasionally one uses different filters than the other to request different data.

## In the end, DDD relies on strong communication

Like many parts of software development, the hardest part is good communication between the technical people building the product and the people who make the business run day-to-day. I really like [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law), which implies that companies with unhealthy communication habits are likely to build software with the same deficiencies. Domain Driven Design is a great tool to use in conjunction with microservices, but it only works as well as the organization can communicate and define its own domain. Have thoughts or comments about DDD and microservices? [Let me hear about them on Twitter](https://twitter.com/KarlLHughes).
