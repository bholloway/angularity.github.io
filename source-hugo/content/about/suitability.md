---
title: Suitability
linktitle: Suitability
identifier: about-suitability
date: 2014-12-15T13:42:50+11:00
tags:
  - about
  - suitability
menu:
  main:
    parent: about
prev: /about/concept
next: /about/roadmap
notoc: true
weight: 1030
---

## You should use Angularity when...

* Your organisation has a large code/asset library and want to include only the elements you require.
* You want your development teams' build tooling to be turn-key and immutable.
* You develop with [AngularJS](https://angularjs.org/) and would like a path to
[ECMAScript 6](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29).
* You use [SASS](http://sass-lang.com/), or are prepared to switch, and can live without
[Compass](http://compass-style.org/).
* You intend to minify or obfuscate your Javascript.
* You your browser support list permits [ECMAScript 5.1](http://kangax.github.io/compat-table/es5/).
* You would like your build tool to be a self contained npm package with the option of a global install.

## You should fork Angularity when...

* You want to use a CSS preprocessor other than [SASS](http://sass-lang.com/).
* You would like to use [Compass](http://compass-style.org/) with your SASS.
* You need to support [PhantomJS 1.x](http://phantomjs.org/), Internet Explorer 8 (or lower), or any other platform
inconsistent with [6to5](https://6to5.org/) generated code.

## You should avoid Angularity when...

* Your projects are all different and need customised build steps that cannot be generalised.

## Best fit

Angularity has additional features that support [Webstorm](https://www.jetbrains.com/webstorm/) IDE and
[Team City](https://www.google.com.au/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=team%20city)
Continuous Integration server.

Following version 1.0.0 we will be looking for contributors to add first class support for other popular IDEs and CI
reporters.

## Bottom line

Angularity is about uniformity. Per-project customisation is minimal. What customisation exists is focused on
supporting different environments (such as development vs CI server).

If you can generalise you build requirements but want different build steps to those provided then you can fork
Angularity and make your own flavour.

However if you develop a wide variety of applications we recommend you use [Gulp](http://gulpjs.com/), which Angularity
uses under the hood.