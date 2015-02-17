---
title: Release
linktitle: Release
identifier: task-release
date: 2014-12-15T13:43:30+11:00
tags:
  - task
  - release
menu:
  main:
    parent: tasks
prev: /tasks/test
next: /tasks/webstorm
notoc: true
weight: 3050
---
```
  The "release" task performs a single build and exports the build files along
  with bower components to a release directory.

Examples:
  angularity release       Run this task
  angularity release -n    Run this task but do not minify built javascript


Options:
  --help, -h, -?    This help message
  --unminified, -u  Inhibit minification of javascript          [default: false]
  --reporter, -r    Specify a custom JsHint reporter to use. Either a locally
                    npm installed module, or an asolute path to one.
                                         [default: "angularity-jshint-reporter"]
```