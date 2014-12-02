# Installation

## Install node

[`http://nodejs.org/download/`](http://nodejs.org/download/)

Ensure that you choose the correct binary for your system. Meaning that 64bit systems should choose the 64bit binary.

[![](installation-node.png)]()

Choose the **default settings** whenever prompted.

On **Windows** platform the installer will add a **path** entry to node. For that to be active you will most likely need to reboot. Once you can see node in the console `echo %PATH%` then you are ready.

## Install git

[`http://git-scm.com/downloads`](http://git-scm.com/downloads)

Once again ensure that you choose the correct binary for your system.

On **Windows** platform choose to **use GIT from the command prompt**.

On **Windows** platform choose to **checkout Windows-style, commit Unit-style** for line endings.

[![](installation-git-1.png)]()
[![](installation-git-2.png)]()

## Update npm

Unless you just installed `node` you may be running npm older than **npm 2.0.0**. In that case it is worth updating.

`npm install npm -g`.

However note that it has [**breaking changes**](http://blog.npmjs.org/post/98131109725/npm-2-0-0) for existing projects.

## Install Bower

Bower is a popular Frontend package manager that you can easily package libraries such as angular-ui, bootstrap.

`npm install bower -g`

See more info on the [Bower website](http://bower.io).

## Install angularity

Angularity is a **global** install.

`npm install angularity -g`

You are now ready to start an angularity project.

[Project Setup &#x27F6;](project-setup.md)