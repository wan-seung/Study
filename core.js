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