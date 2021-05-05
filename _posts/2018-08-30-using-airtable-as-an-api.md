---
layout: post
title: "Using Airtable as an API"
img: "https://i.imgur.com/2TkEuM2.png"
date: 2018-08-30
categories:
  - Software Engineering
  - API Development
---

I've started using [Airtable](https://airtable.com/invite/r/4EaSmQNr) for almost everything that I used to pack into spreadsheets. The big advantage to using Airtable for your API is that they have an excellent visual user interface and integrations with many other tools built in. Plus, you can use Zapier to trigger custom actions when new items show up in Airtable.

### Pros
Some of the advantages to using Airtable as a [no-code API](/posts/api-development) include:

- Super simple to get started, a zero-code solution
- Authentication via a single API key is very simple
- Permissions using sharing settings in UI
- [Input forms](/posts/google-forms-alternatives) to allow users to add content
- Can use with [Zapier](https://zapier.com/) to trigger events in other services, send emails, etc.
- Database-style linking between records
- Query by complex functions for advanced filtering and searching of records
- User roles allow limited role-based permissions
- Excellent automatic documentation generated for each table
- API is automatic; every Airtable you make already has API access

### Cons
Airtable is far from perfect. In fact, you'll quickly run into its limitations if you have a lot of traffic and can't cache the data. Some issues with Airtable as an API include:

- Officially only allows up to 5 API requests per second, which might be fine for light use, but could be limiting as you scale up
- Authenticating users requires them to have an Airtable account and generate their own API key
- Single API key is not as secure as OAuth or similar server-client flow
- Not as customizable as some options

### How 
Using Airtable is one of the simplest ways to turn your data into an API. You basically just have to create an account and set up a base.

- First, [create a new account on Airtable.com](https://airtable.com/invite/r/4EaSmQNr)
- Create a "base" - Airtable's word for a new database - and add some data to one or more tables
- Next, generate an API key by going to [airtable.com/account](https://airtable.com/account) and generating an API key
  - _Note: Your API key can be used to access all your data in Airtable, so be sure to keep it secure_ 
- Next, go to [airtable.com/api](https://airtable.com/api) and select the Base you just created
  - Airtable has automatically generated API documentation based on your Base and Table's schema
- To use the API, open up [Postman](/posts/postman-api-access) and make your first call

<iframe width="560" height="315" src="https://www.youtube.com/embed/lOSTzeRpeg4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you want to enhance your Airtable API, check out the [Micro Airtable API library on Github](https://github.com/rosszurowski/micro-airtable-api).
