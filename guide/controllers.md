Controllers
=========

##Usage

Use a controller to augment shared `scope`.

* To decorate it with `value` that HTML `partials` may bind to.
* To provide `behaviour` that HTML `partials` may invoke.

Do **not** use a controller:

* To store application state (describe in the `route` instead).
* To store persistent data (controllers and scope are dropped on every route change, use `service` instead).
* To implement behaviour and business logic (defer to a `service`).

##Naming Convention

In angular, controllers are implemented as a `Class`. Angular will resolve the dependency as a class and then `new` that class. Therefore the mapping should be `PascalCase` as well as the classname itself. For example:

Using `PascalCase` is in line with John Pappa's styleguide as well.

```
angular.module(...).controller('MyController', MyController);
```
<br/>

<div class="es5-start"></div>

##Implementation
As per [`John Pappa's styleguide`](https://github.com/johnpapa/angularjs-styleguide), we recommend using :

- `controllerAs` syntax over the `classic controller` with $scope syntax. (The controllerAs syntax uses `this` inside controllers which gets bound to $scope).
- Use Node.js `module.exports` to make the controller available for composition root. module.exports is the object that's actually returned as the result of a require call.

Example :
```javascript
//avoid
function appController($scope) {
  $scope.title = 'Hello World controller';
}

module.exports = appController;
```
```javascript
//recommended
function appController() {
  this.title = 'Hello World controller';
}

module.exports = appController;
```

<div class="es5-stop"></div>


<div class="es6-start"></div>

##Implementation

In our implementation you can effectively assume that `scope instanceof controller`. This is because in our `constructor` we will `extend()` the scope with the members of the instance.

>Extend is a method that will copy members of one object to another. It was popularised by [jQuery.extend()](http://api.jquery.com/jquery.extend/) but we require a different implementation that will copy accessors (get/set) correctly.

We will therefore need to `bind()` these members (accessors and functions) to ensure that their `this` reference is not lost.

>In javascript instance methods can easily loose their `this` reference. We can leverage [Function.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method can to bind all functions and accessors of a given object.

The controller is somewhat similar to the directive `link()` method. An external link implementation should look exactly like a controller but may inject `element` and `attributes`.

Behaviour should follow the [flyweight](http://en.wikipedia.org/wiki/Flyweight_pattern) pattern. Meaning that functions should gather operands from the `scope` and delegate to a method on a `service`. It should **not** implement the operation directly.

#### constructor

Injection is available in the constructor only. This must be annotated with the `@ngInject` doctag.

Firstly `bind` the instance and `extend` scope.

Initialise any `private` properties.

Add `watch` statements. Handlers may be organised as members of the class, or may be anonymous.

#### functions, accessors, properties

Public `properties` (i.e. variables) are not permitted. Use accessors, meaning `getter` and/or `setter` methods.

The `function` keyword is **not** needed.

The `'use strict'` statement is **not** needed.

#### private properties

Private properties should have the same name as any public property that it shadows. A **trailing underscore** is required per [google javascript style](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=Naming#Naming).

Example :
```javascript
import bind   from 'bind';
import extend from 'extend';

/**
 * <p>TODO description of this class</p>
 */
export default class MyController {

  /**
   * @constructor
   * @ngInject
   */
  constructor($scope) {

    // ensure this is not lost, copy public members to the scope
    extend($scope, bind(this));

    // private members
    this.something_ = 'something';
  }

  get something() {
    return this.something_;
  }
  set something(value) {
    this.something_ = value;
  }

  method() {
    // TODO
  }

}
```
<div class="es6-stop"></div>