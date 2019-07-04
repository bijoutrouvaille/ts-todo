# June 23 Session

## Notes

### Overview: Components of Web Programming

- language: basics, data structures, type safety
- browser: HTML, CSS, DOM 
- architecture: testing, frameworks, group work

### Browser Developer Tools

1. Console
2. Element Inspector
  - DOM panel
  - Styles panel

### Variables

_note_: Values vs Variables
  variables are containers that hold values.

The `typeof` operator helps get type information.

1. Primitive types: 
  - Not made of simpler types.
  - boolean: true, false
  - number: 123
  - string: "hello"
  - undefined
  - null
2. Object types: 
  - Composed of child types
  - Child types can be primitive or not
  - object: { greeting: "hello", x: 123 }, null
    * You may notice that `typeof null` is "object". Nulls are weird like that.
  - array: []
    * arrays are also objects
3. Function Type
  * functions are also objects, albeit special ones
4. Declaration and assignment
  - variables should be declared before use
    * variables can be declared but not assigned to, e.g.
      `let x; console.log(x) // prints undefined`
  - declaration can be done with keywords `let`, `const`, or `var`.
  - `let` variables can be re-assigned a value.
  - `const` constants cannot be re-assigned a value.
  - `var` acts similar to `let`. Do not use.
5. Variable change VS re-assignment
  - re-assignment
    * `let   x = 3; x = 4;` <-- OK
    * `const x = 3; x = 4;` <-- Error
  - change
    * `let   obj = { x: 3 }; obj.x = 4;` <-- OK
    * `const obj = { x: 3 }; obj.x = 4;` <-- OK

5. Functions
  - keyword syntax `function add(x, y) { return x + y }`
    * declares variable `add` of type function and assigns a value to it
  - arrow or lambda syntax `const add = (x, y) => x + y`
    * a lambda by itself is just a value, i.e. does not declare or assign -- you have to do that yourself, as above.
  - parameters
    * used like variables
    * have types 
  - assigning function values
  - function types
7. Other types
  - there exist other new and more advanced types and constructors
  - Map, Set, NaN, BigInt, Symbol

## Exercises

1. Is this value a primitive?
  - a. "hello"
  - b. 37
  - c. {}
  - d. [1,3,7]
  - e. function () { }

2. Will the following cause an error?
```
    const obj = { greeting: "hello" };
    obj.greeting = "hi";
```
3. How about the following?
```
    const obj = { greeting: "hello" };
    obj = { greeting: "hi" };
```
  What's the difference?


4. Run the following two lines of code in the console and explain the difference you see:
```
    console.log(Math.random())
    console.log(Math.random) 
```
5. Without running the following lines of code, predict the result of each:
    - a. `typeof (Math.random())`
    - b. `typeof (Math.random)`
    - c. `typeof (typeof Math.random())`
    - d. `typeof (typeof Math.random)`

6. Arrays have a method called `forEach`. It accepts a function as a parameter and calls it with each of the values in the array. We'll make use of it to create a function to output an array in such a way that will allow the caller to determine how the output is done.
  ```
    const outputArray = function (array, outputNum) { 
      array.forEach(outputNum)
    }
  ```
  
  + a. What is the type for each of the variables and parameters above?
  + b. Enter the above code into the Dev Tools console, and write a function `printNum` that will be useful as the outputNum parameter to the `outputArray` function. Make sure it works in the console.
  + c. Create another variation of that function.
