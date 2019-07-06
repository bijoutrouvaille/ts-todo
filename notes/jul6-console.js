function addNums (a,b,c) {
  return (a + b + c) 
}

addNums(1, 5, 2); // predict output

8
const addThreeNums = addNums;

const multiply = (a, b) => a * b;

typeof multiply
"function"
const printNumber = function (el) { 
  console.log(el);
}

[ 1, 2, 3 ].forEach(printNumber)

VM3737:2 1
VM3737:2 2
VM3737:2 3
undefined

[ 3, 5 , 7].forEach(function(el) { console.log(el) })
VM4120:1 3
VM4120:1 5
VM4120:1 7
undefined

let arr = [ 3, 5 , 7];

arr.forEach(function(el) { console.log(el) })
VM4194:1 3
VM4194:1 5
VM4194:1 7
undefined

arr.map(function(el) { console.log(el) })
VM4250:1 3
VM4250:1 5
VM4250:1 7

(3) [undefined, undefined, undefined]
arr.forEach(function(el) { return 123 })
undefined

arr.forEach(function(el) { return "fff" })
undefined

arr.map(function(el) { return "fff" })
(3) ["fff", "fff", "fff"]
arr
(3) [3, 5, 7]
let arr2 = arr.map(function(el) { return "fff" })
undefined
arr2
(3) ["fff", "fff", "fff"]
let arr2 = arr.map(function(el) { return 27 })
VM4506:1 Uncaught SyntaxError: Identifier 'arr2' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM4506:1
arr.map(function(el) { return 27 })
(3) [27, 27, 27]0: 271: 272: 27length: 3__proto__: Array(0)
arr.map(function(el) { return el })
(3) [3, 5, 7]
arr
(3) [3, 5, 7]
arr.map(function(el) { return el + 100 })
(3) [103, 105, 107]0: 1031: 1052: 107length: 3__proto__: Array(0)
arr.map(function(el) { console.log(el) })
VM4657:1 3
VM4657:1 5
VM4657:1 7
(3) [undefined, undefined, undefined]
arr.map(function(el) { console.log(el) })
VM4699:1 3
VM4699:1 5
VM4699:1 7
(3) [undefined, undefined, undefined]
let arr100 = arr.map(function(el) { return el + 100 })
undefined
arr100
(3) [103, 105, 107]
