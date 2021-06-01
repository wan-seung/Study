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

// 3. This

//예제 3-1 전역 공간에서의 this(브라우저 환경)
console.log(this);
console.log(window);
console.log(this === window); // true

//예제 3-2 전역 공간에서의 this(node.js 환경)
console.log(this);
console.log(global);
console.log(this === global);

//예제 3-3 전역변수와 전역객체(1)
var a = 1;
console.log(a);
console.log(window.a);
console.log(global.a);
console.log(this.a);
// 자바스크립트의 모든 변수는 실은 특정 객체의 프로퍼티로서 동작한다.

//예제 3-4 전역변수와 전역객체(2)
var a = 1;
window.b = 2;
console.log(a, window.a, this.a); // 1 1 1
console.log(b, window.b, this.b); // 2 2 2

window.a = 3;
b = 4;
console.log(a, window.a, this.a); // 3 3 3
console.log(b, window.b, this.b); // 4 4 4

//예제 3-5 전역변수와 전역객체(3)
var a = 1;
delete window.a; // false
// console.log(a, window.a, this.a)

var b = 2;
delete b; // false
// console.log(b, window.b, this.b)

window.c = 3;
delete window.c; // true
console.log(c, window.c, this.c); // Uncaught ReferenceError: c is not defined

window.d = 4;
delete d; // true
console.log(d, window.d, this.d);

//예제 3-6 함수로서 호출, 메서드로서 호출
var func = function (x) {
  console.log(this, x);
};
func(1); // Window{ . . .} 1

var obj = {
  method: func,
};
obj.method(2); // { method: f } 2

//예제 3-7 메서드로서 호출 - 점 표기법, 대괄호 표기법
var obj = {
  method: function (x) {
    console.log(this, x);
  },
};
obj.method(1); // { method: f } 1
obj['method'](2); // { method: f } 2

//예제 3-8 메서드 내부에서의 this
var obje = {
  methodA: function () {
    console.log(this);
  },
  inner: {
    methodB: function () {
      console.log(this);
    },
  },
};
obje.methodA(); // === obj
obje['methodA'](); // === obj

obje.inner.methodB(); // === obj.inner
obje.inner['methodB'](); // === obj.inner
obje['inner'].methodB(); // === obj.inner
obje['inner']['methodB'](); // === obj.inner

//예제 3-9 내부함수에서의 this
var obj1 = {
  outer: function () {
    console.log(this); // (1)
    var innerFunc = function () {
      console.log(this); // (2)
    };
    innerFunc();

    var obj2 = {
      innerMethod: innerFunc,
    };
    obj2.innerMethod(); // (3)
  },
};
obj1.outer();

//예제 3-10 내부함수에서의 this를 우회하는 방법
var obj = {
  outer: function () {
    console.log(this); // (1) { outer : f }
    var innerFunc1 = function () {
      console.log(this); // (2) Window { . . .}
    };
    innerFunc1();

    var self = this;
    var innerFunc2 = function () {
      console.log(self); // (3) { outer : f }
    };
    innerFunc2();
  },
};
obj.outer();

//예제 3-11 this를 바인딩하지 않는 함수(화살표 함수)
var obj = {
  outer: function () {
    console.log(this);
    var innerFunc = () => {
      console.log(this);
    };
    innerFunc();
  },
};
obj.outer();
// >>>> ES6에서 화살표함수에 대한 장점 : 실행 컨텍스트를 생성할 때 this 바인딩 과정 자체가 빠지게 되어, 상위 스코프의 this를 그대로 활용할 수 있다.

//3-1-4 콜백 함수 호출 시 그 함수 내부에서의 this

//예제 3-12 콜백 함수 내부에서의 this
setTimeout(function () {
  console.log(this);
}, 300); // (1)

[1, 2, 3, 4, 5].forEach(function (x) {
  //(2)
  console.log(this, x);
});
document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a').addEventListener('click', function (e) {
  // (3)
  console.log(this, e);
});

// 3-1-5 생성자 함수 내부에서의 this
// 생성자 함수는 어떤 공통된 성질을 지니는 객체들을 생성하는 데 사용하는 함수.
// 객체지향 언어에서는 생성자를 클래스(class), 클래스를 통해 만든 객체를 인스턴스(instance)라고 합니다
//예제 3-13 생성자 함수
var Cat = function (name, age) {
  this.bark = '야옹';
  this.name = name;
  this.age = age;
};

var choco = new Cat('초코', 7);
var nabi = new Cat('나비', 5);
console.log(choco, nabi);

// 명시적으로 this를 바인딩하는 방법
// 3-2-1 call 메서드
// Function.prototype.call(thisArg[, arg1[, arg2[, ...]]])
//예제 3-14 call 메서드(1)

var func = function (a, b, c) {
  console.log(this, a, b, c);
};

func(1, 2, 3); // window{...} 1 2 3
func.call({ x: 1 }, 4, 5, 6); // { x: 1} 4 5 6

//예제 3-15 call 메서드(2)

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};
obj.method(2, 3); // 1 2 3
obj.method.call({ a: 4 }, 5, 6); // 4 5 6

// 3-2-2 apply 메서드
// Function.prototype.apply(thisArg[, argsArray])
//예제 3-16 apply 메서드
var func = function (a, b, c) {
  console.log(this, a, b, c);
};
func.apply({ x: 1 }, [4, 5, 6]); // { x : 1 } 4 5 6

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6
