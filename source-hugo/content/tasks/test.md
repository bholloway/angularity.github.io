---
title: Test
linktitle: Test
identifier: task-test
date: 2014-12-15T13:43:30+11:00
tags:
  - task
  - test
menu:
  main:
    parent: tasks
prev: /tasks/watch
next: /tasks/release
notoc: true
weight: 3040
---
```
  The "test" task performs a one time build and karma test of all .spec.js
  files in the project.

Examples:
  angularity test    Run this task


Options:
  --help, -h, -?       This help message
  --reporter, -r       Specify a custom JsHint reporter to use. Either a
                       locally npm installed module, or an asolute path to one.
                                         [default: "angularity-jshint-reporter"]
  --karmareporter, -k  Specify a custom Karma reporter to use. Either a locally
                       npm installed module, or an asolute path to one.
                                          [default: "angularity-karma-reporter"]
```
