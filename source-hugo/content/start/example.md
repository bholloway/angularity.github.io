---
title: Todo Example
linktitle: Todo Example
identifier: start-example
date: 2014-12-15T13:43:41+11:00
tags:
  - example
  - project
  - todo
menu:
  main:
    parent: start
prev: /start/anatomy
next: /start/building
notoc: true
weight: 2030
---

Now that we are familiar with a blank project, what does an actual project look like? Inevitably Angularity has a
[Todo Application](https://github.com/angularity/angularity-todo-es5).

You can go ahead and clone it using Git.

> By default `git clone` will create a subdirectory. If you have been working with the blank project from last page,
make sure that you are back in the parent directory.

    git clone https://github.com/angularity/angularity-todo-es5.git

This gives the following files (or similar)

![todo directory](/img/todo-directory.png)

Including an npm [bundled dependency](https://docs.npmjs.com/files/package.json#bundleddependencies) which we consider a
 common library.

![todo bundled](/img/todo-bundled.png)

You will notice that the folder structure is feature based. There is no restriction as to where images or javascript or
html lives. You may use the scheme that best suits your needs.

## Dependencies

Obviously there will be a few external dependencies (not least AngularJS) so go ahead and do a bower and npm install in
the project directory.

    npm install

    bower install

## Composition Root

The place to start is always the composition root, so take a look at `/app/index.js`.

    var todoRoutes            = require('../todo/todo-routes'),
        escapeKeyDirective    = require('examplelib/interaction/escape-key-directive'),
        focusElementDirective = require('examplelib/interaction/focus-element-directive'),
        LocalStorage          = require('../storage/local-storage');

    angular.module('app', [ 'ui.router', 'ui.bootstrap' ])
      .config(todoRoutes)
      .directive('escape', escapeKeyDirective.forAttribute('escape'))
      .directive('focus', focusElementDirective.forAttribute('focus'))
      .value('storage', new LocalStorage('todos-angularjs'));

There is a second compostion root, `app/no-storage/index.js` that has a mock storage component. We will not discuss this
except to point out that you may make as many additional applications as you need for development purposes.

### Module definition

An angularity project is not split between angular modules. Unless we intend this project to be a module for
distribution the module name does not matter.

We can see here that module definition lists a few dependencies:

* [UI router](http://angular-ui.github.io/ui-router/site/#/api/ui.router) because its a better router.
* [UI bootstrap](http://angular-ui.github.io/bootstrap/) for bootstrap components.

These are satisfied by bower. If you look at the `bower.json` you will see them listed. The first place to start for any
new project is usually to sort out this list of dependencies. Each bower dependency is automatically injected into the
 `index.html` during the build process.

### Routes

The routes are a key part of composition, for this project they happen to be found in `/todo/todo-routes.js`.

    /**
     * <p>Routing for the to-do app.</p>
     * @ngInject
     * @param {object} $StateProvider
     * @param {object} $urlRouterProvider
     */
    function todoRoutes($stateProvider, $urlRouterProvider) {
      'use strict';
      $urlRouterProvider.otherwise('/')
      $stateProvider
        .state('home', {
          url:        '/:status',
          template:   require('./view/todo.html'),
          controller: require('./controller/todo-controller')
        });
    }
    module.exports = todoRoutes;

This is a pretty simple example of [UI-router](http://angular-ui.github.io/ui-router/site/#/api/ui.router), with some
important distinctions.

* As with every file we will import into the composition root, we must use the explicit annotation `@ngInject`. This
 is super important to ensure proper minification.

* We can directly `require()` the template and controller items. We do not need to hack the template cache or map the
controller separately.

Routes are also composition so there is no reason why this cannot be defined in-line in the composition root. Similarly,
you can split your composition root over several files as appropriate.

### Directives

Note that there are no directives in the local library, they are
[bundled dependencies](https://docs.npmjs.com/files/package.json#bundleddependencies) in order to illustrate how a
library package may be used.

The todo project maps directives in a somewhat confusing way, but does so to illustrate an important point.

Each of the directives shown, `escapeKeyDirective` and `focusElementDirective` are invoked by attribute and need to read
a value from that attribute. However, in the configuration root we can map them against any attribute and need to tell
them what attribute that is.

The `forAttribute()` method is a factory for creating the directive. That way we can close it as
 `focusElementDirective.forAttribute('focus')` and yield a function for mapping.

Lets take a closer look at that code.

    focusElementDirective.forAttribute = function forAttribute(attribute) {
      return /** @ngInject */ function ($timeout) {
        return focusElementDirective($timeout, attribute);
      };
    }

All that is happening is that we capture the given `attribute` name and pass it to the directive along with the injected
`$timeout` dependency.

Note the use of `@ngInject` comment inline, since it is the inner function that is provided to the Angular directive
map.

These implementations are maximally correct. In a practical situation you may prefer to avoid the `forAttribute()`
factory and just hard-code the directive to a particular element. In this case you must ensure you map the directive
against the same name in the composition root.

### Factories and Services

This example does not have and factories or services, but instead maps a `value()`. This is because the `LocalStorage`
component does not require any dependency injection and does require implementation. As such it perhaps a bad example.

Be that as it may, factories and services may be mapped just as easily by specifying an import.