// 2. 실행 컨텍스트

// let eternalLoop = function(){
//   return eternalLoop()
// }
// eternalLoop()

// 예제 2-1 실행 컨텍스트와 call stack
// -----(1)
let a = 1;
function outer() {
  function inner() {
    // console.log(a); // undefined
    let a = 3;
    console.log(a); // undefined
  }
  inner(); // -----(2)
  console.log(a);
}
outer(); // -----(3)
console.log(a);

//예제 2-2 매개변수와 변수에 대한 호이스팅(1) - 원본 코드
function a(x) {
  // 수집 대상 1 (매개변수)
  console.log(x); // (1)
  var x; // 수집 대상 2 (변수 선언)
  console.log(x); // (2)
  var x = 2; // 수집 대상 3 (변수 선언)
  console.log(x); // (3)
}
a(1);

//예제 2-3 매개변수와 변수에 대한 호이스팅(2) - 매개변수를 변수 선언/할당과 같다고 간주해서 변환한 상태
function b() {
  // 수집 대상 1 (매개변수)
  var x = 1;
  console.log(x); // (1)
  var x; // 수집 대상 2 (변수 선언)
  console.log(x); // (2)
  var x = 2; // 수집 대상 3 (변수 선언)
  console.log(x); // (3)
}
b();

//예제 2-4 매개변수와 변수에 대한 호이스팅(3) - 호이스팅을 마친 상태
function c() {
  // 수집 대상 1 (매개변수)
  var x;
  var x;
  var x;

  x = 1;
  console.log(x);
  console.log(x);
  x = 2;
  console.log(x);
}
c();

//예제 2-5 함수 선언의 호이스팅 (1) - 원본 코드
function a() {
  console.log(b); // (1)
  var b = 'bbb'; // 수집 대상 1(변수 선언)
  console.log(b); // (2)
  function b() {} // 수집 대상 2(함수 선언)
  console.log(b); // (3)
}
a();

//예제 2-6 함수 선언의 호이스팅 (2) - 호이스팅을 마친 상태
function c() {
  var b; // 수집 대상 1. 변수는 선언부만 끌어올립니다.
  function b() {} // 수집 대상 2. 함수 선언은 전체를 끌어올립니다.
  console.log(b); // (1)
  b = 'bbb'; // 변수의 할당부는 원래 자리에 남겨둡니다.
  console.log(b); // (2)
  console.log(b); // (3)
}
c();

//예제 2-7 함수 선언의 호이스팅 (3) - 함수 선언문을 함수 표현식으로 바꾼 코드
function d() {
  var b;
  var b = function b() {}; // << 바뀐부분
  console.log(b); // (1)
  b = 'bbb';
  console.log(b); // (2)
  console.log(b); // (3)
}
d();

//예제 2-8 함수를 정의하는 세 가지 방식
function a() {
  return 'hello';
} // 함수 선언문. 함수명 a가 곧 변수명.
a(); // 실행 ok

var b = function () {}; // (익명) 함수 표현식. 변수명 b가 곧 함수명
b(); // 실행 ok

var c = function d() {}; // 기명 함수 표현식. 변수명은 c, 함수명은 d.
c(); // 실행 ok
// d(); // 에러!

//예제 2-9 함수 선언문과 함수 표현식 (1) - 원본코드
console.log(sum(1, 2));
console.log(multiply(3, 4));

function sum(a, b) {
  //함수 선언문 sum
  return a + b;
}

var multiply = function (a, b) {
  // 함수 표현식 multiply
  return a * b;
};

//예제 2-10 함수 선언문과 함수 표현식 (2) - 호이스팅을 마친 상태
var sum = function sum(a, b) {
  // 함수 선언문은 전체를 호이스팅 합니다.
  return a + b;
};

var multiply; // 변수는 선언부만 끌어올립니다.

console.log(sum(1, 2));
console.log(multiply(3, 4));

multiply = function (a, b) {
  // 변수의 할당부는 원래 자리에 남겨둡니다.
  return a * b;
};

//예제 2-11 함수 선언문의 위험성
console.log(sum(3, 4));

function sum(x, y) {
  return x + y;
}

var a = sum(1, 2);
a;

function sum(x, y) {
  return x + '+' + y + '=' + (x + y);
}

var c = sum(1, 2);
console.log(c);

//예제 2-12 상대적으로 함수 표현식이 안전하다.

console.log(sum(3, 4)); // Uncaught Type Error: sum is not a function

var sum = function (x, y) {
  return x + y;
};

var a = sum(1, 2);

var sum = function (x, y) {
  return x + '+' + y + '=' + (x + y);
};

var c = sum(1, 2);
console.log(c);

// 2-3-2 스코프, 스코프체인, outerEnvironmentReference
//예제 2-13 scopeChain

var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a);
    var a = 3;
  };
  inner();
  console.log(a);
};
outer();
console.log(a);
