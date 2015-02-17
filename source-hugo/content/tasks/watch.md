---
title: Watch
linktitle: Watch
identifier: task-watch
date: 2014-12-15T13:43:30+11:00
tags:
  - task
  - init
menu:
  main:
    parent: tasks
prev: /tasks/build
next: /tasks/test
notoc: true
weight: 3030
---
```
  The "watch" task performs an initial build and then serves the application on
  localhost at the given port. It then watches the project and performs rebuild
  of Javascript and/or SASS compositions upon change. This is followed by HTML
  injection and browser reload.

Examples:
  angularity watch            Run this task
  angularity watch -p 8080    Run this task and serve at http://localhost:8080
  angularity watch -n         Run this task but do not minify javascript


Options:
  --help, -h, -?    This help message
  --unminified, -u  Inhibit minification of javascript          [default: false]
  --port, -p        A port for the development web server       [default: 55555]
  --reporter, -r    Specify a custom JsHint reporter to use. Either a locally
                    npm installed module, or an asolute path to one.
                                         [default: "angularity-jshint-reporter"]
```