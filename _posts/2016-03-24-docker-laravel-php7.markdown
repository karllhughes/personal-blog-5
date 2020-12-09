---
layout: post
title: "Using Docker to Run a Laravel Application in PHP7"
date: 2016-03-24
img: 
categories:
  - Software Engineering
---

PHP7 has been out for a few months now; [the performance benefits have been demonstrated](http://www.infoworld.com/article/3011967/web-development/php-7-offers-twice-the-performance.html), and most of the bugs worked out. Now is the time for early to mid-stage adopters to get moving! That said, nobody wants to go through a difficult upgrade process. Fortunately, I've found that upgrading most Laravel 5.0+ applications to PHP7 is almost completely pain-free. If you are worried though, there's a simple way to test them out using Docker.

![docker-php7](https://i.imgur.com/xwm4v6Q.png)

### What is Docker, and how can it help us test PHP7 applications?

[Docker](https://www.docker.com/) is a service for running containers. Containers are small, contained microservices that can run on a single machine. I see them as the next logical step in virtualization: where virtual machines let you emulate an entire operating system, containers let you emulate everything on top of the kernel, so more of the underlying infrastructure is shared while keeping a sharp separation of concerns. If that just went completely over your head, it's okay. I'm not an expert either, but that doesn't mean we can't use Docker as a tool to make our lives a little easier.

### Setting up Docker

One important note about Docker: it only runs on Linux. So, if you use a Mac or Windows computer for development, you'll need to create a virtual machine running Linux to get Docker running. Docker has [some tools that make this relatively easy](https://docs.docker.com/engine/installation/), and the documentation has improved greatly even in the last six months. Install Docker locally before you move on to the rest of this tutorial.

### Once you get Docker running, what can you do with it?

There are a number of good use cases for Docker, but I'd recommend starting small with local testing and development. [Moving it into production](http://blog.heavybit.com/blog/2015/3/23/dockermeetup) can be challenging, but using it to test a new version of a language or test a new service might be an ideal use case for beginners. I've used Docker for:

*   [Testing worker microservices](/posts/testing-layers) locally that will [run on Iron.io](https://github.com/iron-io/dockerworker)
*   Switching between Apache and Nginx for local development
*   **Ensuring that an application will run in PHP7 before deploying it to a production server**

That last use case is where I'll spend the rest of my time in this post.

### ![laravel-php7](http://i.imgur.com/FixPN7L.png)Running a Laravel Application Locally Using Docker

_Note: Since this project is ongoing, I'd recommend checking out the latest updates to the [Readme on Github](https://github.com/karllhughes/laravel-php-7). I'll try to keep the blog post up to date too, but I don't want to make any promises._

#### 1\. Prerequisites

Docker should be [installed on your machine](https://docs.docker.com/engine/installation/). You should also have a working [Laravel application running locally](https://laravel.com/docs/5.2).

#### 2\. Prep work

Navigate to the root of your Laravel project. Change the /storage folder permissions to "777" using "chmod -R 0777 storage/". I know, "777" permissions are bad, but you're just doing this locally and so far it's the best way I've found to allow Docker to access the folder and write to it.

#### 3\. Download the container

Download the latest version of the base PHP7/Laravel Docker container:  "docker pull karllhughes/laravel-php-7". The Dockerfile does a build of PHP7 on Ubuntu and installs some tools you'll need like vi, Composer, and Apache.

#### 4\. Run the container

From the root of your Laravel project, run "docker run -it -v $PWD:/www -p 80:80 karllhughes/laravel-php-7" to bring up the container's command line. _Note: Docker pros will probably pick a fight with me at about this point. I know, you're not supposed to log into a running container and start services. I don't care; this is a quick and dirty working solution to test PHP7 without a lot of setup. Also, I welcome pull requests if any of you wants to help improve the container: [https://github.com/karllhughes/laravel-php-7](https://github.com/karllhughes/laravel-php-7)_

#### 5\. Start Apache within the container

From the container's command line, navigate to the web root with "cd /www". Then run "apachectl start" to get the webserver running within the container.

#### 6. Make sure things are working

Your application should be available at _http://localhost:80_ if everything is wired up correctly. You can also attach the application to another port by modifying the command above to something else: "docker run -it -v $PWD:/www -p <YOUR LOCAL PORT>:80 karllhughes/laravel-php-7". If you get a 500 error, make sure your file permissions are open and you have a valid .env file in the project. You can also run "composer install" or "composer update" to make sure your packages work with PHP7\. Finally, you can run your unit tests with "php vendor/bin/phpunit". Now you've got your Laravel application running in PHP7.

## What's Next?
If you're looking to deploy your Laravel PHP applications, [check out my tutorial on using Laravel Forge](/posts/laravel-forge). While it doesn't support Docker yet, Forge is a great way to get your PHP apps out into the world fast, so I highly recommend it.
