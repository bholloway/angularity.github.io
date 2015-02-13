---
title: Installation
linktitle: Installation
identifier: start-installation
date: 2014-12-15T13:43:30+11:00
tags:
  - start
  - installation
menu:
  main:
    parent: start
prev: /about/roadmap
next: /start/anatomy
notoc: true
weight: 2010
---

## Install git

[`http://git-scm.com/downloads`](http://git-scm.com/downloads)

Ensure that you choose the correct binary for your system.
Meaning that 64 bit systems should choose the 64 bit binary.

For **windows platform**:

  * Choose to **use GIT from the command prompt**.<br/>
  ![Windows git installation step #1](/start/installation-git-1.png)

  * Choose to **checkout Windows-style, commit Unit-style** for line endings.<br/>
  ![Windows git installation step #2](/start/installation-git-2.png)

## Install node.js

[`http://nodejs.org/download/`](http://nodejs.org/download/)

Once again nsure that you choose the correct binary for your system.

![Install node](/start/installation-node.png)

Choose the **default settings** whenever prompted.

On **Windows** platform the installer will add a **path** entry to node. For that to be active you will most likely
need to reboot. Once you can see the path to node in the console then you are ready.

  echo %PATH%

## Update npm

Even if you just installed `node` you may be running npm older than **npm 2.0.0**.
In that case it is worth updating.

    npm install -g npm

On windows you may have some difficulty and should follow the troubleshooting
[instructions](https://github.com/npm/npm/wiki/Troubleshooting#upgrading-on-windows) from the outset.

Be aware however that older projects that you may also be working on may not be compatible with npm 2.

## Install Bower

Most angularity projects want to utilise [bower](http://bower.io/).
Perform a global installation using npm.

    npm install -g bower

## Install Angularity

### Latest Release

Use the latest release unless if you are new to Angularity or just want the most stable version.

Perform a global installation using npm.

    npm install -g angularity

### *or* Pre-Release

You can install from github. However this is considered bleeding edge.

    npm install -g angularity/node-angularity

### *or* Tagged Release

You can install from github from a tag.

    npm install -g angularity/node-angularity#<TAG>

## Check installation

Run the angularity version command to make sure the installation worked.

    angularity -v

## Install source code

**OPTIONAL**

If you wish to develop or contribute to the Angularity project you will need to
[fork the project](https://github.com/angularity/node-angularity/fork) on github.

Get local a working copy of your fork.

    git clone git@github.com:<YOUR_GITHUB_USERNAME>/node-angularity.git

Force the global install to defer to this working copy. You still need to have performed the global install above.

    npm link

Be sure to keep your fork in sync with the main repository before you start working on any patch.
This [how to on Github](https://help.github.com/articles/syncing-a-fork/) is most helpful.
