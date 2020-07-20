---
layout: post
title: "Using Postman to Access APIs Without Code"
img: https://i.imgur.com/KA7CkEA.png
date: 2018-12-11
tags: [apis, postman, no-code]
---

An "Application Programming Interface" or API describes the way that two computer programs talk to one another. There is [a lot you can do with an API](/posts/api-development), but if you aren't a developer how can you access an API? There are several good tools for getting data from APIs without code, but one of the best I've seen is [Postman](https://www.postman.com/).

Postman is a graphical user interface for HTTP APIs. This means you use it to can access data meant to be accessed by computers without writing any real code. It's really simple to set up and use Postman as well.

## Using Postman

To demonstrate, we'll use the [Holiday API](https://holidayapi.com/), so go to [holidayapi.com](https://holidayapi.com/) and sign up for a free API key.

- To set up Postman, [download it for your operating system here](https://www.getpostman.com/apps).
- Enter the URL `https://holidayapi.com/v1/holidays` into the Postman address bar
- Click "Params" and enter your `key`, `country`, and `year`.
- Click "Send" to make the API request to Holiday API.

![](https://i.imgur.com/B63DsOZ.png)

Assuming you put in a valid API key and there are results for the search you made, you should see something like this:

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

This raw data is called JSON data, and that's what many web-based APIs return. In addition to making complex API requests easier, Postman also makes responses easier to read by formatting them. This means you don't have to use a tool like JSON Formatter to make API data readable. If you do need to convert the JSON data, you can use [JSON to CSV](https://json-csv.com/) to convert it to an Excel-friendly document.

## Other Features

There are other things you can do in Postman that make accessing APIs easier as well. For example, you can store your team's API documentation in Postman. This documentation is made interactive by giving team members the ability to sync their local version of the docs with the online version.

Additionally, you can use Postman to automatically test your APIs. If you're building an API for your business, you can set Postman to run tests against your development environment every time you update your code.

## Pricing

One of the most appealing things about Postman is that it has a generous free tier. I've used Postman for numerous side projects without needing to upgrade, and my team only recently had to start paying $10 per month to manage our shared documentation. For most simple use cases - like accessing data from an API - Postman will be free.

## Why Postman?

The easiest way for people at any tech level to use Postman is to access APIs without code. This feature is free and you can get started by just downloading their software and calling any public API. Once you need more advanced features like automated API testing or shared team documentation, you can upgrade to their paid plans and start reaping even more value from the platform.

Have your own tool like Postman that I should know about? [Send it to me on Twitter](https://twitter.com/karllhughes).
