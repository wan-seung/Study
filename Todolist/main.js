'use strict';

// 각 목록에 close 버튼 만들기
var myNodelist = document.getElementsByTagName('LI');
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// close 버튼을 클릭 했을시 list 사라지기
var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = 'none';
  };
}

// list를 클릭 했을때, 체크되게 하기
var list = document.querySelector('ul');
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },
  false
);

// add 버튼 눌렀을때 목록에 새롭게 생기게하기
function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('myInput').value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('당신이 할 내용을 적어주세요');
  } else {
    document.getElementById('myUL').appendChild(li);
  }
  document.getElementById('myInput').value = '';

  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = 'none';
    };
  }
}
