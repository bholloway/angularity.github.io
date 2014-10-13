# Introduction

Angularity is a philosophy of development.

Our focus is maintaining uniformity of development across groups of corporate developers who hold varying experience levels.

Our contributors hold a collective vision of best-practice Angular-js development and have condensed this into a set of tools and resources known as **Angularity**.

## Features

Primarily Angularity is a javascript build tool build on [`node-js`](http://nodejs.org/). Its features include:

* Single `npm global install` for all projects.

* [`Ecmascript-6`](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29) syntax (using [`es6ify`](http://thlorenz.github.io/es6ify/)). Code import and ES-6 specific features.

* [`jsHint`](http://www.jshint.com/about/) linting.

* [`SASS`](http://sass-lang.com/) 3.2 (using [`libsass`](http://libsass.org/)).

* [`Bourbon`](http://bourbon.io/) mixin library for SASS.

* [`Bower`](http://bower.io/) for web dependencies.

* Bower or node packages for shared code.

* Javascript unit testing (using [`Karma`](http://karma-runner.github.io/0.12/index.html) and [`Jasmine 2.0`](http://jasmine.github.io/2.0/introduction.html)).

* Sourcemaps for javascript (from Ecmascript-6 through minification).

* Sourcemaps for CSS.

* Release versioning *[experimental]*.

At its heart, none of these features are specifically tied to [`Angular-js`](https://angularjs.org/). However much of the material you will find on this site is geared to Angular development.

## Suitability

### You should use *angularity* when...

* You have several development teams and need uniformity of development.

* You develop with [`Angular-js`](https://angularjs.org/) and are open to working with [`Ecmascript-6`](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29), especially ES-6 Classes.

* You use [`SASS`](http://sass-lang.com/), or are prepared to switch, and there are sufficient SASS mixins for you in the [`Bourbon`](http://bourbon.io/) library.

* You intend to `minify` or obfuscate your javascript.

* You deploy to a [`Content Delivery Network (CDN)`](http://en.wikipedia.org/wiki/Content_delivery_network) and need to version your releases.

* You your browser support list permits [`Ecmascript 5.1`](http://kangax.github.io/compat-table/es5/).

* You would like your build tool to be an `npm global install`.

### You should avoid *angularity* when...

* You don't want to work with [`Ecmascript-6`](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony_.286th_Edition.29), are avoiding [`Traceur`](https://github.com/google/traceur-compiler) and its runtime, and can live without Object Orientated code.

* You want to use a CSS preprocessor other than [`SASS`](http://sass-lang.com/).

* You would like to use [`Compass`](http://compass-style.org/) with your SASS.

* You need to support [`PhantomJS`](http://phantomjs.org/) 1.x, `Internet Exporer 8` or lower.

### You should fork *angularity* when...

* You want different build steps to those provided.

* You want features that are not on our roadmap.

Angularity is about uniformity. Per-project customisation is very small. If you develop a wide variety of applications you may ultimately find a conventional build (with something like [`Gulp`](http://gulpjs.com/)) will work better for you.

[Roadmap &#x27F6;](roadmap.md)