'use strict';

// 1. Literals and properties
// object = { key : value 의 집합체 };
const obj1 = {}; // object literal
const obj2 = new Object(); // class templete object constructor

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const wanie = { name: 승완, age: 30 };
print(wanie);

wanie.hasJob = false;
console.log(wanie.hasJob);

delete wanie.hasJob;
console.log(wanie.hasJob);

// 2. Computed(계산된) properties >> runtime에서 결정될때 보통 쓰인다
console.log(ellie.name);
// key should be always string type
console.log(ellie['name']); // << Computed properties
wanie['hasJob'] = false;
console.log(wanie['hasJob']);
console.log(wanie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(wanie, 'name');
printValue(wanie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'bob', age: 2 };
const person3 = { name: 'bob', age: 2 };
const person4 = new Person('wanie', 30);
console.log(person4);

// 4. Constructor Function
const Person = (name, age) => {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
};

// 5. in operator: property existence check (key in obj)
console.log('name' in wanie);
console.log('age' in wanie);
console.log('reandom' in wanie);
// true true false
console.log(wanie.weight); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in wanie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++){
//   console.log(array[i])
// }
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'wanie', age: '30' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
  // user3에 key를 추가한다 = user에 값을 할당한다.
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
