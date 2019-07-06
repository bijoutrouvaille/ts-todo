import $ = require('jquery');

function main() {

  let num1: number = 3;
  let str1: string = "hello";
  
  function add10(num: number) {
    return num + 10;
  }
  
  let addConstant: (num: number) => number = add10;

  function add(a: number, b: number) {
    return a + b
  }

  let addTwoNumbers: (x: number, y: number) => number = add;

  interface Greeter {
    greeting: string
  }
  

  function greet(greeter: Greeter) {
    return greeter.greeting;
  }
  function greet2(greeting: string) {
    return greeting;
  }

  const doYourJob: (greeter: Greeter) => string = greet

}
$(main);