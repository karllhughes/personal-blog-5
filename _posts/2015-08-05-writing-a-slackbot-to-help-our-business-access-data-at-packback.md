---
layout: post
title: "Packbot: Helping our Business Access Data at Packback"
date: 2015-08-05
img: https://i.imgur.com/BhqV017.png
categories:
  - Archive
---

_Note: Since writing this, I've stopped using Slack for most things. [Here's why](](/posts/no-slack))._

[Slack](https://slack.com/) is a messaging tool that's quickly become ubiquitous in large and small companies alike. It's basically like a walled off version of AOL Instant Messenger (you guys remember that from the early 00's right?) for your company's internal communication.

They have apps for iOS and Android, desktop clients, and a web interface, making Slack super accessible and easy to use, plus they allow you to create [Slackbots](https://api.slack.com/bot-users).

## What is a Slackbot?

Slackbots look like users on Slack in that they can write messages, mention other people, etc., but they're controlled by a computer not a real person. AIM had a similar bot construct that allowed people to make programs that told you the weather or dirty jokes when you contacted their bot.

While it may be cute to make a Slackbot that makes jokes (I had one running for a few weeks that poked fun at one of our sales people), they can be genuinely useful, like the Slackbot we created for Packback called [Packbot](https://github.com/packbackbooks/packbot).

## What is "Packbot"?

I should back up and explain what we do at [Packback](http://packback.co/).

We sell digital textbooks and offer professors and students a [question and answers platform centered around their class](https://www.packback.co/questions). One of the common problems we encounter is that while our salespeople are talking to professors about their classes, they may or may not know which textbook the professor is using. They may also not be sure if the textbook is available on our site yet, which may dictate the sales conversation moving forward.

**In short, the sales team needed a way to quickly determine whether a book was available on Packback, and that's what Packbot does.** So, when you enter an ISBN number in any public Slack channel, you'll get a response from Packbot with some basic info about the textbook:

![Packbot response](https://i.imgur.com/BhqV017.png)

## Making Packbot

There's not much to creating a Slackbot. If you're familiar with NodeJS or at least some basic Javascript, you can [follow this tutorial to get your first one up and running](https://www.freecodecamp.org/news/building-a-slackbot-with-node-js-and-slackbots-js/). In order to create Packbot, we used:

*   Heroku for hosting/deployment
*   NodeJS with Express to access our internal product API and respond when Slack sends a message its way
*   Environmental variables to set our base API url and Slack Token

### 1. Set up the Application

If you've set up a Node app before, this one is about as easy as they come. There's a package.json file that includes the dependencies we'll need for running an Express server and parsing Slack's data:

```
{
 "name": "packBot",
 "version": "0.1.0",
 "description": "Packback ISBN lookup bot",
 "main": "app.js",
 "author": "Karl L. Hughes <karl@packback.co>",
 "license": "MIT",
 "dependencies": {
    "express": "^4.x.x",
    "body-parser": "^1.x.x",
    "request": "2.56.x"
  }
}
```

Then there's an env.json file to hold our environmental variables on our local machine:

```
{
 "pb_base_url": "<SUBDOMAIN>.<DOMAIN>.<EXTENSION>",
 "slack_token": "<SLACK_TOKEN>"
}
```

And finally a Procfile for Heroku. This just tells Heroku what kind of application we're running so it can set up the standard environment.

`web: node app`

### 2. Writing the Node App

First, let's talk about what this app needs to do:

1.  Receive a POST request from Slack with an ISBN to look up
2.  Make a GET request to our internal product API to look up a book by ISBN
3.  Respond with a JSON string that includes details about the book if it's found

Pretty straightforward, and Node makes doing things like web requests a breeze, so it's a great tool for this. I've done more PHP in my time at Packback, so it was nice to use something new for a change. Here's a breakdown of what the Node app does in the app.js file: First, we import the modules required and set the port for running Express locally:

```
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();
var port = process.env.PORT || 1337;
```

Next, we import the environmental variables. On Heroku we have environmental variables, but locally I'm using an env.json file, so there's a bit of logic to handle that:

```
if (process.env.ENVIRONMENT === 'production') {
  var config = {
    'pb_base_url': process.env.PB_BASE_URL,
    'slack_token': process.env.SLACK_TOKEN,
  }
} else {
  var config = require('./env.json');
}
```

Adding a POST request endpoint is super easy. Ours just grabs the input from Slack, checks that the token matches and that a Slackbot is not making this request, makes a GET request to our product search API, and returns the response if a single result is found:

```
app.post('/isbn', function (req, res, next) {
    var token = req.body.token;
    var inputText = req.body.text;
    var userName = req.body.user_name;
    if (token === config.slack_token && userName !== 'slackbot') {
        inputText = inputText.split(":");
        var isbn = inputText[1];
        isbn = isbn.replace(/ /g,'');
        var options = getOptions(isbn);
        getJSON(options, function(statusCode, results) {
            if (results.total_records === 1) {
                var result = results.records[0];
                var responseString = "isbn13: '" + result.isbn13;
                responseString = responseString + "' | isbn10: '" + result.isbn10;
                responseString = responseString + "' | title: '" + result.title;
                responseString = responseString + "' | inventory: '" + result.inventory.toString() + "' | link: http://packbackbooks.com/p/" + result.isbn13;
                var botPayload = {
                    text : responseString
                };
                return res.status(200).json(botPayload);
            } else {
                res.status(404).end();
            }
        });
    }
});
```

There's certainly some room to improve the logic here for parsing the request and results, but it serves its purpose as an internal tool.

### 3. Testing Locally

One of the problems I ran into was testing the Slackbot locally. After adding a function to run the server:

```
app.listen(port, function () {
  console.log('Listening on port ' + port);
});
```

I tried sending the POST request locally, but I couldn't get my body response parsed properly, so I just added a GET endpoint to the app.js file:

```
app.get('/', function (req, res) {
  var isbn = req.query.isbn;
  var options = getOptions(isbn);
  getJSON(options, function(statusCode, results) {
    if (results.total_records === 1) {
      var result = results.records[0];
      res.statusCode = statusCode;
      res.status(200).send(result);
    } else {
       res.status(404).end();
    }
  });
});
```

Now I can hit `http://localhost:1337/?isbn=<ISBN>` and see the response that would be returned to Slack.

### 4. Deploying and Configuring Slack

Finally, once I had everything running locally I pushed the repo up to Heroku. To set up Slackbots, go to _Integrations_ then add one for _Outgoing Webhooks_.

![Setting up an outgoing webhook in Slack](https://i.imgur.com/AEovub3l.png)

From there, I added the URL to our Slackbot on Heroku and got the token for our environmental configurations.

## Slackbots: Making Your Data More Accessible

We have since built an internal tool to allow people to search for books on our platform, but that requires going to a new URL, logging in, and knowing how to use the tool.

What I love about the Slackbot solution is that Slack offers a platform that makes data accessible and lowers the barrier to accessing it while maintaining security. We know that anyone with access to our Slack channels should also have access to our product data quickly, so this tool makes sense for us.

If you'd like to build your own Slackbot, feel free to [grab Packbot's open source code](https://github.com/packbackbooks/packbot) as a starting point.
