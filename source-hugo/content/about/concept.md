---
title: Concept
linktitle: Concept
identifier: about-concept
date: 2014-12-15T13:42:50+11:00
tags:
  - about
  - concept
  - intro
menu:
  main:
    parent: about
prev: /about/mission
next: /about/suitability
notoc: true
weight: 1020
---

Angularity is primarily a [node.js](http://nodejs.org/) build tool.

It is intended for organisations with one or more teams developing [AngularJS](https://angularjs.org/) applications.

## Immutable

Angularity is a wrapper around [Gulp](http://gulpjs.com/) such that it does not require a per-project `gulpfile.js` and
may be distributed as a self-contained npm package.

This allows distribution of a turn-key gulp-like build system to developers.

| Angularity          | Gulp                |
| ------------------- | ------------------- |
| angularity (global) | gulp (global)       |
|                     | gulp                |
|                     | gulpfile.js         |
|                     | ..                  |
|                     | *N x modules*       |

There are plans to allow customisation of the immutable package (for organisations) as well a plugin system (for single
developers). It is more accurate to say Angularity will be somewhat mutable to the degree you allow.

## Richer

Angularity is superior to [Gulp](http://gulpjs.com/) in that it implements a richer command line interface.

It also provides support for selected development IDEs and Continuous Integration servers.

## Efficient

Angularity has an emphasis on **composition**. Each project contains one deployable application and any number of
additional non-deployable applications (as needed for development). Each application features a
[Composition Root](http://blog.ploeh.dk/2011/07/28/CompositionRoot/) for both Javascript and SASS.

SASS will inherantly bundle any `@import`ed files and [browserify](http://browserify.org/) can bundle `require()`d
Javascript, HTML template (strings), and sprited images (coming soon). This minimises the application footprint to only
that which is needed.

If you have experience with NInject for .NET, or RobotLegs or Parsley in Flash/Flex these concepts will be familiar to
you. You will see from our [style guide](/style/composition) that this pattern is also a superior approach for
AngularJS.

## Core Features

Angularity consists the following core features:

* Single [global install](http://blog.nodejs.org/2011/03/23/npm-1-0-global-vs-local-installation) for all projects.
* Bundling of `require()`'d files per [browserify](http://browserify.org/).
* [ECMAScript 6](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29) syntax
(using [6to5ify](https://github.com/6to5/6to5ify)).
* Composition of *html* templates in *javascript*.
* [jsHint](http://www.jshint.com/about/) linting.
* [SASS](http://sass-lang.com/) 3.2 (using [libsass](http://libsass.org/)).
* [Bower](http://bower.io/) for web dependencies.
* [Bower](http://bower.io/) or [node packages](https://www.npmjs.com/) for common code.
* Javascript unit testing (using [Karma](http://karma-runner.github.io/0.12/index.html) and
[Jasmine 2.0](http://jasmine.github.io/2.0/introduction.html)).
* Source maps for Javascript, allowing continuous minification.
* Source maps for CSS.

Many of these features are not specifically tied to [AngularJS](https://angularjs.org/). However much of
the material you will find on this site is geared to Angular development.