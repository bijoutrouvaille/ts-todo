import $ = require('jquery');

function main() {
  let x = 3;

  const language = "typescript";

  const programer = {
    level: "beginner",
    language: language
  }

  const describeRatio: (a: string, b: string) => string 
      = (a: string, b: string) => "the ratio is " + a + "/" + b + "."
  
  function describeRatio2(a: string, b: string): string {
    return "the ratio is " + a + "/" + b + ".";
  }

  const describeRatio3: (a: string, b: string) => string = describeRatio2;
  /**
   * Demonstrate the need for function annotations.
   * 
   * - Create a login form:
   *    - username input
   *    - password input
   *    - login button: print to console username and password
   * ---
   * Create a login form:
   *  wite HTML for form, inputs and the button
   *  give them class names to be select with jQuery
   * 
   * Attach a click handler to the login button
   * Get the value of the username and password inputs
   * 
   * Homework: Fully annotate the parameter function assignLoginButtonHandler
   */
  
  assignLoginButtonHandler(printLoginInfo);
}
$(main);

function assignLoginButtonHandler(printInfo: ...) {
  $('.loginButton').click(function(e: JQuery.ClickEvent<HTMLElement, null, HTMLElement, HTMLElement>){
    e.preventDefault();
    const username = $('.username').val() as string;
    const password = $('.password').val() as string;
    printInfo(username, password);
  })
}
function printLoginInfo(user: string, pwd: string) {
  console.log('the username is', user);
  console.log('the password is', pwd);
}