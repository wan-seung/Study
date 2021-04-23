'use strict';
// Data structure(자료구조) 와 object 의 차이점
// object는 서로 연관된 특징과 또는 행동들을 묶어놓은것
// 비슷한 타입의 object들을 묶어 놓은것이 자료구조다.
// Javascript = dynamically typed language

//자료구조와 알고리즘은 꼭공부해야된다
// 검색, 삽입, 정렬, 삭제에 대한 알고리즘은 효율성을 갖는다
// 프로그래머스나 인터뷰문제에서 자주 등장한다. 속도 고려

// Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach 배열안에 들어있는 value들 마다 내가 전달한 함수를 출력한다.
fruits.forEach((fruit, index, array) => {
  console.log(fruit, index, array);
});

let fruits = ['apple', 'banana'];
// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('strawberry', 'peaches');
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);
// unshift : add an item to the beginning
fruits.unshift('strawberry', 'lemon');
console.log(fruits);
// shift : remove an item from the beginning
// fruits.shift()
// fruits.shift()
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// remove an item by index position
fruits.push();
console.log(fruits);
fruits.splice(1, 1);
fruits;

// combin two arrays
const color = ['red', 'blue'];
const newFruits = fruits.concat(color, new Array([1, 2]));
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('lemon'));
console.log(fruits.indexOf('bored')); // -1

// includes
console.log(fruits.includes('lemon')); // true

//lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));
