---
title: Init
linktitle: Init
identifier: task-init
date: 2014-12-15T13:43:30+11:00
tags:
  - task
  - init
menu:
  main:
    parent: tasks
prev: /start/webstorm
next: /tasks/build
notoc: true
weight: 3010
---
```
  The "init" task initialises a blank project and optionally an IDE
  environment. The given options initialise project defaults. Where omitted the
  global default will be in effect for the project.

  The following steps are taken. Some steps are gated by respective a flag.
  Default options may be globally defined or reset using the --defaults
  option.

  * project directory    exists, else create    --subdir
  * /app                 exists, else create
  * /app/*.html          exists, else create
  * /app/*.scss          exists, else create
  * angularity.json      exists, else create
  * package.json         exists, else create    --npm
  * bower.json           exists, else create    --bower
  * karma.conf.js        exists, else create    --karma
  * .jshintrc            exists, else create    --jshint
  * .gitignore           exists, else create    --gitignore
  * run IDE task                                --ide

  By default, a subdirectory is created for the project

  Where run on an exising project existing files will not be altered, delete
  existing files in order to change properties.

  Both the npm and bower packages are initially set private which you will need
  to clear in order to publish.

  Available IDE tasks include:
  webstorm

  Any given IDE is initialised per its task defaults. Use the task separately
  to review these options.

Examples:
  angularity init -n todo -i webstorm      Create "todo" and initialise webstorm
  angularity init --defaults -n pending    Change the name default to "pending
  angularity init --defaults reset         Reset defaults


Options:
  --help, -h, -?     This help message
  --defaults, -z     Set defaults
  --subdir, -s       Create a sub-directory per name             [default: true]
  --name, -n         The project name                    [default: "my-project"]
  --version, -v      The project version                      [default: "0.0.0"]
  --description, -d  The project description                       [default: ""]
  --tag, -t          A project tag                                   [default: ]
  --port, -p         A port for the development web server   [default: "random"]
  --npm              Create package.json                         [default: true]
  --bower            Create bower.json                           [default: true]
  --karma            Create karma.conf.js                        [default: true]
  --jshint           Create .jshintrc                            [default: true]
  --gitignore        Create .gitignore                           [default: true]
  --ide              Run an IDE initialisation task            [default: "none"]
```