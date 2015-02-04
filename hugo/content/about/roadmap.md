---
title: Roadmap
linktitle: Roadmap
identifier: about-roadmap
date: 2014-12-15T13:43:03+11:00
tags:
  - about
  - roadmap
menu:
  main:
    parent: about
# prev: /
# next: /
notoc: true
weight: 1030
---

## Documentation

Regarding `documentation`.

The following items are listed in priority order but will necessarily be completed before version 1.0.0 release of the build tool.

* Getting started guide.
* Troubleshooting guide.
* Quick reference for development style, including comparison of ES5 and ES6 use cases.
* Manual for the build tool, including how it works.

## Build tool

Regarding `node-angularity`, the Angularity build tool.

### Version 1.0.0

* ECMAScript 5 development using `common-js` syntax *[Under consideration]*.
* Per-project configuration of `Karma` browser list and other selected unit testing settings.
* Refinement of release versioning, including per-project `CDN` settings.
* Generation of an `index.aspx` page in the release bundle and potentially other hooks to easily deploy on .NET systems.

### Version 1.x.0

* Build blocking on `js-hint` *[Under consideration]*.
* Generation of API documentation using [`JSdoc`](https://github.com/jsdoc3/jsdoc).
* Incremental compilation.
* Basic or experimental support for [`Protractor`](https://docs.angularjs.org/guide/e2e-testing) end-to-end testing with local server or [`SauceLabs`](https://saucelabs.com/).
* Continuous Integration (`CI`) testing for the system itself *[Under consideration]*.

### Version 2.x.0

* `Karma` testing with [`PhantomJS 2.0`](http://ariya.ofilabs.com/2014/07/towards-phantomjs-2.html).
* Enhanced code-style enforcement using [`eslint (v0.10.0)`](https://github.com/eslint/eslint/wiki/Release-goals#v0100).
* Full support for [`Protractor`](https://docs.angularjs.org/guide/e2e-testing) with private [`Grid2`](https://code.google.com/p/selenium/wiki/Grid2) solution.
* Test console (HTML page) with real-time red/green indication for your unit tests *[under consideration]*.
