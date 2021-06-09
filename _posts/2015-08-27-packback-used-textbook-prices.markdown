---
layout: post
title: "Textbook Prices: Packback's Open Source Price Comparison Tool"
date: 2015-08-27
img: https://i.imgur.com/XptxLBtl.png
categories:
  - Software Engineering
---
Like a lot of startups, we rely heavily on open source software at Packback, and while it's fun to be able to spin up a project quickly with Laravel or Angular, we've long been looking for ways to give back to the open source community. This summer, we've released [a  few small open source projects](https://github.com/packbackbooks), but the one I'm most excited about for the future is our open source [textbook price collector](https://github.com/packbackbooks/textbook-prices).

## About Packback's Price Comparison Pages

We have a catalog of over 1 million textbooks. While our primary business is renting digital copies of those textbooks, for students whose books we don't have or who really want to get their hands on a physical book, we offer a feature called price comparison.

Whenever someone loads a product page, we send an asynchronous request to each of the used textbook resellers in our affiliate network. As the prices load, we show them on the product page, and when a student selects a price from our list, we make a cut of the sale and the student saves money. It's truly a win-win.

## Open Sourcing Textbook Price Access

One of the big challenges in getting prices from each of the used textbook retailers is dealing with their APIs. Much like the job board standardization project I've been doing on the side, Packback needed a way to standardize the data from each of these retailers so that requesting, receiving, and delivering prices to the user was pain-free. As of today, the textbook price collector works with the following providers:

*   AbeBooks
*   Amazon
*   BookRenter (via CommissionJunction)
*   Cengage (via CommissionJunction)
*   Chegg
*   Skyo (via CommissionJunction)
*   ValoreBooks

_To check out our open source textbook price collector, [click here](https://github.com/packbackbooks/textbook-prices)._

There's a lot of cool stuff that could be done with this open source project, so it's very exciting to be able to release it to the public. 

If you've got a PHP project and you'd like to start using the textbook price collector, you can include it via composer: 

```
"require": { "packbackbooks/textbook-prices": "~0.1.3" }
```

Next, create an instance of the class for the provider you're accessing and give it some ISBNS:

```
$isbns = [ // ISBNS ];
$abeBooks = new AbeBooksPriceClient([ 'access_key' => ]);
$prices = $abeBooks->getPricesForIsbns($isbns);
```

Besides comparing prices between books, you could use this project to collect historic price data from different retailers, compare used prices with new prices on textbooks, compare local and international editions, and much more. We're excited to see what you might build with this, and if you're interested in contributing or you need help using the project, feel free to drop me a line via [Twitter](http://www.twitter.com/karllhughes).
