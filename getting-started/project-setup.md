# Project setup

## Running angularity

Ensure that angularity has been installed correctly and is accessible from the command line:

    which angularity
    #should output the path where it is located

If you wish to run angularity directly from the project folder,
instead of from the command line after a global `npm` installation,
you can do this instead:

    cd angularity # where you have the project checked out
    node bin/cli.js

### `.angularity` config

Upon your running angularity,
you might encounter a warning that looks like this:

```bash
Error validating .angularity field(s): serverHttpPort consoleWidth
```

This is caused by a stale configuration file,
you can choose to either edit the file to fix the values,
or simply delete it and run angularity again:

```bash
rm ${HOME}/.angularity
angularity
```

Upon which you should see the following output:

```bash
default settings are being written to a global configuration.
To change your defaults edit your /home/YOUR_USER_NAME/.angularity file
```

## First run

You will be given some options to pick from when you run Angularity.
On the very first run, it is advisable to choose

- `Install WebStorm Tools`.
- Next pick `External Tools`.
- Next pick `continue`

This makes makes the Webstorm IDE aware of
a number of tasks exposed by Angularity.
Be sure to completely quit Webstorm and open it again,
if it is already running.

## Scaffold a new project

Angularity will generate a scaffold for a new project
which can be opened in the Webstorm IDE.
To do this, run Angularity from the command line,
where you wish to create a project in a subdirectory
of the current working directory.

```bash
cd ${CODE}
angularity
```

- Pick `Generate Project`
- Next, pick `minimal-es6`, if you wish to develop using ES6 Javascript
- Or, pick `minimal-es5`, if you wish to develop using ES5 Javascript
- Next, type the name of your project
- Next, choose the directory where the project will be created,
  or accept the suggested one

Now wait for a while while dependencies are installed,
and then Angularity should finish generating the project,
and fire up the Webstorm IDE with this project opened.

## Webstorm tools

### Tools --> Angularity

This menu exposes certain tasks via a menu that you could run on the command line.
It is simply a matter of convenience.

- build
- build nominify
- watch
- watch nominify
- release
- test

### Debugging

There is no difference in debugging an Angularity app,
from debugging other Javascript applications.
The only thing that you should be aware of,
is that minification doesn't lend itself well to debugging,
especially for AngularJs apps.
That is what Angularity provides the
`build nominify` and `watch nominify` tasks for.

Here is a quick run down for those who have not used Webstorm debuigging before.

In the top right hand corner, there should be a green bug icon.
Click this (or use the `Shift+F9` keyboard shortcut),
to run the project in debug mode.

If this is the first time, you will need to install Jetbrains IDE Support plugin
in your browser.
Here is the [Chrome or Chromium plugin](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji)

Once installed, the browser should open, and display the default app.

