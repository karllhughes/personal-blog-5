---
layout: post
title: "Start Writing Tests - They Don't Have to be Perfect"
date: 2016-01-04
img: 
categories:
  - Software Engineering
---
I think a lot of developers are intimidated by the prospect of writing tests. When a project is small or "just a side project" it seems like it's more trouble than it's worth to include a testing library, refactor for testability, and write tests to cover a few hundred or few dozen lines of code. That is, until the project grows, another developer starts working on it, or its spec changes. [Testing always seems like it's not worth it until it really is](http://www.renaissancesoftware.net/blog/archives/206). ![](https://i.imgur.com/4qRG5bp.jpg) If you start with test coverage in mind from the beginning, testing is actually pretty easy, but what about writing tests for established, in production legacy applications? What can you do there? I recently started contributing to a little open source project that had almost zero test coverage. Worse, there were a few tests that the original maintainer had written, but he hadn't bothered to fix them as the library evolved, so they were actually failing. Still, the project was being used in production and it seemed to be functioning as expected, so I figured it would still be easier to help implement tests than to start from scratch. **What do you do with a working application that doesn't have tests?** Where do you start?

*   Do you put a stop to any new features until you've got 100% coverage?
*   Do you take it out of production until it meets the quality standards you'd like it to?
*   Do you rewrite the whole thing?

While these extreme solutions may seem like the best option from a developer's perspective, they rarely make good business sense. Implementing tests on an untested app is a process. Much like the [technical maturity level of a startup](http://www.karllhughes.com/2015/technical-maturity/), you can't expect every application to be perfect in an organization, but you can make gradual improvements to the test coverage and testability of an application as you work on it. Here's how I approach the problem:

### 1\. Acceptance tests

Unit tests usually require refactoring, so while they're great when you're building an application from scratch, it's usually easier to start by writing acceptance tests for a working application. An automated test that makes sure all the critical features work the whole way through is usually a good place to start.

### 2\. Test for return types in big methods

The next thing to test are the most mission-critical methods in the biggest classes. Even if the code is a spaghetti string mess, you can at least test the return type from the method. If mocking dependencies isn't possible, then just test the whole application to get started. Refactoring isn't safe until you've got at least some simple tests in place.

### 3\. Add tests one piece at a time

Unit testing a large application takes time and patience. Install a code coverage tool, and just start with one small piece at a time. If it's a big project and it's going to take a few weeks, try just doing a few classes per week rather than taking the whole thing on at once. This is a good thing for developers who are new to a project to do as it helps them get familiar with the application without being required to change core functionality.

### 4\. Start refactoring

Once you feel good about the level of test coverage, it's time to decide if refactoring is required or not. Now that tests are in place it's much easier to tell if you break something or at least if the key functionality doesn't work as expected. What tips do you have for adding automated tests to a legacy application? Have you ever had to take on a project like that? Let me [hear your thoughts on Twitter](https://twitter.com/karllhughes).
