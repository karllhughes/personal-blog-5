---
layout: post
title: "My PHP Open Source Project Checklist"
date: 2016-10-10
img: https://i.imgur.com/XKTihFa.png
categories:
  - Software Engineering
---
Open source software is becoming the norm, and not just for small companies, indie developers and startups. [78% of companies](http://www.zdnet.com/article/its-an-open-source-world-78-percent-of-companies-run-open-source-software/) are using open source software, and with [PHP being the most widely-used server-side programming language](https://w3techs.com/technologies/overview/programming_language/all), we need high quality, well built open source PHP projects. I've been working on several open source packages for both the [JobApis](https://github.com/jobapis) project as well as a couple [small projects](https://bitbucket.org/account/user/thegraidenetwork/projects/OS) for my team at The Graide Network in the past few months, and it's gotten me thinking about what a good open source PHP project needs. A project with great, clean, readable code is nice, but it's not really usable without all the other things that make a good open source project including tests, documentation, a license, etc.

I would love to get feedback on this list from other devs, and I have to pass along credit for the ideas here. I learned about most of these items from PHP packages created by [the PHP League](https://github.com/thephpleague) and my friend (and League member) [Steven Maguire](https://twitter.com/stevenmaguire). From my experience working with open source packages, contributing to a few, and creating several, here's the list of things I have found most important when creating a high quality open source PHP project:

### 1. Host the repository on Github

I've been using Bitbucket at The Graide Network, but I have to say Github is [far superior for open source projects](http://blog.takipi.com/bitbucket-vs-github-its-more-than-just-features/).

### 2. Write a quality Readme.md file

There are a lot of great [Readme file examples out there](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2), but I like to include the following sections on my projects:

*   Intro
*   Badges
*   Installation instructions
*   Usage/examples
*   Testing policy/instructions
*   Links to a contributing.md, license.md, and changelog.md file

### 3. Include a Changelog.md file

The Changelog file is a short summary of the updates made in every version released. Use semantic versioning (see below), and if you've never written a changelog, here's a [great example of one](http://keepachangelog.com/en/0.3.0/). Make sure you update this file _for every release_. It's easy to forget until it becomes a habit.

### 4. Document guidelines for contributing

I like using a Contributing.md file so that Github shows it to people when they create issues or pull requests. Here's a good example from the [PHP League](https://github.com/thephpleague/skeleton/blob/master/CONTRIBUTING.md).

### 5. Choose an open source license

This usually seems unimportant for brand new packages, but as soon as your project gains some traction, it's a huge deal. Companies using your project may or may not be able to depending on the license you choose. Here's a no BS comparison of [popular open source licenses](http://choosealicense.com/licenses/).

### 6. Add a code Linter, check for PSR standards

Squizlabs has [an excellent code sniffer](https://github.com/squizlabs/PHP_CodeSniffer/wiki) that will let you check your code against PSR-2 (and other) standards sets. This is really helpful once you have a few contributors and each may have their IDE set up differently. [Tabs vs. spaces is a real debate](https://www.jwz.org/doc/tabs-vs-spaces.html).

### 7. Write unit and integration tests

If you haven't gotten to write many tests in your projects at work then open source projects is a great time to get introduced to testing in PHP development. I've [written a bit about testing before](/posts/writing-tests), but take my word, it's important and will save you a ton of headaches in the long-term.

### 8. Use Travis and Scrutinizer

The pairing of [Travis-ci](https://travis-ci.org/) and [Scrutinizer-ci](https://scrutinizer-ci.com/) allows you to run your open source project's tests and get a code quality score for free. This stuff would cost hundreds of dollars per month on closed-source software, so it's awesome to take advantage of these tools on your open source projects for free. Here's a tutorial on why and how you can set [Travis and Scrutinizer up](https://www.airpair.com/continuous-integration/posts/your-code-sucks-travis-and-scrutinizer-ftw).

### 9. Include a composer.json file, release the project on Packagist

For some reason a lot of good PHP developers I know are intimidated by releasing their open source projects on Packagist, but Composer is the standard in PHP package management, so it's really helpful for gaining users. It takes [about 15 minutes to release your first package](http://blog.jgrossi.com/2013/creating-your-first-composer-packagist-package/) (maybe less if you're a fast typer), so don't fear it.

### 10. Use semantic versioning and Github's release tags

[Semantic versioning](http://semver.org/) is another great tool for open source developers. If done correctly, it shows users of your package how stable the project is, whether or not updates will break their system, and lets them set rules about when to update or not update the project. Semver works nicely with git tags which are reflected in Githubs "release tags" feature. I like to copy the lines from the Changelog into my Github tag body as you can see in the [jobs-common project.](https://github.com/jobapis/jobs-common/releases/tag/2.0.0-beta)

### 11. Create and label some issues

I like to create a few known issues in any new open source repository. Even if a project is brand new and seems to work perfectly, there's probably room to improve test coverage, documentation, or enhance it with new features. Repositories with a few open Github issues look more active and give new potential contributors a place to start.

### 12. Respond to contributors

My biggest pet-peeve when contributing to open source projects is unresponsiveness. I get that you may be too busy to review every PR within hours, but simply responding and letting people know you're considering their pull request is rude and makes your project look abandoned. Finally, I'd encourage you to check out [the PHP League's skeleton project](https://github.com/thephpleague/skeleton), which they use as a base for all their open source packages. If you've never started your own open source project before this is a great place to start. Also, if you'd like a printable version of this checklist, [click here](https://www.checkli.com/s/bBmbqXOe).

If you have items that you'd add to this checklist, let me know. I'm always open to new conversations on [Twitter](https://twitter.com/karllhughes) or via [email](mailto:khughes.me@gmail.com).
