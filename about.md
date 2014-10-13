# About

Angularity is a philosophy of development.

Our focus is maintaining uniformity of development across groups of corporate developers who hold varying experience levels.

Our contributors hold a collective vision of best-practice Angular-js development and have condensed this into a set of tools and resources known as **Angularity**.

## Suitability

### You should use *angularity* when...

* You develop with [`Angular-js`](https://angularjs.org/) and are open to working with [`Ecmascript-6`](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29), especially ES-6 Classes.

* You like [`SASS`](http://sass-lang.com/) and there are sufficient SASS mixins for you in the [`Bourbon`](http://bourbon.io/) library.

* You deploy to a [`Content Delivery Network (CDN)`](http://en.wikipedia.org/wiki/Content_delivery_network) and need to version your releases.

* You intend to `minify` or obfuscate your javascript.

* You your browser support list permits [`Ecmascript 5.1`](http://kangax.github.io/compat-table/es5/).

* You want your build tool to be an `npm global install`.

### You should avoid *angularity* when...

* You don't want to work with [`Ecmascript-6`](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29), are avoiding [`Traceur`](https://github.com/google/traceur-compiler) and its runtime, and can live without Object Orientated code.

* You want to use a CSS preprocessor other than [`SASS`](http://sass-lang.com/).

* You would like to use [`Compass`](http://compass-style.org/) with your SASS.

* You need to support [`PhantomJS`](http://phantomjs.org/) 1.x, `Internet Exporer 8` or lower.

### You should fork *angularity* when...

* You want different build steps to those provided.

* You want features that are not on our roadmap.

Angularity is about uniformity. Per-project customisation is very small. If you develop a wide variety of applications you may ultimately find a conventional build (with something like [`Gulp`](http://gulpjs.com/)) will work better for you.

## Features

Primarily Angularity is a javascript build tool build on [`node-js`](http://nodejs.org/). Its features include:

* [`Ecmascript-6`](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29) syntax (using [`es6ify`](http://thlorenz.github.io/es6ify/)). Code import and ES-6 specific features.

* [`jsHint`](http://www.jshint.com/about/) linting.

* [`Bower`](http://bower.io/) for web dependencies.

* Bower or node packages for shared code.

* [`SASS`](http://sass-lang.com/) 3.2 (using [`libsass`](http://libsass.org/)).

* [`Bourbon`](http://bourbon.io/) mixin library for SASS.

* Javascript unit testing (using [`Karma`](http://karma-runner.github.io/0.12/index.html) and [`Jasmine 2.0`](http://jasmine.github.io/2.0/introduction.html)).

* Sourcemaps for javascript (from Ecmascript-6 through minification).

* Sourcemaps for CSS.

* Release versioning *[experimental]*.

At its heart, none of these features are specifically tied to [`Angular-js`](https://angularjs.org/). However much of the material you will find on this site is geared to Angular development.

## Roadmap

### Build tool

Regarding `node-angularity`, the angularity build tool:

Version 1.0.0

* Ecmascript-5 development using `common-js` syntax *[Under consideration]*.
 
* Per-project configuration of `Karma` browser list and other selected unit testing settings.

* Refinement of release versioning, including per-project `CDN` settings.

* Generation of an `index.aspx` page in the release bundle and potentially other hooks to easily deploy on .NET systems.

Version 1.x.0

* Build blocking on `js-hint` *[Under consideration]*.

* Generation of API documentation using [`JSdoc`](https://github.com/jsdoc3/jsdoc).

* Incremental compilation.

* Basic or experiemental support for [`Protractor`](https://docs.angularjs.org/guide/e2e-testing) end-to-end testing with local server or [`SauceLabs`](https://saucelabs.com/).

* Continuous Integration (`CI`) testing for the system itself *[Under consideration]*.

Version 2.0.0

* Enhanced code-style enforcement using [`eslint (v0.10.0)`](https://github.com/eslint/eslint/wiki/Release-goals#v0100).

* Full support for [`Protractor`](https://docs.angularjs.org/guide/e2e-testing) with private [`Grid2`](https://code.google.com/p/selenium/wiki/Grid2) solution.

* Test console (HTML page) with real-time red/green indication for your unit tests *[under consideration]*.

### Documentation

Regarding `documentation`.

The following items are listed in priority order but will necessarily be completed before version 1.0.0 release.

* Getting started guide.

* Troubleshooting guide.

* Quick reference for development style, including comparison of ES5 and ES6 use cases.

* Manual for the build tool, including how it works.
