'use strict';

/*

v8 > Chrome, Opera
엔진 동작 원리 : 1. parsing (엔진이 스크립트를 읽는다)
              2. compile (읽어들인 스크립트를 기계어로 전환합니다.)
              3. 기계어로 전환된 코드가 실행됩니다. 기계어로 전환되었기 때문에 속도가 빠르다.
엔진은 프로세스 각 단계마다 최적화를 진행합니다.

*/

alert("i'm javascript!!");
alert(3 + 1 + 2);

let a = 3;
let b = '이숫자는 몇일까?';

console.log(b + a);

// let && const => 변수와 상수
