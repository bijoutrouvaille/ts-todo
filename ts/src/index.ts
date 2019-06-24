import $ = require('jquery');

function on(eventName: string, handlerFunc: Function) {
  //  
}
function main() {
  const print3 = function () {
    alert('the number is 3')
  }
  $('body').on('click', print3)
}

$(main);