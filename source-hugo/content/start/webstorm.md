---
title: Using Webstorm
linktitle: Using Webstorm
identifier: start-webstorm
date: 2014-12-15T13:43:41+11:00
tags:
  - anatomy
  - project
menu:
  main:
    parent: start
prev: /start/building
next: /tasks/init
notoc: true
weight: 2050
---

> Angularity favours development in the [Webstorm IDE](https://www.jetbrains.com/webstorm/). In time we hope to
similarly support other popular IDEs. If you don't use Webstorm you may skip this section.

Ensure that the [Webstorm IDE](https://www.jetbrains.com/webstorm/) is **not running**.

Run the [`webstorm`](/tasks/test) task from the Todo project directory.

    webstorm

This will initialise a Webstorm project and other non-project features. It will attempt to launch Webstorm with the new
project.

> If you have a standard installation path this should be automatic. Otherwise you will need to specify the path to the
executable. You should save this path as the default value using the `--defaults` flag. Refer to the
[`webstorm`](/tasks/test) task for more information.

## Tools

The [`webstorm`](/tasks/test) task will have added external tools that run Angularity build-related tasks.

Running tasks with these tools is superior to running from a terminal because Webstorm will **hotlink** filenames where
they appear, allowing you to go directly to the code.

You can find these under the `Tools` menu.

![new template](/img/webstorm-external-tools.png)

The `watch` task should be your go-to for development. It builds and serves the application.

> Avoid using the `--unminified` option unless you are setting breakpoints (and need variable names to not be mangled by
minification). With source maps you should be running minified all the time. This avoids any surprises when you
release your application.

Go ahead and select `Tools` > `Angularity` > `watch` so that we may run the application below.

## Run

The [`webstorm`](/tasks/test) task will have added debug settings for each application in your `/app` folder.

You can find these under the `Run` menu or opposite the breadcrumbs in the IDE header bar.

![run configuration](/img/webstorm-run-config.png)

Go ahead and select `angularity-todo-es5` and hit the bug icon. This will launch your default browser to
[`http://localhost:55555`](http://localhost:55555) and you will see a rudimentary Todo application.

You will need to install the Jetbrains plugin in order for Webstorm to connect its debugger.

## Templates

The [`webstorm`](/tasks/test) task adds some file templates consistent with Angularity style.

Choose a folder and `RIGHT-CLICK`. Choose `New` > `angularity-*`.

![new template](/img/webstorm-new-template.png)

