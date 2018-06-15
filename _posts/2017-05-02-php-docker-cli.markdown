---
layout: post
title: "Building a PHP Command Line App with Docker"
date: 2017-05-02
img: https://i.imgur.com/N8f725d.png
link: https://blog.codeship.com/building-a-php-command-line-app-with-docker/
tags: [docker, programming, php]
---
At The Graide Network, we needed to automate a bunch of reminder emails and text messages being sent to our users. Every hour, we wanted to go into the database and find any reminders that needed to be sent, then queue up jobs to send each of them. 

Here’s what I go through in this tutorial:

- Setting up a Laravel PHP command-line application
- Writing a cron job to run our command every hour within a Docker container
- Adding an acceptance test to verify that our command-line job works

In the second part of this tutorial, I'll cover deploying the application using [Codeship](https://codeship.com/) and [Docker](https://www.docker.com/).
