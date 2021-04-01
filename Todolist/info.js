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

// let admin;
// let name1;

// name1 = 'John';
// admin = name1;

// // alert(admin);

// let ourPlanetName = 'Earth';
// let currentUserName = 'seungwan';

// // alert(1 / 0);

// console.log(typeof 1);
// console.log(typeof Math);
// console.log(typeof null);
// console.log(typeof alert);

// let result = prompt('당신의 이름을 입력해주세요', [undefined]);
let result = prompt('골라주세요', ['']);
console.log(result + '님 감사합니다');
// alert(result);

let resultChoice = confirm('선택하신게 맞나요?');

console.log(resultChoice);

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

// console.log(2 ** 3);
// console.log(4 ** (1 / 2));

// console.log(4 + 4 + '1');

// let apples = '2';
// let oranges = '3';

// console.log(apples + oranges);
// console.log(+apples + +oranges);

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

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

// let num1 = 1;
// let num2 = 1;
// let c = ++num1; // 2
// let d = num2++; // 1

// a = 4 , x = 5

// console.log('' + 1 + 0); // 10
// console.log(typeof ('' + 1 + 0)); // 10

// '' - 1 + 0; // -1
// true + false; // 1
// 6 / '3'; // 2
// '2' * '3'; // 6
// 4 + 5 + 'px'; // "9px"
// '$' + 4 + 5; // "$45"
// '4' - 2; // 2
// '4px' - 2; // NaN
// 7 / 0; // infinite
// '  -9  ' + 5; // "-95"
// '  -9  ' - 5; // -14
// null + 1; // 1
// undefined + 1; // NaN
// ' \t \n' - 2; // "\t \n2"

// let result = 5 < 4;
// console.log(result);

// 동등연산자 ==
// 일치연산자 === : strict 한 비교

// 5 > 4; // true
// 'apple' > 'pineapple'; // false
// '2' > '12'; // true
// undefined == null; // true
// undefined === null; // false
// null == '\n0\n'; // false
// null === +'\n0\n'; // false

// if문과 '?'를 사용한 조건 처리

// let year = prompt('김승완은 언제 태어났을까요?', '');

// if (year == 1992) {
//   alert('정답입니다!');
// } else {
//   alert('다시 생각해보세요!');
// }
// let age;
// let accessAllowed = age > 18 ? true : false;

// let value = prompt("자바스크립트의 '공식'이름은 무엇일까요?", '');
// if (value == 'ECMAScript') {
//   alert('정답입니다!');
// } else {
//   alert('정답은 ECMAScript 입니다');
// }

// let number = prompt('숫자를 입력해 주세요', 0);
// if (number > 0) {
//   alert(1);
// }
// if (number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let result;

// if (a + b < 4) {
//   result = '미만';
// } else {
//   result = '이상';
// }

// let result = a + b < 4 ? '미만' : '이상';

// let message;

// if (login == '직원') {
//   message = '안녕하세요.';
// } else if (login == '임원') {
//   message = '환영합니다.';
// } else if (login == '') {
//   message = '로그인이 필요합니다.';
// } else {
//   message = '';
// }

// let message =
//   login == '직원'
//     ? (message = '안녕하세요.')
//     : login == '임원'
//     ? (message = '환영합니다.')
//     : login == ''
//     ? (message = '로그인이 필요합니다.')
//     : (message = '');

// import { a, b, c } from 'app.js';

// result = value1 || value2 || value3;
// result = value1 ?? value2 ?? value3;

// 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가합니다.
// 각 피연산자를 불린형으로 변환합니다.
// 변환 후 그 값이 true이면 연산을 멈추고 해당 피연산자의
// 변환 전 원래 값을 반환합니다.
// 피연산자 모두를 평가한 경우(모든 피연산자가 false로
// 평가되는 경우)엔 마지막 피연산자를 반환합니다.

// result = value1 && value2 && value3;

// 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가합니다.
// 각 피연산자는 불린형으로 변환됩니다.
// 변환 후 값이 false이면 평가를 멈추고 해당 피연산자의
// 변환 전 원래 값을 반환합니다.
// 피연산자 모두가 평가되는 경우(모든 피연산자가 true로
// 평가되는 경우)엔 마지막 피연산자가 반환됩니다.

// &&를 if문을 짧게 쓰는 용도로 사용하지 말자.

// Boolean  !!

let age;
if (age >= 14 && age <= 90) {
}
