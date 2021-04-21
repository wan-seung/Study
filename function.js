'use strict';

// 2. parameters
// premitive parameters : passed by values
// object parameters : passed by reference

function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. default parameters (ES6)

function showMessage(message, from = 'wanie') {
  console.log(`${message} BY ${from}`);
}
showMessage('hi');

// 4. Rest parameters (ES6)

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach(arg => console.log(arg));
}

printAll('dream', 'coding', 'wanie', '///////');

// 5. local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); //local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage);
}

printMessage();

//밖에서는 안을 볼수 없고 안에서는 밖을 볼 수 있다.

// 6. Return a value

function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(result);

// 7. Early return, early exit
// bad case

function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}
// good case >> 빨리 처리할 수 있는부분을 작성하고 후에 작성한다??
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// 1. Function expression
const print = function () {
  //anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// 3. Arrow function
const addNumber = (a, b) => a + b;
const simplePrint = () => console.log('very simple!');
console.log(addNumber(3, 4));
console.log(simplePrint());

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('iife');
})();

function calculate(command, a, b) {
  // if (command === 'sum') {
  //   return a + b;
  // }
  // if (command === 'substract') {
  //   return a - b;
  // }
  // if (command === 'divide') {
  //   return a / b;
  // }
  // if (command === 'multiply') {
  //   return a * b;
  // }
  // if (command === 'remainder') {
  //   return a % b;
  // }
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('Unknown Command');
  }
}

console.log(calculate('sum', 1, 3));
console.log(calculate('substract', 1, 3));
console.log(calculate('divide', 4, 2));
console.log(calculate('multiply', 4, 2));
console.log(calculate('remainder', 4, 3));
