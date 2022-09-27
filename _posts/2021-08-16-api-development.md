---
layout: post
title: "API Development: The Complete Guide for Building APIs Without Code"
date: 2021-08-16T01:22:01.187Z
img: /assets/img/api-development.png
categories:
  - Software Engineering
---

**The term "API" gets thrown around a lot these days, but what does it mean? What can you use an API for? Do you have to have a developer on your team to build or use an API? In this guide, we'll explore all those questions and more, including a spotlight on the tools you can use as a [non-technical founder](https://www.karllhughes.com/posts/non-technical-founder-hiring-cto) to build your own APIs.**

You don't have to understand what an API is at this point, but if you do, feel free to skip the first section and move right into "[Why Build an API?](#why-build-an-api)". If you already know why you need one, then skip down to "[Things to Consider When Building an API](#things-to-consider-when-building-an-api)", and if you are seasoned at building APIs but just want to know how you can build them without a developer, jump all the way down to "[Tools for Building APIs Without Code](#tools-for-building-apis-without-code)".

## What is an API?

API stands for "Application Programming Interface." Before I lose you with a bunch of technical jargon, let me put it in simple terms: **an API is a way for computer programs to talk to each other**.

APIs are used in almost all software, websites, mobile apps, or computer games. Some companies even make money using only their APIs, but before I get to that, let's take a look at an example of an API you're probably familiar with:

