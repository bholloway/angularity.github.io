---
title: Building Todo
linktitle: Building Todo
identifier: start-building
date: 2014-12-15T13:43:41+11:00
tags:
  - example
  - building
  - todo
menu:
  main:
    parent: start
prev: /start/example
next: /start/webstorm
notoc: true
weight: 2040
---

## Test

It is good to test [AngularJS](https://angularjs.org/) applications. The Todo application implements only a couple of
tests but they are always nice to see running.

Run the [`test`](/tasks/test) task from the Todo project directory.

    angularity test

This will generate an `/app-test` directory and you should see a console output indicating all tests passing.

## Build

Run the [`build`](/tasks/build) task from the Todo project directory.

    angularity build

This will perform a one-time build in an `/app-build` directory. For development however, you will find more use in the
[`watch`](/tasks/watch) task.

## Watch

The [`watch`](/tasks/watch) task is best for normal development.

    angularity watch

It is similar to the [`build`](/tasks/build) task. However it also watches your project for changes and serves the
project on a `localhost` port. For the Todo application this is port `55555`.

Navigate your browser to [`http://localhost:55555`](http://localhost:55555) and you will see a rudimentary Todo
application.

## Release

The [`release`](/tasks/release) task creates a set of deployment of files.

    angularity release

This will generate an `/app-release` directory with a maximally flat set of files for deployment.