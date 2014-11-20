# Composition

It is important not to hide composition. It should be done centrally, at the root of the application.

In angular there are 2 different resources we must compose in order to build an application

* Using a **composition root** we map `directives`, `controllers`, and `services` into the `injector`.

* Using **routing** we compose views from HTML `partials` and `controllers` for each different **application state**.

## Composition Root

> In **dependency injection** we maintain a library of components at our disposal. We then assemble these into and application, by  composition, using a **composition root**.

It is important for composition that each component (`directives`, `controllers`, `services`) is small and performs a well defined function. Complex components should be split to **separate concerns**.

These components fit together all in one place - the **composition root**. The composition root may be organised into multiple files so long as this aids clarity.

We therefore need define only one `module` in the entire application. However that module must be dependent on the  `templates` module. Meaning:
```
  angular.module('app', [ 'templates' ])
```
This `templates` module is automatically generated from the HTML `partials`. The build system converts the HTML to a javascript routine that populates the angular **template cache**. This makes the `partials` immediately available to angular in a transparent manner.

## Routing

> In a single page application it is critical that we encode **application state** in the **route**. This enables bookmarking and **deep linking** to reconstruct the page given only the URL.

For every change in view we need to encode `state` in the route. Where we have hierachical `state`, as with the angular [UI-router](https://github.com/angular-ui/ui-router/wiki), each layer of the state has its own HTML `partial` and recursively contains other views.

> If you find your lowest-level partial is large it is likely you do **not** have sufficiently detailed `state`.

Ideally `controllers` are specified only in the routing. The `controller` specified here may be explicit, as an actual `Class`. In this case, there is no need to map any `controller` in the **composition root**.

- - - -

### main.js

<div class="es6-start"></div>

```javascript
/* globals angular */
import myRoutes      from 'myRoutes';
import myDirective   from 'myDirective';
import MyController  from 'MyController';
import MyService     from 'MyService';

angular.module('app', [ 'templates' ])
  .config(myRoutes)
  .directive('myDirective', myDirective)
  .service('MyService', MyService)
```

<div class="es6-stop"></div>


<div class="es5-start"></div>

```javascript
var myRoutes = require('../../js-lib/app/myRoutes');
var MyController = require('../../js-lib/app/MyController');
var myDirective = require('../../js-lib/app/myDirective');
var MyService = require('../../js-lib/app/MyService');
var myFactory = require('../../js-lib/app/myFactory');

angular.module('app', ['ui.router','templates'])
  .config(['$stateProvider', '$urlRouterProvider', myRoutes])
  .controller('MyController', MyController)
  .factory('myFactory',myFactory)
  .service('MyService',MyService)
  .directive('myDirective', myDirective)

```

<div class="es5-stop"></div>


### routes.js


<div class="es6-start"></div>

```javascript
var MyController = 'MyController';

/**
 * <p>TODO description of this file</p>
  * @ngInject
  * @param {object} $urlRouterProvider
  * @param $stateProvider
 */
export default function todoRoutes($stateProvider, $urlRouterProvider) {
  'use strict';
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('myState', {
      url:         '/:myParameter',
      abstract:    false,
      templateUrl: 'partials/myPartial.html',
      controller:  MyController
    });
}
```

<div class="es6-stop"></div>

<div class="es5-start"></div>

```javascript
/**
 *  <p>TODO description of this file</p>
 * @ngInject
 * @param {object} $urlRouterProvider
 * @param $stateProvider
 */

var MyController = require('../app/MyController');

function appRoutes($stateProvider, $urlRouterProvider) {
  'use strict';

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url        : '/',
      templateUrl: '/partials/partial.html',
      controller : MyController
    });
}

module.exports = myRoutes;
```

<div class="es5-stop"></div>
