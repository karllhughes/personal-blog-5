---
layout: post
title: "Moonclerk Recurring Payments PHP Library"
date: 2015-04-27
img: https://i.imgur.com/iqgSTus.png
link: https://github.com/jobapis/moonclerk-php
categories: 
  - API Development
---
A few months ago I was looking into an easy way to set up recurring payments without building all the infrastructure on top of a payment processor like Stripe, Braintree, or Paypal myself. Somewhere along the way I found [Moonclerk](http://www.moonclerk.com/).

Moonclerk is a wrapper on top of [Stripe](https://stripe.com/) that allows you to set up recurring payments for users without creating all the forms, options, and API calls yourself. Obviously there are pros and cons to using another layer in your payment collection process, but I'm a lazy developer, so I decided to give them a shot. While Moonclerk has a simple read-only API for accessing your users, payments, and form, they didn't have any libraries and I wasn't able to find any PHP clients for accessing their API, so I put one together. The result is a simple wrapper that uses Guzzle to call the Moonclerk API and return PHP objects based on your request. You just need an API key to start using it, and if you're taking advantage of Composer, including the library is as easy as adding a single line to your composer.json file. 

Obviously the library is limited as Moonclerk only offers read access to data, but if you've got suggestions for improving it, let me know. Happy coding!
