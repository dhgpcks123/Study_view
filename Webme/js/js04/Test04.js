var kdata = ['서울', '대구', '대전', '부산'];
/*
function printArr(item, index){
	document.write('배열데이터 [' + index + '] : ' + item + '<br>');
}
function printArr(index, item){
	document.write('배열데이터 [' + index + '] : ' + item + '<br>');
}
*/
function printArr(item, index){
	document.write('배열데이터 [' + item + '] : ' + index + '<br>');
}
//매개변수 앞에는 데이터, 뒤에는 index로 넣어야한다.

function printArr2(value){	 //매개변수 하나만입력하는 경우
	document.write('배열데이터 : ' + value + '<br>');
}

printArr('서울', 0);
printArr2('서울');

//For Each
document.write('<hr>');

kdata.forEach(printArr);
/*-------------------------------------------------------------------------------
	kdata 배열의 데이터를 /를 구분자로 문자열로 연결해서 출력하는데...
	forEach()를 사용해서 문자열을 하나씩 결합해서 처리하세요.
*/
var kdata = ['서울', '대구', '대전', '부산'];

document.write('<hr>');
var sdata ='';

function calcStr(item, index){
	if(index == 0){
		sdata += item;
	}else {
		sdata += '/' + item;
	}
}

kdata.forEach(calcStr);

document.write(sdata);

document.write('<hr>');
var data = [1,2,3,4,5,6,7,8,9,10];

function mapArr(value){
	return value * value;
}

var mapdata = data.map(mapArr);
//map : 배열 객체 안에 있는 함수인가봐

document.write('원래 배열 : ' + data + '<br>');
document.write('map 함수 적용 배열 : ' + mapdata + '<br>'); 

document.write('<hr>');
document.write('<hr>');
/* filter() : 배열의 데이터 중 조건이 참인 데이터만 반환하여 새로운 배열을 만들어준다.  */
var data = [21, 42, 33, 14, 25, 12, 37, 28, 16, 11];

function filterArr(value){
	return value >= 20;
}

var fildata = data.filter(filterArr);

document.write('원래 배열[] : ' + data + '<br>');
document.write('map 함수 적용 배열[] : ' + fildata + '<br>'); 

var testData = data.filter(function(value){
	return value > 30;
})
document.write('원래 배열[] : ' + data + '<br>');
document.write('내부함수??로 쓴 배열: ' + testData + '<br>'); 

document.write('<hr>');
document.write('<hr>');

var data = [1, 1, 1, 1, 1];
var idx = data.indexOf(1);
document.write('data.indexOf(1) : '+ idx + '<br>');
var idx2 = data.indexOf(1, 1);
document.write('data.indexOf(1, 1) 반환값 : '+ idx2 + '<br>');
var idx3 = data.indexOf(1, 3);
document.write('data.indexOf(1, 3) 반환값 : '+ idx3 + '<br>');
//뒤에 숫자는 찾을 시작 위치임~!

var idxlast = data.lastIndexOf(1);
document.write('data.lastIndexOf(1) : '+ idxlast + '<br>');

idxlast = data.lastIndexOf(1, -2);
document.write('data.lastIndexOf(1, -2) : '+ idxlast + '<br>');

document.write('<hr>')
/* # ### 연관 배열 ### # */
var smap = {'일번':'윤요셉', '이번':'유병욱' , '삼번':'오혜찬', '사번':'이지우','오번':'장성환'};

document.write('일번 : ' + smap['일번']+'<br>');
document.write('이번 : ' + smap.이번+'<br>');
document.write('사번 : ' + smap['사번']+'<br>');

var mArr= {'score':[85, 99, 95],'no':1000,'name':'jiwoo'};

document.write('번호 : ' + mArr['no'] + '<br>');
document.write('이름 : ' + mArr.name + '<br>');
document.write('성적 : ' + mArr.score + '<br>');

var total = 0;

function getTotal(score){
	total += score;
}

mArr.score.forEach(getTotal);

document.write('총점 : ' + total + '<br>');



