---
title: Introduction
linktitle: Introduction
identifier: about-intro
date: 2014-12-15T13:42:50+11:00
tags:
  - about
  - intro
menu:
  main:
    parent: about
prev: /about/main
next: /about/roadmap
notoc: true
weight: 1020
---

Angularity is a development philosophy.

Our focus is maintaining uniformity of development across groups of developers who hold varying experience levels.

Our contributors hold a collective vision of best-practice AngularJS development and have condensed this into a set of
tools and resources known as **Angularity**.

## Features

Primarily Angularity is a [node.js](http://nodejs.org/) build tool. Its features include:

* Single `npm global install` for all projects.
* Bundling of `require()`'d files per [browserify](http://browserify.org/).
* [ECMAScript 6](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29) syntax
(using [6to5ify](https://github.com/6to5/6to5ify)).
* Composition of *html* templates in *javascript*.
* [jsHint](http://www.jshint.com/about/) linting.
* [SASS](http://sass-lang.com/) 3.2 (using [libsass](http://libsass.org/)).
* [Bower](http://bower.io/) for web dependencies.
* Bower or node packages for shared code.
* Javascript unit testing (using [Karma](http://karma-runner.github.io/0.12/index.html) and
[Jasmine 2.0](http://jasmine.github.io/2.0/introduction.html)).
* Source maps for Javascript.
* Source maps for CSS.

At its heart, none of these features are specifically tied to [AngularJS](https://angularjs.org/). However much of the
material you will find on this site is geared to Angular development.

## Suitability

### You should use *Angularity* when...

* You develop build tooling for one or more development teams.
* You develop with [AngularJS](https://angularjs.org/) and would like a path to
[ECMAScript 6](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29).
* You use [SASS](http://sass-lang.com/), or are prepared to switch, and can live without
[Compass](http://compass-style.org/).
* You intend to minify or obfuscate your Javascript.
* You your browser support list permits [ECMAScript 5.1](http://kangax.github.io/compat-table/es5/).
* You would like your build tool to be a self contained npm package with the option of a global install.

### You should avoid *Angularity* when...

* Your projects are all different and need customised build steps that cannot be generalised.
* You want to use a CSS preprocessor other than [SASS](http://sass-lang.com/).
* You would like to use [Compass](http://compass-style.org/) with your SASS.
* You need to support [PhantomJS 1.x](http://phantomjs.org/), Internet Explorer 8 (or lower), or any other platform
inconsistent with [6to5](https://6to5.org/) generated code.

### You should fork *Angularity* when...

* You can generalise you build requirements but want different build steps to those provided.

Angularity is about uniformity. Per-project customisation should be minimal. If you develop a wide variety of
applications we recommend you use [Gulp](http://gulpjs.com/), which Angularity uses under the hood.