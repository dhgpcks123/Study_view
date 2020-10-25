
//1 ] JSON 데이터만드는 형식으로
//name-오혜찬, age-28,gen-M,score-[85, 85, 95]를 만드세요.
var data = {
 name:'오혜찬',
 age:28,
 gen:'M',
 score:[85,95,95]
}

//2] 동일한 데이터를 map형태로 연관배열에
//담아 name을 alert창으로 출력하고, JSON데이터와 차이를 설명하세요.

var data = {
 'name':'오혜찬', 'age':28, 'gen':'M', 'score':[85,95,95]
}
alert(data.name);
//연관배열도 객체야! 그래서 안에 속성값 가져오듯이 가져오면 됨.
//소속을 밝혀줄 때는? . !
//JSON데이터와 차이점은 key값에 ' ' 를 쓰고, 안 쓰고의 차이가 있다.

//3]동일한 데이터로 객체를 만든 후
//JSON데이터와의 차이점을 보여주는 것을 추가해보시오.
var data= {
  name:'오혜찬',
 age:28,
 gen:'M',
 score:[85,95,95],
 work = function(){
 return this.name +'씨가 열공합니다';
 }
}
//JSON데이터와 객체의 차이는 함수를 넣을 수 있냐 없냐이다.
//그냥 객체만들어서 보내주는 거라고 보면 된다. 다만 함수를 넣을 수 없을 뿐이다.

//4] 자바스크립트에서 객체를 만드는 3가지 방법에 대해 기술하시오.

//세 가지가 있다.
//1) var data = new Object();로 만들어서
//2) data.name = '홍길동'; 의 방식으로 하나하나 데이터를 추가해주는 방법.
//만들 때 안에 형성해서 만드는 방법
//var data = {
// name = '홍길동'
//}
//3) 생성자함수 활용
//function func(name){
// this.name=name
//}
//var func01 = new func('홍길동');
//var func02 = new func('홍길동');

//5] javascript에서 function popupTenTime(){
// alert('10초뒤에 이 창이 뜹니다')
// }을 해결하세요.

setTimeout('popupTenTime()', 10000);

//6] javascript에서 function addText(){
// document.write('2초에 한번씩 띄우고, 10초가 지나면 멈추게 하시오.');
//} 을 해결하세요.

var intv=setInterval(addText(), 2000);

function clint(){
  clearInterval(intv);
}
setTimeout(clint, 10000);

//7] 창 띄워서 사용자가 예, 아니오를 선택하면
//true, false를 반환해주는 window객체의 함수는?

confirm

//8] HTML : <span id="sp2">텍스트입니다</span>
//		<div class="w3-blue w3-border">여기는 블럭</div>
//javascript에서,
//span다음에 p태그를 추가하고 background는 green으로 하고 "js에서 추가된 p태그"라는 문구를 넣으세요.

//방법1
var el = document.createElement('p');
el.style.background = 'green';
el.innerHTML = '여기는 p태그';
document.getElementById('ps2').append(el);

//방법2
var el2 = document.createElement('p');
	el2.style.backgroundColor = 'green';
	el2.id ='hi';
	document.getElementById('dv2').append(el2);
	document.getElementById('hi').innerHTML = '여기는 텍스트';
