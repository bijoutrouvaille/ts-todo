# Session Notes June 29

## Variables and fields

Example of a variable:

    let x = 3;

Example of a field:

    let obj = {
      y: 2
    };
    obj.y = 3;

We say that `x` is a variable, but `y` is a field defined _on_ the object _obj_.

## Fields and Methods

A function is called a _method_ of an object if it is a field defined on that object. In Java only classes can be objects, so only classes have methods. Only objects (and functions) can have methods.

Example of a function:

    function f (a, b) {
      return a + b;
    }
    f (3, 7) // 10
    typeof f // "function"

_Incorrect_ way to describe the above:
  - `f` is a method of two parameters 

The _correct way_:
  - `f` is a function of two parameters

Example of a method:

    let math = {
      add: function (a, b) {
        return a + b
      }
    }
    math.add(5, 9) // 14
    typeof math.add // "function"
    
Different ways to say the same thing (correctly):
  - `add` is a function defined on the object `math`
  - `add` is a method of object `math`
  - `add` is a function-valued field of object `math`

## Exercises

1. Try running these examples in the console and predict the output where marked:

```
function addNums (a,b,c) {
  return (a + b + c) 
}

addNums(2, 5, 3); // predict output

const addThreeNums = addNums;

typeof addThreeNums; // predict output
addThreeNums(2, 5, 3); // predict output
addThreeNums(1, 10, 100); // predict output

const multiply = (a, b) => a * b;

multiply(3, 5); // predict output;

const math = {
  add: addThreeNums,
  mult: multiply,
  max: function (a, b) {
    if (a > b) return a;
    else return b;
  } 
}

math.add(4, 7, 9); // predict 
math.mult(7, 3); // predict
math.max(11, 22); // predict
```

For 2-5 Complete the code by replacing `...`

2.
```
const add = ... ;
console.log(add(4, 7); // should print 11
```

3.
```
function multiply2Nums(a,b) {
  return a * b;
}
function multiplyBy10(num, func) {
  return func(num, 10);
}
multiplyBy10(3, ...)
```

4.
```
const ops = {
  outputToConsole: ...
}
function printProduct(a,b, printFunc) {
  const product = a * b;
  printFunc(product); 
}
printProduct(7, 5) // should display a string "the number is 35"
```

5. 
```
const printNumber = ... ;
[ 1, 2, 3 ].forEach(printNumber)
```

The `map` function on an array is very similar to `forEach`, except returns a value, which is a new array of the same length. Just like `forEach`, `map` takes 1 parameter, which is a function called `iter`, short for _iterator_. The iterator function is expected to accept as parameter any value from the array and return some other value. This return value is then placed in the same position of the new array as the value of the old array was in for the parameter to the iterator.

6. 
Try to search on the internet for examples of this function.

7. 
Predict the output of the following:

```
function add10(num) {
  return num + 10;
}
const array1 = [ 3, 5, 7 ];
const array2 = array1.map(add10);
console.log( array2 ); // predict output
```

8.
Why is the function-parameter of `map` and `forEach` called iterator?

9. 
Why do you think functions `forEach` and `map` were named as they were?
