---
title: Webstorm
linktitle: Webstorm
identifier: task-webstorm
date: 2014-12-15T13:43:30+11:00
tags:
  - task
  - init
menu:
  main:
    parent: tasks
prev: /tasks/release
next: /about/mission
notoc: true
weight: 3060
---
```
  The "webstorm" task initialises webstorm for a project in the current working
  directory and launches the IDE.

  Where the IDE is installed in a non-standard location the full path to the
  IDE should be used in place of the boolean in --launch.

  The following steps are taken. Some steps are gated by respective a flag.
  Default options may be globally defined or reset using the --defaults
  option.

  * Setup project (resources, debug config, suppressors)   --project
  * Create external tools that launch angularity           --tools
  * Set coding style rules                                 --rules
  * Add code templates                                     --templates
  * Launch IDE                                             --launch

Examples:
  angularity webstorm                              Run this task
  angularity webstorm --defaults -l <some-path>    Set a default executable path
  angularity webstorm --defaults reset             Reset defaults


Options:
  --help, -h, -?   This help message
  --defaults, -z   Set defaults
  --subdir, -s     Navigate to the sub-directory specified
  --project, -p    Setup project                                 [default: true]
  --tools, -t      Install external tools                        [default: true]
  --rules, -r      Set style rules                               [default: true]
  --templates, -t  Add code templates                            [default: true]
  --launch, -l     Launch the IDE following setup                [default: true]
```