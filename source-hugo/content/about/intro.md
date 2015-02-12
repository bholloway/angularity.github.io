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

## Concept

Angularity is built upon [Gulp](http://gulpjs.com/) but does not require a per-project `gulpfile.js`. You use it as a
npm global install as you would Gulp. But unlike Gulp it is self-contained.

Angularity has a large emphasis on **composition**. Each project contains one deployable application and any number of
additional non-deployable applications (as needed for development). Each application features a
[Composition Root](http://blog.ploeh.dk/2011/07/28/CompositionRoot/) for both Javascript and SASS.

SASS will inherantly bundle any `@import`ed files. We use [browserify](http://browserify.org/) to bundle `require()`d
Javascript, HTML template (strings), and sprited images (coming soon). This minimises the application footprint to only
that which is needed.

If you have experience with NInject for .NET, or RobotLegs or Parsley in Flash/Flex these concepts will be familiar to
you. You will see from our [style guide](/style/composition) that this pattern is also a superior approach for
AngularJS.

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

* Your organisation has a large code/asset library and want to include only the elements you `require()`.
* You want your development teams' build tooling to be turn-key and immutable.
* You develop with [AngularJS](https://angularjs.org/) and would like a path to
[ECMAScript 6](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29).
* You use [SASS](http://sass-lang.com/), or are prepared to switch, and can live without
[Compass](http://compass-style.org/).
* You intend to minify or obfuscate your Javascript.
* You your browser support list permits [ECMAScript 5.1](http://kangax.github.io/compat-table/es5/).
* You would like your build tool to be a self contained npm package with the option of a global install.

### You should fork *Angularity* when...

* You want to use a CSS preprocessor other than [SASS](http://sass-lang.com/) (You need replace Libsass).
* You would like to use [Compass](http://compass-style.org/) with your SASS (You need replace Libsass with Ruby Sass).
* You need to support [PhantomJS 1.x](http://phantomjs.org/), Internet Explorer 8 (or lower), or any other platform
inconsistent with [6to5](https://6to5.org/) generated code (You need to remove the 6to5ify transform)

### You should avoid *Angularity* when...

* Your projects are all different and need customised build steps that cannot be generalised.

### You should be aware...

We have additional features that support [Webstorm](https://www.jetbrains.com/webstorm/) IDE and
[Team City](https://www.google.com.au/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=team%20city)
Continuous Integration server.

Following version 1.0.0 we will be looking for contributors to add first class support for other popular IDEs and CI
reporters.

### Conclusion

Angularity is about uniformity. Per-project customisation is minimal. There is customisation but it is focused on
supporting different environments, such as development vs CI server.

If you can generalise you build requirements but want different build steps to those provided then you can fork
Angularity and make your own flavour.

However if you develop a wide variety of applications we recommend you use [Gulp](http://gulpjs.com/), which Angularity
uses under the hood.