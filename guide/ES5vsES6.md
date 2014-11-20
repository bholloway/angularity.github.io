ES5 vs ES6
===

<!--
Before we move ahead to the `Guide` section, it would be helpful to understand the difference between the 2 versions of ECMAScript, namely ES5 and ES6.
Please set your preference below to see the guide for that particular version.By default, it is set to ES5.


<div>
    <div><b>View Guide for : </b></div>
    <form class="type" >
        <input type="radio" name="visibilitySections" value="es5" checked="checked">  ES5</input>
        <input type="radio" name="visibilitySections" value="es6">  ES6</input>
    </form>
</div>
-->



<br/>
##Present
 - Currently, javascript is based on `ECMAScript 5` standards which is more of a function style programming.
 - Although you can create classes and objects, it is syntactically confusing to understand implementation of Object Oriented Programming in javascript. 

<br/>
##Future
- Going forward, `ECMAScript 6` is in draft and soon going to be released.
- `ECMAScript 6` gives you the power of classes. It adds the much required syntactic sugar to your code.
- There are many more advantages of ES6 over ES5. You can view some of them [here](http://www.wintellect.com/blogs/nstieglitz/5-great-features-in-es6-harmony). 

<br/>
##Why ES6?

- Even after all the wonderful new features in store, one might argue, why to adopt to ES6 right away? The answer is to `Future Proof`.
- AngularJS 2.0 is going to be implemented in ES6. ([Read more](http://ng-learn.org/2014/03/AngularJS-2-Status-Preview/)). This gives us all the reasons in the world to implement ES6 right from now.

<br/>
##Still want to use ES5 ?
- Although we strongly promote ES6; if you still want to follow ES5, we recommend some standards to add structure to your code. <br/> However, if you are convinced to use ES6, ignore the ES5 implementations below.
 
<br/>
<br/>
##Exporting Modules
###ES6

- Use the keyword `export` to specify the module which wants to be exported. 

```javascript
//  Export only a single value
export default class MyModule {
  constructor() {
    // do something
  }
}
```

```javascript
//  Export different funtions

export function module1() {
    //do something;
}

export function module2() {
    //do something;
}
```

###ES5

- Use Node.js `module.exports`

```javascript
function MyModule() {
    //do something
}

module.exports = MyModule;
// OR, if there are more than one exports
module.exports = {
    MyModule : MyModule
};
```
<br/><br/>
##Importing Modules

###ES6

- Use the keyword `import` to import some module from another module.

```javascript
// Importing one module from n different exports
import { module1, module2 } from 'MyModules';
// OR
import { module1 as myFancyName } from 'MyModules';

class MyClass {
  constructor() {
    // do something
    module1.someFunction();
  }
}
```
```javascript
// Importing a default export
import module from 'MyModules';

class MyClass {
  constructor() {
    // do something
    module.something;
  }
}
```
###ES5

- Use Node.js `require` 

```javascript
var module = require('MyModule');

function myFunction() {
    //do something
    module.something;
}
```
<br/>
##[Further understanding on Import And Export](http://www.2ality.com/2013/07/es6-modules.html).
<br/>
##Getters and Setters
###ES6
```javascript
class MyClass(){
    constructor()
    {
        // do something
        this.myProperty = 0;
    }
    get myProperty(){
        return this.myProperty;
    }
    set myProperty(value){
        this.myProperty = value;
    }
}
```
###ES5
```javascript
function MyClass(){
    this.myProperty = 0;
    getMyProperty(){
        return this.myProperty;
    }
    setMyProperty(value){
        this.myProperty = value;
    }
}
```




 





 