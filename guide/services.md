Services
==========


##Usage
Use service for any `Class` that is to be mapped into the dependency `injector`.

Do **not** use a service for a method (use a `Class` instead).

##Naming Convention
Services are implemented as a `Class` and should be `PascalCase`. Angular will instantiate once only and inject the same `instance` in all cases. The dependency is therefore `camelCase` since it is an instance and should not be `new`'d. For example:
```
angular.module(...).service('myService', MyService);
```

<div class="es6-start"></div>

##Implementation

All AngularJS services are `Singletons`. This means that there is only one instance of a given service per injector.

It is prudent to `bind()` public members (accessors and functions) to ensure that their `this` reference is not lost.

>In javascript instance methods can easily loose their `this` reference. We can leverage [`Function.bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method can to bind all functions and accessors of a given object.


#### constructor

Injection is available in the constructor only. This must be annotated with the `@ngInject` doctag.

Firstly `bind` the instance.

Initialise any `private` properties.

#### functions, accessors, properties

Public `properties` (i.e. variables) are not permitted. Use accessors, meaning `getter` and/or `setter` methods.

The `function` keyword is **not** needed.

The `'use strict'` statement is **not** needed.

#### private properties

Private properties should have the same name as any public property that it shadows. A **trailing underscore** is required per [google javascript style](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=Naming#Naming).


```javascript
export default class MyService() {

  //MyService.js

  /**
   * <p>TODO description of this function</p>
   * @constructor
   * @ngInject
   */
  constructor(/* TODO inject */) {

    // ensure this is not lost
    bind(this);

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




<div class="es5-start"></div>


##Implementation

All AngularJS services are `Singletons`. This means that there is only one instance of a given service per injector.

#### constructor

The function itself is the constructor.

Initialise any `private` properties in constructor.

#### functions, accessors, properties

Public `properties` (i.e. variables) are not permitted.

Use accessors, meaning `getter` and/or `setter` methods.

Use this for public methods.

#### private properties

Private properties should have the same name as any public property that it shadows. A **trailing underscore** is required per [google javascript style](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=Naming#Naming).



```javascript
/**
 * <p>TODO description of this function</p>
 * @ngInject
 */

function MyService()
{
    'use strict';

    var something_ = 'Private';
    this.getSomething = function (){
        return something_;
    };

}


module.exports=MyService;
```

<div class="es5-stop"></div>
