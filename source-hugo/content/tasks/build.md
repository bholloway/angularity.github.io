---
title: Build
linktitle: Build
identifier: task-build
date: 2014-12-15T13:43:30+11:00
tags:
  - task
  - build
menu:
  main:
    parent: tasks
prev: /tasks/init
next: /tasks/watch
notoc: true
weight: 3020
---
```
  The "build" task performs a single build of the javascript and SASS
  composition root(s).

Examples:
  angularity build       Run this task
  angularity build -u    Run this task but do not minify javascript


Options:
  --help, -h, -?       This help message
  --unminified, -u     Inhibit minification of javascript                       [default: false]
  --reporter, -r       Specify a custom JsHint reporter to use. Either a
                       locally npm installed module, or an asolute path to one. [default: "angularity-jshint-reporter"]
```