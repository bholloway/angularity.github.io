Directives
==========

##Usage

Use a directive to augment a `DOM` node:

* To transform its contents in a regular manner.
* To add a behaviour that is general and reusable.

Do **not** use a directive:

* To augment or manipulate shared `scope` (use a [`controller`](https://docs.angularjs.org/guide/controller) instead).
* To allow a partial to include another partial specific to your application (this is not composable, use [nested states](https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views) instead).

##Naming Convention
Directives are invoked using `hypenated-lowercase` but are mapped as `camelCase`. Their factory is a method so is also `camelCase`. Meaning:
```
angular.module(...).directive('myDirective', myDirective);
```
And in HTML:
```
<div my-directive></div>
```

##Implementation
#### dependency injection

Injection is available at the top of the directive only in its function definition. This must be annotated with the `@ngInject` doctag.

There is no dependency injection in `link()`. Consequently you cannot change the order of parameters in the `link()` method.

#### restrict

Use any combination of the `restrict` characters; `A`ttribute name, `E`lement name, CSS `C`lass name. 

#### replace, template, templateUrl

Use either `template` or `templateUrl` but **not** both. The template must **not** be specific to your use case.

If you need specific content then use [`transculusion`](https://docs.angularjs.org/api/ng/directive/ngTransclude), meaning:
```
 replace:    true,
 transclude: true,
 template:   '<div ng-transclude></div>',
```

The `replace` option relates to the HTML node in which you apply your directive. Generally you will want this node to **only** comprise your template (any any transcluded content). However when using `replace: false` your template will appear first, before the existing content.

#### controller, require, scope

Your directive should have a well defined dependency on your document. Start with `scope: { }` to isolate your scope.

Do **not** use a `controller()` function, use a `link()` function instead.

Pass parameters explicitly through `attributes`. Attributes are a parameter of the `link()` function, or may be coppied to the [isolated scope](https://umur.io/angularjs-directives-using-isolated-scope-with-attributes/); `@` implies string initialisation, `=` implies 2-way string binding, `&` implies a function that evaluates the attribute as a statement.

If you need to **expose an API**, and only in this case, use a `Class` for the `controller` property. Meaning `controller: MyController` (as the definition **not** as a string). This will be instantiated. Other directives may `require` your directive and will receive this instance as an additional parameter in its `link()` method. See the angular [docs](https://docs.angularjs.org/guide/directive) for full details. 

#### link

The driver of complexity in the directive is the `link()` function. Where your link function is simple then write it in-line. However if it is complex then make it an external `Class`.

<br/>

<div class='es6-start'></div>

####Small Directive
```javascript
/**
 * <p>TODO description of this class</p>
 * @ngInject
 */
export default function mySmallDirective(/* TODO inject */) {
  return {
    restrict:    'ACE',
    replace:     true,
    transclude:  false,
    template:    undefined,
    templateUrl: undefined,
    controller:  undefined,
    require:     undefined,
    scope:       { },
    link:        function (scope, element, attributes) {
      // TODO only a handful of lines
      //  assign 2 scope variables or less
      //  define 2 functions or less
    }
  };
}

```

####Large Directive

```javascript
import MyDirectiveLink from 'MyDirectiveLink';

/**
 * <p>TODO description of this class</p>
 * @ngInject
 */
export default function myLargeDirective($inject) {
  return {
    restrict:    'ACE',
    replace:     true,
    transclude:  false,
    template:    undefined,
    templateUrl: undefined,
    controller:  undefined,
    require:     undefined,
    scope:       { },
    link:        function (scope, element, attributes) {
      $injector.invoke(MyDirectiveLink, { $scope:scope, element:element, attributes:attributes });
    }
  };
}

```

```javascript
import bind   from 'bind';
import extend from 'extend';

/**
 * <p>TODO description of this class</p>
 */
export default class MyDirectiveLink {

  /**
   * @constructor
   * @ngInject
   */
  constructor($scope, element, attributes) {

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

<div class='es6-stop'></div>


<div class='es5-start'></div>

####Small Directive
```javascript
/**
 * <p>TODO description of this class</p>
 * @ngInject
 */
function mySmallDirective(uidService) {
    return {
        restrict:    'ACE',
        replace:     true,
        transclude:  false,
        templateUrl: undefined,
        controller:  undefined,
        require:     undefined,
        scope:       { },
        template:    undefined,
        link:        function ($scope, element, attributes) {
              // TODO only a handful of lines
              //  assign 2 scope variables or less
              //  define 2 functions or less
        }
    };
}

module.exports=mySmallDirective;
```
####Large Directive
```javascript
/**
 * <p>TODO description of this directive</p>
 * @ngInject
 */
var myLargeDirectiveLink = require('../app/largeDirectiveLink');

function uidLargeDirective($injector) {
    'use strict';

    return {
        restrict:    'ACE',
        replace:     true,
        transclude:  false,
        template:    undefined,
        templateUrl: undefined,
        controller:  undefined,
        require:     undefined,
        scope:      { }
        link:       function ($scope, element, attributes) {
            $injector.invoke(myLargeDirectiveLink, this, { $scope:$scope, element:element, attributes:attributes });
        }
    };
}

module.exports=uidLargeDirective;
```
```javascript
/**
 * <p>TODO description of this function</p>
 * @ngInject
 */
function LargeDirectiveLink($scope, uidService )
{
    // Do many more things over here.
}

module.exports=LargeDirectiveLink;
```

<div class='es6-stop'></div>




