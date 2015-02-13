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

Even if you just installed NodeJS you may be running npm older than
[npm `2.0.0`](http://blog.npmjs.org/post/98131109725/npm-2-0-0). Check your version.

    npm -v

In our experience if your version is `1.x` you will have problems installing Angularity.

We recommend upgrading. Be aware however that older projects (not angularity) may not be compatible with
[npm `2.0.0`](http://blog.npmjs.org/post/98131109725/npm-2-0-0).

    npm install -g npm

Check the version again. You are expecting to now see version `2.x`.

    npm -v

On **windows** you will have some difficulty and the npm version will likely remain at `1.x`. You will need to follow
these [instructions](https://github.com/npm/npm/wiki/Troubleshooting#upgrading-on-windows). We recommend deleting the
npm instance in `program files` and keeping the one in your `users` directory.

## Install Bower

Most angularity projects will utilise [bower](http://bower.io/).

Perform a global installation using npm.

    npm install -g bower

## Install Angularity

### Latest Release

Use the latest release unless if you are new to Angularity or just want the most stable version.

Perform a global installation using npm.

    npm install -g angularity

### *or* Pre-Release

You can install from [Github](https://github.com/angularity/node-angularity). However this is considered bleeding edge.

    npm install -g angularity/node-angularity

### *or* Tagged Release

You can also install from a [Github](https://github.com/angularity/node-angularity) tag.

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
