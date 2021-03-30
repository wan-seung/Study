'use strict';

/*

v8 > Chrome, Opera
엔진 동작 원리 : 1. parsing (엔진이 스크립트를 읽는다)
              2. compile (읽어들인 스크립트를 기계어로 전환합니다.)
              3. 기계어로 전환된 코드가 실행됩니다. 기계어로 전환되었기 때문에 속도가 빠르다.
엔진은 프로세스 각 단계마다 최적화를 진행합니다.

*/

// alert("i'm javascript!!");
// alert(3 + 1 + 2);

// let a = 3;
// let b = '이숫자는 몇일까?';

// console.log(b + a);

// let && const => 변수와 상수

let admin;
let name1;

name1 = 'John';
admin = name1;

// alert(admin);

let ourPlanetName = 'Earth';
let currentUserName = 'seungwan';

// alert(1 / 0);

console.log(typeof 1);
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert);

// let result = prompt('당신의 이름을 입력해주세요', [undefined]);
// let result = prompt('골라주세요', ['']);
// console.log(result + '님 감사합니다');
// alert(result);

// let resultChoice = confirm('선택하신게 맞나요?');

// console.log(resultChoice);

// let value = false;
// alert(typeof value);

// value = String(value);
// alert(typeof value);
// alert(value);

// let str = '486';
// alert(typeof str);

// str = Number(str);
// alert(typeof str);
// alert(str);

// let age = Number('123이거 뭐라고뜨니123');
// alert(age);

// alert(Boolean(1));
// alert(Boolean(0));
// alert(Boolean('qwe'));

// 아래 내용 중요하니 기억해두자
// alert(Boolean(' ')); // true
// alert(Boolean('0')); // false

// alert(Number(undefined)); // NaN

console.log(2 ** 3);
console.log(4 ** (1 / 2));

console.log(4 + 4 + '1');

let apples = '2';
let oranges = '3';

console.log(apples + oranges);
console.log(+apples + +oranges);

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

// console.log('a의 값은 :' + a);
// console.log('c의 값은 :' + c);

// let d = 4;
// d = d + 5; // d = 9
// console.log(d);
// d = d * 2; // d = 18
// console.log(d);

// let e = 3;
// e += 5; // d = 8
// console.log(e);
// e *= 2; // d = 16
// console.log(e);

let num1 = 1;
let num2 = 1;
let c = ++num1; // 2
let d = num2++; // 1
