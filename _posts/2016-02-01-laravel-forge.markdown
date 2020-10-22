---
layout: post
title: "Using Forge to Create and Deploy Laravel Projects Fast"
date: 2016-02-01
img: 
categories:
  - Software Engineering
---
I've always been a big fan of [Heroku](https://www.heroku.com/) for deploying my personal projects, but there are other options. Laravel's creator has a great project called [Forge](https://forge.laravel.com/) that makes deploying and managing a Laravel project even smoother than Heroku. We've been using Forge as part of our [continuous integration and deployment process](http://www.karllhughes.com/2015/continuous-integration/) at Packback for over a year now, and in most cases, it does the job perfectly. Here's a quick overview of how you can use Forge to set up and deploy your own Laravel projects:

## 1\. Register and set up your accounts

You'll need three things to start using Forge:

*   An account on Forge ([register here](https://forge.laravel.com/auth/register))
*   A verified account on DigitalOcean ([register here](https://m.do.co/c/6534184ea9d0))
*   A domain name with the ability to update DNS records

Forge will link to your DigitalOcean account and automatically provision a droplet for you, so you don't even need to set up your server on DigitalOcean - just enter your payment details.

## 2. Provision a new server

Once you're logged in to Forge and you've connected your DigitalOcean account, Forge can do all the heavy lifting creating your server. Just enter a name for your server, select the size droplet you want to use, region, and any additional options listed in Forge. You can use PHP 5.6 or HHVM, as well as enable backups automatically. If you're just using DigitalOcean to host Laravel projects, you really don't even have to log in once you've got everything hooked up. Once you click, "Create Server" Forge will get to work creating your droplet in DigitalOcean, installing the version of PHP you want to use, adding Nginx, and setting up configurations that you'd normally have to do yourself or copy from another droplet. ![forge provision server](https://i.imgur.com/a5CutMz.png)

## 3\. Create a new domain in Forge

Once the server has been provisioned, you'll need to add the domain name you're planning on using for your site. A default site gets created by Forge, but I'd recommend not using that as it will take extra work to get running with your domain. ![create domain in Laravel Forge](https://i.imgur.com/hAW66UM.png) When your domain has been added, click the pencil ("Edit") icon under the "Manage" column to get your site set up.

## 4. Install a project from Github

The easiest way to get your project running is to link Forge to your repo on Github. If you do this, it'll be easy to automatically deploy updates and allow others to contribute to your code. Once you've linked your repository, Forge will add a simple deploy script and you can go ahead and click "Deploy Now" to get things out there. If you don't want migrations to run automatically or you want to add your own steps to the deployment process, this is the place to do it. For example, we always add a `date` line to the beginning of the shell script just to make sure that when a deployment fails we know when it failed. Our deployment script for production sites ends up looking something like this:

<pre>date
cd /home/forge/url.of.this.site.com
git pull origin master
composer install --no-interaction --no-dev --prefer-dist
php artisan migrate --force</pre>

## 5\. Configuration

Most likely, your Laravel project will require a .env file with environmental variables in order to actually connect to a database and work. Fortunately, Forge makes this easy as well by giving you a .env file editor in the "Environment" tab for each of your sites. ![](https://i.imgur.com/hUPdDA3.png)You can also get more granular control over your Nginx configuration by clicking "Edit Files" -> "Edit Nginx Configuration" in the bottom right hand side of the Site Details page.

## Additional features in Forge

That pretty much covers the basics of getting a Laravel project set up using Forge. When it comes down to it, Forge is more specialized for Laravel (and generally PHP projects) than an all-purpose tool like Heroku, plus it gives you the ability to scale up or down your droplet for much cheaper than Heroku. There are many more advanced features that Forge offers, including:

*   Installing SSL certificates and handling HTTPS redirects
*   Scheduling cron jobs
*   Managing daemon processes
*   Adding multiple sites to a single server
*   Ability to add [recipes](https://forge.laravel.com/recipes) to run common Bash scripts on any of your servers
*   Server networking whitelists for dependent APIs
*   Adding multiple SSH keys to log in as the Forge user

Have you given Forge a try yet? Interested in setting it up? Need help? Let's [continue the conversation on Twitter](https://twitter.com/karllhughes).
