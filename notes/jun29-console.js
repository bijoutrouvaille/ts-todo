typeof (function(){})
"function"
    const outputArray = function (array, outputNum) { 
      array.forEach(outputNum)
    }

undefined
typeof outputArray
"function"
function f (array, outputNum) { 
      array.forEach(outputNum)
    }
undefined
const f2 = f
undefined
typeof f2
"function"
const outputArray = function (array, outputNum) { 
	array.forEach(outputNum)
}
VM1156:1 Uncaught SyntaxError: Identifier 'outputArray' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM1156:1
let outputNum = function (num) { 
	console.log("the number is ", num);
}
undefined
typeof outputNum
"function"
console.log(22, 33, 44)
VM1905:1 22 33 44
undefined
console.log("hello " + "world " + 45)
VM2025:1 hello world 45
undefined
outputNum(22)
VM1614:2 the number is  22
undefined
let printNum = outputNum
undefined
printNum(22)
VM1614:2 the number is  22
undefined
outputArray([1,2,3], printNum)
VM1614:2 the number is  1
VM1614:2 the number is  2
VM1614:2 the number is  3
undefined
typeof [1,2,4].forEach
"function"
let arr = [1,2,3]
undefined
arr
(3) [1, 2, 3]
arr.forEach2 = function(paramFunc) {
  for (let i = 0; i < arr.length; i+++;) paramFunc(arr[i])
}
VM3390:2 Uncaught SyntaxError: Unexpected token ;
arr.forEach2 = function(paramFunc) {
  for (let i = 0; i < arr.length; i++;) paramFunc(arr[i])
}
VM3401:2 Uncaught SyntaxError: Unexpected token ;
arr.forEach2 = function(paramFunc) {
  for (let i = 0; i < arr.length; i++) paramFunc(arr[i])
}
ƒ (paramFunc) {
  for (let i = 0; i < arr.length; i++) paramFunc(arr[i])
}
typeof arr.forEach2
"function"
let obj = { greeting: "hello" }
undefined
obj.forEach = function() { }
ƒ () { }
obj.someValue = 77
77
function hello() { console.log("hello") }
undefined
hello()
VM3839:1 hello
undefined
hello.forEach = function() { }
ƒ () { }
arr.forEach2(true)
VM3410:2 Uncaught TypeError: paramFunc is not a function
    at Array.arr.forEach2 (<anonymous>:2:40)
    at <anonymous>:1:5
arr.forEach2 @ VM3410:2
(anonymous) @ VM4309:1
arr.forEach2 = function(paramFunc) {  	
	for (let i = 0; i < arr.length; i++) paramFunc(arr[i])
}
ƒ (paramFunc) {  	
	for (let i = 0; i < arr.length; i++) paramFunc(arr[i])
}
function add1ThenPrint(num) {
  let nextNum = num + 1;
  console.log(nextNum);
}
undefined
add1ThenPrint(7)
VM4873:3 8
undefined
arr.forEach2(add1ThenPrint)
VM4873:3 2
VM4873:3 3
VM4873:3 4
undefined
arr(add1ThenPrint)
VM5142:1 Uncaught TypeError: arr is not a function
    at <anonymous>:1:1
(anonymous) @ VM5142:1
arr(12312, true)
VM5353:1 Uncaught TypeError: arr is not a function
    at <anonymous>:1:1
(anonymous) @ VM5353:1
arr.forEach2()
VM4569:2 Uncaught TypeError: paramFunc is not a function
    at Array.arr.forEach2 (<anonymous>:2:39)
    at <anonymous>:1:5
arr.forEach2 @ VM4569:2
(anonymous) @ VM5528:1
arr.forEach(add1ThenPrint)
VM4873:3 2
VM4873:3 3
VM4873:3 4
undefined
outputArray([1,2,3], add1ThenPrint)
VM4873:3 2
VM4873:3 3
VM4873:3 4
undefined
let alertNum = function(num) { 
  alert("the number is " + num)
}
undefined
outputArray([1,2], alertNum)
undefined