![Facebook API login](https://i.imgur.com/idFuNEf.png)

Ever seen a screen like this? This is a Facebook login button, and it uses Facebook's API to allow users to verify their identity. It essentially lets you skip entering your username and password by using your Facebook account as proof that you are who you say you are. Developers who use Facebook's API can save themselves time by not having to build their own username and password login system, instead piggybacking off of Facebook's.

Another way that APIs can be used is to show data stored in another platform on your website. Have you ever seen a comment form on a site that looks like this?

![Disqus comments](https://i.imgur.com/TAFn3lZ.png)

When comments are powered by Disqus it means that the website uses the [Disqus API](https://disqus.com/) to store their comments so they don't have to manage them, remove spam, or write lots of code themselves. APIs can save developers a lot of time.

Here's another great example of using an API to get data from a third-party source:

![FinanceBoards using many APIs](https://i.imgur.com/eKIl8LC.png)

[FinanceBoards](https://financeboards.com/) uses stock market data provided by several different sources to create charts, graphs, reports, and more for investors. If you want to build any kind of stock market tracking application, you'll need to get data like this, and [stock data APIs](https://rapidapi.com/blog/best-stock-api/) make it relatively easy to do so.

There's almost no end to the kinds of things you can build using APIs, and there are hundreds of free APIs you can use in your projects [check out this list on Github](https://github.com/toddmotto/public-apis), but that's a topic for another time. For the remainder of this guide, we'll focus on building APIs.

<!-- ad-banner -->

## Why Build an API?

APIs are very powerful because they allow developers to take someone else's work and build their own app or product from it, but why do API creators do it? It may seem that giving away your company's data or features in an API could help your competitors, but when done right, an API can allow your company to grow into new areas that you never thought possible.

Let's take a look at some companies that have used their APIs to grow and eventually dominate their fields.

### Quora: Using an API for Internal Use Only

![Quora user interface](https://i.imgur.com/6DbtWGi.png)

First of all, APIs do not have to be publicly available at all. In fact, most companies that have an API only use them internally to allow different parts of their website to talk to each other. [Quora](https://www.quora.com/) is a great example of this, as they have an API, but do not offer external developers a way to gain access to it. Instead, they use this API to keep the data in their mobile and web apps in sync.

The advantage to an internal API is that you can use the same database, business rules, and shared code behind the scenes to power your mobile app, desktop app, and website without having to worry about competitors stealing your content or developers misusing your data. So even if you never plan to give your data to partners, you may want to consider building an API simply to allow developers to build different apps with the same data. APIs are a great way to do more work with fewer developers.

### Twitter: Allowing Users to Build their Ecosystem

![Twitter API](https://i.imgur.com/U46KSa2.png)

[Twitter](https://twitter.com/) started out with a huge focus on their API. Developers could get almost any data from Twitter they wanted - trends, hashtags, user stats - and they built some really cool stuff with it. This massive amount of open data and the tools people built actually attracted more users to Twitter. Companies could easily hook into the Twitter API to let users share their content on Twitter without leaving their site, and Twitter in turn got even more content on the platform.

Twitter might have been able to build some of these applications on their own, but there's no way they would have been able to do everything that API users have imagined. Eventually - once Twitter dominated the microblogging universe - they [tightened up their API](https://www.theverge.com/2012/8/23/3263481/twitter-api-third-party-developers) and made partners pay for specific kinds of access. While this made early adopters mad, Twitter was able to profit from the growth of their API without sacrificing the long-term profits they now get out of it.

### Diigo: An Extra Incentive for Paid Users

![Diigo website](https://i.imgur.com/UTYacdW.png)

[Diigo](https://www.diigo.com/) is a bookmarking and annotation tool with a generous free tier, convenient Chrome extension, and mobile sharing apps. Because some users wanted to use Diigo for more advanced purposes and build their own applications using the bookmarks they saved in Diigo, Diigo decided to offer a public API, but with a catch. It's only available to paid users.

While providing the API probably isn't much more work than servicing their UI (in fact, it might be less work as [websites are notoriously hard to get right](https://www.karllhughes.com/posts/startup-website)), Diigo decided that the users who wanted API access were most likely willing to pay a few bucks per month to make their lives easier using the API. It certainly hooked me in and took the product from cool to a critical part of my weekly workflow.

If your business has successfully found a tech-savvy audience that is begging for API access, you might want to consider offering one especially if you can profit from it.

### Mailchimp: Allowing Integrations that Encourage Greater Usage

![Mailchimp](https://i.imgur.com/2iW9aMc.png)

[Mailchimp](https://mailchimp.com/) is one of the most popular email marketing tools out there, and it's my personal favorite. It's really easy to use, they have a generous free tier for small mailing lists, and they seem to always be the first when offering new features that are great for email senders. They also have a [well-documented API](https://mailchimp.com/developer/) that encourages even more interesting use cases.

Without their API, you can create a campaign from a template, add users to a list manually, and look at standard reports. But, using the Mailchimp API, you can build custom templates from your own website's data, import thousands of existing users from a database, or showcase your raw email campaign data in novel ways. There's no limit to what you can do, but all these new use cases also mean more revenue for Mailchimp as you still have to pay them to send your emails through their service. If you're building a software-as-a-service platform that charges based on usage, an API could be a great way to increase engagement.

### Aylien: API as a Service

![Aylien](https://i.imgur.com/lQwV0AU.png)

While many APIs are a bonus or supplemental feature, some companies are built as API-first services. [Aylien](https://aylien.com/) is a text analysis and natural language processing service that doesn't offer a user interface at all - they just sell access to their API.

This means that developers hoping to analyze or categorize data can simply send their text to Aylien, then listen for a response with all the analysis they need. There's no custom code involved at all, and using Aylien with existing data should take no more than a few minutes. They charge customers for this time savings though - once you go over their free tier, there's a fee for using it.

Aylien might someday offer a user interface, but by starting out as an API-first company, they've aligned themselves with developers and put the focus on their technical tooling rather than UI.

## Does Every Business Need an API?

> "Every company in the world already has valuable data and functionality housed within its systems. Capitalizing on this value, however, means liberating it from silos and making it interoperable and reusable in different contexts—including by combining it with valuable assets from partners and other third parties." - [Apigee State of the API Economy, 2021](https://pages.apigee.com/rs/351-WXY-166/images/Apigee_StateOfAPIS_eBook_2020.pdf)

Many businesses have had great success building APIs that customers or other third parties can use, but you do not _have_ to have an API, even if you are building a software-based business. In fact, the complexity of offering an API in addition to a user interface may be [too much for a small startup](https://www.karllhughes.com/posts/creating-a-tech-startup-without-a-developer), but it's still good to understand when and why an API is appropriate.

Here is a list of reasons you may or may not want to build an API. While not exhaustive, this should give you a starting point when deciding whether or not an API is right for your use case.

### You Should Probably Build an API If:

- You want to build a mobile app or desktop app someday
- You want to use modern front-end frameworks like [React](https://reactjs.org/) or [Angular](https://angular.io/)
- You have a data-heavy website that you need to run quickly and load data without a complete refresh
- You want to access the same data in many different places or ways (eg: an internal dashboard and a customer-facing web app)
- You want to allow customers or partners limited or complete access to your data
- You want to upsell your customers on direct API access

### You Should Probably _Not_ Build an API If:

- You just need a landing page or blog as a website
- Your application is temporary and not intended to grow or change much
- You never intend on expanding to other platforms (eg: mobile, desktop)
- You don't understand the technical implications of building one

One thing that doesn't have to stand in your way of building an API is not having (or being) an experienced software developer. **In fact, you might be able to build a serviceable API without any custom development work, but you should understand some of the implications of giving users API access to your data.**

![Deciding when to build an API](https://i.imgur.com/i9q2sLl.png)

## Things to Consider When Building an API

When you build a website with sensitive or proprietary data, you probably want users to log in before they can access it. The same holds true for APIs - you shouldn't make yours open to the public unless you want anyone in the world to have access. Even if you want the data to be easy to get, you may want to issue API keys just so you can keep track of who's using it and potentially lock out anyone who abuses your API. Security is one consideration, but there are many other things you should think about when building an API:

### Authentication
Who do you want to give access to your API? Paying customers? Internal employees? Anyone on the internet? If you want to institute any limits on how or how much your API is used, you'll need some form of authentication. Common options include Basic Auth, API Keys, OAuth tokens, and JSON Web Tokens. I won't get into the difference here, but there's a [great article by Zapier explaining the difference here](https://zapier.com/engineering/apikey-oauth-jwt/).

### Documentation
Developers who want to use your API will need some way to know how they can use it. API Documentation should describe the requests that are allowed, the format and type of data inputs allowed, and the responses returned by the API. These documents can follow certain standard formats (like the [Swagger specification](https://swagger.io/solutions/api-documentation/)), or they can be different between every API. We'll talk more about requests and responses in the next section of this guide.

### Role and Route-Based Permissions
Sometimes you will need your authentication rules to be quite complicated. For example, maybe internal developers can access certain parts of your API that public users or customers cannot. Developers can build in role or route-based permissions systems that prevent unauthorized use in specific parts of your API.

### Rate Limiting
When you offer access to your API to the public, it's usually a good idea to prevent people from using it too much or too quickly. Rate limiting can prevent users from abusing your API, scraping all your data, or simply crashing your app because they're making so many requests.

### Logging/Analytics
When your API returns an error to a user, you might want to know about it. Logging can be added to capture every request and response or just the ones that failed. Logging or analytics can also help you track how much your API is being used, especially when you're dealing with lots of third-party users.

### Side Effects
What if you want to trigger alerts, link multiple API requests together, or kick off background tasks with your API? These events are referred to as "side effects" meaning that they might not be contained in the primary request and response, but are still important actions when designing your API. Usually, this level of customization has to be custom-coded, but there are ways to manage side effects without writing code.

### Scalability
"Scalability" is a term that developers use to refer to the ability of your API to grow or shrink depending on the needs of your team or customers. For example, a scalable API can handle 100 users today and 10,000 users tomorrow without throwing lots of errors. Ideally, a good, scalable API will cost less when it's not in use, but that level of scalability is tough to reach without a developer.

### Speed
500 milliseconds (1/2 a second) may not sound like much time, but for computers, this is an eternity. While there's no single answer to the question, "[How fast should your API be?](https://dev.to/karllhughes/building-a-response-timer-to-benchmark-api-performance-3k6k)" many successful APIs respond within 100 milliseconds. This can depend greatly on who your users are and what they're using your API for. Real-time stock market price APIs need to be much faster than most consumer web applications.

![Can your API handle the real world?](https://i.imgur.com/U0j7OTh.png)

## How an API Works

Now that you know what an API is and why it might be a good fit for your business and some technical considerations, let's make it a little more tangible.

APIs are a way for computers to share data or functionality, but computers need some kind of interface to talk to each other. While there are many options out there, we'll focus on [HTTP APIs (also known as Web APIs)](https://en.wikipedia.org/wiki/Web_API) as they are the most common option in web and mobile app development.

### The Building Blocks of an API

**First, an API needs a data source.** In most cases, this will be a database like [MySQL](https://www.mysql.com/), [MongoDB](https://www.mongodb.com/), or [Redis](https://redis.io/) (don't worry if you don't know what those are, they're basically just ways that programmers store data), but it could also be something simpler like a text file or spreadsheet. The API's data source can usually be updated through the API itself, but it might be updated independently if you want your API to be "read-only".

**Next, an API needs a format for making requests.** When a user wants to use an API, they make a "request". This request usually includes a verb (eg: "Get", "Post", "Put", or "Delete"), a path (this looks like a URL), and a payload (eg: form or JSON data). Good APIs offer rules for making these requests in their documentation.

**Finally, an API needs to return a response.** Once the API processes the request and gets or saves data to the data source, it should return a "response". This response usually includes a status code (eg: "404 - Not Found", "200 - Okay", or "500 - Server Error") and a payload (usually text or JSON data). This response format should also be specified in the documentation of the API so that developers know what to expect when they make a successful request.

![API Request, Response, and Data Source](https://i.imgur.com/PiT8p1E.png)

An API can optionally do many other things (see the list of considerations above), but these three things are the most fundamental for any API. To make these concepts even more concrete, let's access a couple real APIs and see what they look like. Don't worry, you don't have to know how to code to follow along.

### Accessing an API from Your Web Browser

HTTP APIs actually use the same method of communication that your web browser uses when it accesses websites. This means you can access some APIs by simply typing a URL into your browser.

For example, [Open Food Facts](https://world.openfoodfacts.org/data) has a free API for getting information about foods and ingredients. You can go to [this link](https://world.openfoodfacts.org/api/v0/product/737628064502.json) in your web browser to see the API response for all the data they have on "Stir Fry Rice Noodles".

When you go to that URL, you'll see a mess of data like this:

```json
{"status":1,"product":{"ingredients_text_with_allergens":"RICE NOODLES (RICE, WATER), SEASONING PACKET (PEANUT, SUGAR, SALT, CORN STARCH, SPICES [CHILI, CINNAMON, PEPPER, CUMIN, CLOVE], HYDRDLYZED SOY PROTEIN, GREEN ONIONS, CITRIC ACID, PEANUT OIL, SESAME OIL, NATURAL FLAVOR).","generic_name_en_debug_tags":[],"nutrition_data_per_debug_tags":[],"additives_prev":" [ rice-noodles -> en:rice-noodles  ]  [ noodles -> en:noodles  ]  [ rice -> en:rice  ]  [ water -> en:water  ]  [ seasoning-packet -> en:seasoning-packet  ]  [ packet -> en:packet  ]  [ peanut -> en:peanut  ]  [ sugar -> en:sugar  ]  [ salt -> en:salt  ]  [ corn-starch -> en:corn-starch  ]  [ starch -> en:starch  ]  [ spices -> en:spices  ]  [ chili -> en:chili  ]  [ cinnamon -> en:cinnamon  ]  [ pepper -> en:pepper  ]  [ cumin -> en:cumin  ]  [ clove -> en:clove  ]  [ hydrdlyzed-soy-protein -> en:hydrdlyzed-soy-protein  ]  [ soy-protein -> en:soy-protein  ]  [ protein -> en:protein  ]  [ green-onions -> en:green-onions  ]  [ onions -> en:onions  ]  [ citric-acid -> en:e330  -> exists  -- ok  ]  [ peanut-oil -> en:peanut-oil  ]  [ oil -> en:oil  ]  [ sesame-oil -> en:sesame-oil  ]  [ oil -> en:oil  ]  [ natural-flavor -> en:natural-flavor  ]  [ flavor -> en:flavor  ] ","nutrition_data":"on","ingredients_from_palm_oil_n":0,"editors":["","thierrym","manu1400","andre","upcbot"],"allergens_hierarchy":[],"brands":"Thai Kitchen,Simply Asia","link":"",...
}
```

Obviously, this is impossible for humans to make sense of, but it's actually formatted in "JSON", a very common and easy-to-parse format for computers. To see the data in a more readable way, you can format it using a [JSON formatter](https://jsonformatter.org/).

- Go to [jsonformatter.org](https://jsonformatter.org/)
- Copy/paste all the messy-looking text from the openfoodfacts API response above into the left-hand side of the JSON formatter.
- Click "Format/Beautify"

![Formatting API responses with JSONFormatter.org](https://i.imgur.com/j6nPxdu.png)

Now the data is a little easier to look at. Congratulations, you just made your first real API request!

### Accessing an API from Postman

The example above was simple because the API didn't require any authentication and we were just making a "Get" request to see all the data about a single product. If the API you're accessing or building is more complex, you'll likely need to use an API tool like [Postman](/posts/postman-api-access).

- To set up Postman, [download it for your operating system here](https://www.getpostman.com/apps).
- We'll be using the [Holiday API](https://holidayapi.com/), so go to [holidayapi.com](https://holidayapi.com/) and sign up for a free API key.
- Enter the URL `https://holidayapi.com/v1/holidays` into the Postman address bar
- Click "Params" and enter your `key`, `country`, and `year`.
- Click "Send" to make the API request to Holiday API.

![Sending an API request with Postman](https://i.imgur.com/B63DsOZ.png)

Just like the response from Open Food Facts, the Holiday API returns a JSON data structure:

```json
{
    "status": 200,
    "holidays": {
        "2017-01-01": [
            {
                "name": "Last Day of Kwanzaa",
                "date": "2017-01-01",
                "observed": "2017-01-01",
                "public": false
            },
            {
                "name": "New Year's Day",
                "date": "2017-01-01",
                "observed": "2017-01-02",
                "public": true
            }
        ],
        ...
	}
}
```

In addition to making complex API requests easier, Postman also makes responses easier to read by formatting them. This means you don't have to use a tool like JSON Formatter to make API data readable.

### Accessing an API from Code

While using your web browser or Postman is great for testing and exploring an API, you (or your customers) will eventually want to connect to your API using code. There are many ways to do this, including:

- [CURL](https://curl.haxx.se/docs/manpage.html) from the command line
- [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started) or [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) in Javascript
- [Net::HTTP](http://ruby-doc.org/stdlib-2.5.1/libdoc/net/http/rdoc/index.html) in Ruby
- [Unirest](http://unirest.io/java.html) in Java

Pretty much every programming language or framework has an HTTP library that you can use to make API requests, but I won't cover them in detail here as this guide is all about no-code solutions. Just know that developers who want to use your API will likely need a tool like this.

## Tools for Building APIs Without Code

Now that you know what an API is, why you might need one, and how to access an API, you're ready to get your hands dirty and actually build one. All of the solutions below (with the exception of the last two) require no code, but many of them can be enhanced or improved with some custom development work.

I find this model of [starting with a no-code prototype and then enhancing it with code](https://www.karllhughes.com/posts/creating-a-tech-startup-without-a-developer) from a developer to be ideal as it allows you to test your API before you [hire a software engineer](https://www.karllhughes.com/posts/hiring-process).

### [Sparklite](https://sparklite.io/)

**Description:** If you have data and calculations in an Excel Spreadsheet, you can turn them into a Sparklite no-code app in just a few clicks.  Simply define the inputs and outputs in your spreadsheet and SparkLite will take care of the rest, giving you a secure, queryable API that developers can use with any frontend.

**Pros:**
- A no-code, simple solution
- [Integrations with other no-code builders](https://docs.sparklite.io/5i3pAmMSTNfd4RCwlIgv/integrating-your-api/integrations-hub)
- API testing UI built-in
- Works with Excel out of the box
- Fast, even with complex calculations
- Free!

**Cons:**
- No custom code or authentication yet
- No write or update support yet
- Google Sheets not yet supported

### [Sheetsu](https://sheetsu.com/)

**Description:** Sheetsu might be the easiest way to get started building an API because you probably already have some data in a spreadsheet that will make up the backbone of your application. Sheetsu takes any Google Sheet and turns it into a queryable, flexible API.

**Pros:**
- Super simple to get started. This is truly a zero-code solution
- Authentication via an API key
- Route-based permissions
- Automatically generated docs
- Input forms to allow users to add content
- Can use with Zapier to trigger events in other services, send emails, etc.
- Includes "instructions" you can email to developers to help them start using your API
- "Handlebars" option allows you to create a frontend template from your data

**Cons:**
- Does not allow you to enhance your API with custom code
- No user roles for advanced permissions
- Linking data in multiple tables isn't really possible
- Query options are somewhat limited (just a simple search by field)
- Doesn't appear to allow rate limiting
- While there is a free plan, it's extremely limited, and you're likely going to have to move to the $49/month plan pretty quickly

### [Airtable](https://airtable.com/invite/r/4EaSmQNr)

**Description:** I've started using Airtable for almost everything that I used to pack into spreadsheets. The big advantage to [using Airtable for your API](https://www.karllhughes.com/posts/using-airtable-as-an-api) is that they have an excellent visual user interface and integrations with many other tools built-in. Plus, you can use Zapier to trigger custom actions when new items show up in Airtable.

**Pros:**
- Super simple to get started, another zero-code solution
- Authentication via a single API key
- Permissions using sharing settings in UI
- Input forms to allow users to add content
- Can use Zapier to trigger events in other services, send emails, etc.
- Database-style linking between records
- Query by complex functions for advanced filtering and searching of records
- User roles allow limited role-based permissions
- Excellent automatic documentation generated for each table
- API is automatic. Every Airtable you make already has API access

**Cons:**
- Officially only allows up to 5 API requests per second, which might be fine for light use, but could be limiting as you scale up
- Authenticating users requires them to have an Airtable account and generate their own API key
- Not as customizable as some options

### [WrapAPI](https://wrapapi.com/)

**Description:** In theory, WrapAPI is a powerful and extremely useful tool for scraping data or making your own static website or spreadsheet into a queryable, dynamic API. In practice, it's a bit more complicated. I have played around with WrapAPI quite a bit, and while I'm highly technical, I found that it only works correctly for some websites. Relatively simple HTML-only sites tend to work best while complex "client-side" apps tend to get lost.

Still, it's worth trying this tool out if you already have your data on a web page (maybe an HTML table) and you want to expose it via an API as well.

**Pros:**
- Great if the data you have already exists on the web and it's displayed on a simple webpage
- Would also be useful for monitoring web pages that don't offer "official" APIs
- API-key based authentication
- Generous free tier (30k requests/month)

**Cons:**
- Can't save data through the API, they are read-only
- No logging, or extensions, and customizability is limited
- A little more difficult to get set up unless you know how [HTML and CSS selectors work](https://www.w3schools.com/cssref/css_selectors.asp).

### [Restdb.io](https://restdb.io/)

**Description:** What I like about RestDB.io is that it starts simple, but is very powerful if you are a developer. Unfortunately, it's not quite as easy to add things like authentication or validation as it is in some platforms, but if you have some Javascript chops, you might be able to write that on your own.

**Pros:**
- Can create "lookup" relationships between records
- Can bring your own database to customize even further
- Pricing is very good and each tier scales really high
- Lots of features can be added via "Codehooks":
  - Authentication
  - Logging
  - Emails
  - Role or route-based permissions

**Cons:**
- If you want to get beyond basic use-cases, you'll need a developer to help
- The auto-generated docs are too simplistic
- Vendor lock-in is a likely problem once you scale. While you can export your data, it would be pretty arduous to rebuild lots of custom Codehooks

### [Bubble](https://bubble.io/)

**Description:** Bubble is probably [the best web application builder](https://www.karllhughes.com/posts/bubble-web-app) I've seen for those who don't code, and because it also includes an option to expose your data or workflows over an API, it's worth noting here. You can hook into your application's permission settings to manage access to resources or keep certain resources hidden completely. If you're already using Bubble for your website, then using them to generate your API is an easy decision.

**Pros:**
- Permissions and authentication managed the same way as it is in the application builder
- Documentation generation with Swagger
- Logging through Bubble's admin interface
- Creating data models is pretty simple and you can import CSV files with your data

**Cons:**
- Learning Bubble is a big undertaking, and if you go with them, you're likely all in
- Not quite as customizable as building your own API with code, but it's pretty close

### [Algolia](https://www.algolia.com/)

**Description:** For searching data, Algolia is simply magical. Most other solutions here aren't concerned with performance because often, building an MVP doesn't warrant it, but if you're in need of speed and you have a lot of data, Algolia is a great solution. It can take some technical setup depending on how you want to use it, but [there's a Zapier connector in the works](https://discourse.algolia.com/t/algolia-for-zapier-beta/2949/7), and you can upload records via CSV or JSON. Even if you can't write code, you can probably get Algolia working for you.

**Pros:**
- Super-good at searching, setting up search rules, and speed
- Slightly more difficult than editing a spreadsheet, but not much
- Can be used as a replacement for Solr or Elasticsearch (if you don't know what those are, don't worry about it)
- Logging is available
- Scales up as high as you want

**Cons:**
- Limited flexibility and customization
- No documentation generation
- Can get expensive at higher use levels

### [Strapi](https://strapi.io/)

**Description:** Strapi is an open-source content management system that lets you self-host an API on your own server in minutes. Even if you're not an experienced developer, you can probably follow the [setup instructions](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html) to get started. The biggest limitation today is that you'll need to run and maintain a server to host your Strapi backend. But, as an [open-source company](https://www.karllhughes.com/posts/open-source-companies), I imagine Strapi will add a hosted version that makes it even easier for non-technical users to get started with.

**Pros:**
- Very flexible and fast
- Includes a GraphQL interface, which is a better option for some use cases
- Can build complex relationships between data models
- Permissions and authentication rules can be set granularly
- Scales up as much as your server can handle
- Free (but you do pay for your server)

**Cons:**
- Not completely "no-code" because you have to setup and run it on your own server
- More complicated to set up and configure than some options

### [PHP CRUD API](https://github.com/mevdschee/php-crud-api)

**Description:** If you're semi-technical or you can hire a developer to do some initial setup, PHP-CRUD-API might be a great option. Once you hook it up to an existing MySQL, Postgres, or SQL Server database, it automatically generates an API that is documented and highly customizable. The downside to this approach is that you'll have to pay to host and set up the application. The upside is that it should scale with you long after your MVP.

**Pros:**
- Much more flexible as you can view and modify the whole app's source code
- Once set up, you just have to modify your database schema to modify the API
- Scales as much as the server you put it on
- Automatic [Swagger](https://swagger.io/docs/) documentation generation
- Works great if you already have an existing database

**Cons:**
- Not really a "no-code" solution as you'll likely have to have a developer set it up for you
- While the application is free, you will have to pay for hosting it (probably $5-$25/month)
- No authentication, logging, triggers, etc. included out of the box, but they can be added with some custom coding

## Conclusion

Building an API without code is getting easier every year. When I first wrote this guide in 2017, the options were limited, but with the widespread growth of [cloud services](https://www.karllhughes.com/posts/cloud-services) and [low-code tools](https://stackoverflow.blog/2021/06/09/using-low-code-tools-to-iterate-products-faster/), I've been able to add many new options to this guide.

I intend to keep updating this guide periodically. If you have your own suggestions for building APIs without code, [find me on Twitter](https://twitter.com/karllhughes) to let me hear about them.
