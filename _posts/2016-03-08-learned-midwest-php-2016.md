---
layout: post
title: "5 Things I Learned at Midwest PHP 2016"
date: 2016-03-08
img: 
categories: 
  - Archive
---
Now that Midwest PHP 2016 is over and I'm back on my cozy couch here in Chicago, I'll share just a few of the nuggets of knowledge I gathered over the weekend in Minneapolis:

### 1\. Build microservices for failure and interchangeability

![](https://i.imgur.com/OWyTM8r.jpg)

Microservices are all the rage, and I definitely felt it at the conference. I have a feeling this is partly because [continuous integration and deployment](/posts/continuous-integration) have gotten so cheap and easy to set up, but the pattern is definitely attractive to developers. That said, it's also challenging to build services that are truly decoupled and abstracted enough to be interchangeable. [Mike Stowe's](https://twitter.com/mikegstowe) talk reminded me that one of the big theoretical advantages to microservices is that you can one day refactor or completely replace a service without the pain of completely rebuilding your system. Of course, you only get this upside if you did your microservices right to begin with, and that means testing for failure and building for interchangeability. If you've got tightly coupled microservices working across an HTTP layer, you're just getting the downside of increased latency with no upside of modularity.

### 2\. Hypermedia is an awesome idea; why don't more APIs use it?

[Ben Ramsey](https://twitter.com/ramsey) gave a presentation on building truly RESTful APIs. While we've been building APIs for a while now at Packback, none of them take advantage of hypermedia and as I think about the hundreds of connections to third party APIs that I've made over the years, only a few of them actually use the tool consistently. So what is hypermedia and why is it so underused? Here are [Ben Ramsey's words from his blog](https://benramsey.com/blog/2015/11/lack-of-hypermedia/):

> By hypermedia, I mean links that describe relationships among data in the API. When hypermedia isn’t used, the API becomes brittle, and those building clients that talk to the API are forced to code to URLs. The URLs become an important interface to the API, and if they change, they break everything. This leads to URL-based versioning schemes, and the only upgrade path for clients is to modify their code to accommodate the new versions. When an API uses hypermedia, the URLs are no longer important. Clients talking to the API do not need to code to URLs because the API will always convey where to go next through hypermedia relationships. If a URL changes, then there’s no problem. The change gets communicated through the API. This leads to a more flexible and evolvable API that can change over time without needing to update all the clients.

### 3\. Aol has some surprisingly cool technology

![](https://i.imgur.com/UJpPgJn.jpg)I haven't thought of Aol as a cutting edge technology company since they were sending everyone in the United States two dozen "free internet" CDs a month, but it sounds like they're making a comeback - this time in online media. [Samantha Quinones](https://twitter.com/ieatkillerbees) gave a compelling talk on how Aol collects 2600 messages per second from users on their site, and the iterations she went through while building the project. Working at scale is really interesting to me, and I've gotten to set up a couple applications that collect data at what I thought was a somewhat impressive rate. That said, Samantha's tool at Aol blows anything I've done out of the water. While I'm proud of Aol for innovating, I'm really interested in what they do with creative technology like this in the media industry. The old players (eg: newspapers) are either online or bust, so it's a great time for disruptive companies (possibly Aol) to figure out what's next in online media, realtime data pipelines, and creating the news cycle of tomorrow.

### 4\. NoSQL comes in many flavors, and you don't have to eat them one at a time

MySQL, SQL, MariaDB, and other relational databases have served web developers well for the past couple decades, but as alternatives have blossomed and matured, it's getting easier to see some reasonable use cases in everyday work. After listening to [Bradley Holt](https://twitter.com/BradleyHolt) of IBM (and CouchDB enthusiast) give a talk about NoSQL, I've realized that the term is much broader than MongoDB. In fact, NoSQL really encapsulates three (or more if you include hybrids) distinct database types: key-value, document, and graph. Most frameworks run under the expectation that you're going to use one kind of database (and maybe one form of caching) to build your application no matter how big or complex it is. While that might work for some simple services, I think we're seeing the one-database-type-per-app rules breaking down. It's easy to imagine an application where user IDs, emails, and passwords are stored in MySQL for consistency, but metadata on the user is stored in document or key-value databases (depending on the data involved). While I haven't gotten out and built a system like this yet, I feel more confident about a move in this direction than I would have before the conference.

### 5\. HTTP2 and APIs

Another thing that got me thinking a lot about the way we build APIs today was mention of HTTP2 and its implications on architecture. HTTP2 is the latest iteration (really the first iteration since the 90's) of the HTTP protocol that applications use increasingly to move data, images, html, etc. across the internet and into your client (usually a browser). Besides being faster, HTTP2 represents a fundamental shift in the way data can be delivered by opening up multiple two-way streams between the client and the server, so API builders can do some really clever things to speed up their application. I had a conversation about this with a couple of the speakers, and Ben Ramsey pointed out that one implementation he's heard of involves an API receiving a call, then proactively sending the response to calls that are likely to be made next by the user, thereby speeding up the most common subsequent requests. While adoption of the protocol will take years (if it's ever fully adopted), it's certainly possible to start designing applications that take advantage of these performance boosts today. I for one can't wait to try. Have your own thoughts on the best stuff at Midwest PHP? [Shoot me a message on Twitter](https://twitter.com/KarlLHughes), and thanks for reading.
