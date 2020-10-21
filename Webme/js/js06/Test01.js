var data = {
	name:'이지우',
	age: 26,
	gen: 'M',
	score: [85, 85, 95]
};
//연관배열과의 차이 : 키값에 ''를 안 쓴다.
//객체와의 차이 : 함수를 안 쓴다. 데이터 보내기 위한 거니까.

//alert(data.name);

/*
	학습방법]
		
		자바스크립트의 연관배열 만드는 형식과
		자바스크립트의 객체 만드는 형식
		json 데이터 만드는 형식
		구분해서 기억해두면 된다.
		{}안에 들어간다. 객체다.
*/

//setTimeout(function(){
//	alert('나 실행됩니다');
//}, 5000);

/*
function func01(){
	alert('테스트입니다');
}

setTimeout(func01,5000);
window.setTimeout('func01()',5000);



*/ 
var intv = window.setInterval(function(){
	document.write('<h1>여기는 h1태그</h1>');
}, 1000)

function clint(){
	clearInterval(intv);
}

setTimeout(clint, 5000);


/* window.open함수
window.open('url경로', '창이름', '옵션');
window.open('../js05/sample.html?name=이지우&age=26&gen=남자&mail=jiwoo@increpas.com','이지우님 정보',
			'location= no, fullscreen=yes');
*/


/* window.confirm함수

var sname = window.prompt('이름입력!');
alert('이름 : '+ sname);

var conf = confirm('이름은 ' + sname+ '맞습니까?');

document.write('<h1>'+sname+ ' : '+conf+'</h1>');

*/


/*
var win1 = open('../js05/sample.html','win1','location: no');

function resizeWin(){
	alert('창 사이즈 수정');
	win1.resizeTo(500, 500);
	setTimeout(function(){
		alert('창 이동');
		win2.moveTo(500, 500);		
	}, 2000);
}
setTimeout(resizeWin, 2000);
*/
//internet Exploer만 지원됨. 크롬, 웨일은 지원안함.. 사양된 기능인가봄.

/*
	history는 방문한 사이트 관련한 객체
	history.back 한 페이지 뒤로
	history.... 한 페이지로 앞으로
*/




