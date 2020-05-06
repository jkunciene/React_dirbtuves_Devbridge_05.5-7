## Array.prototype.filter()

```javascript
const array1 = [1, 9, 4, 16];
const filter1 = array1.filter(x => x < 8);
console.log(filter1); // expected output: Array [1, 4]
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

## Array.prototype.map()

Introduced in: ES5

```javascript
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1); // expected output: Array [2, 8, 18, 32]
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## let

The let statement declares a block scope local variable, optionally initializing it to a value.

```javascript
let x = 1;

if (x === 1) {
  let x = 2;
  console.log(x); // expected output: 2
}

console.log(x); // expected output: 1
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

## const

Same as let, but it must be initialized and value may not be changed.

```javascript
const a = 1;
a = 2; // this would throw an error
```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

## Spread syntax

```javascript
myFunction(...iterableObj);
```

```javascript
[...iterableObj, '4', 'five', 6];
```

```javascript
let objClone = { ...obj };
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax


## Object destructuring

Example:
```javascript
const data = { foo: 'bar' };
const { foo } = data;
console.log(foo); // Output: "bar"
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring

## Arrow function expressions

An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the "this", "arguments", "super", or "new.target" keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.

```javascript
const getGreeting = () => {
  return 'Hi, there!';
};

const getGreetingShorter = () => 'Hi, there 2!'; 

console.log(getGreeting()); // 'Hi, there!'
console.log(getGreetingShorter()); // 'Hi, there 2!'
```

```javascript
'use strict';
var obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

## export

```javascript
const data = "some data";
export { data };
```

```javascript
const data = "some data";
export default data;
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

## import

### Importing example
```javascript
import { movies } from './path/to/source-file';
console.log(movies);
```

### Importing default example
```javascript
import data from './path/to/source-file';
console.log(data);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

