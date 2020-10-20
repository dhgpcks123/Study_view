var kdata = [
	'서울', '부산', '대구', '대전', '인천', '광주', '제주', '울산', '세종'	
	/*0			1		2		3		4		5		6		7		8*/
	/*-9		-8		-7		-6		-5		-4		-3		-2		-1*/
]

kdata.sort();
var str1 = kdata.slice(0, 4);
var str2 = kdata.slice(2, -1);
var str3 = kdata.slice(-4, -2);


document.write('전체배열 : ' + kdata + '<br>');
document.write('부분배열1 : ' + str1 + '<br>');
document.write('부분배열2 : ' + str2 + '<br>');
document.write('부분배열3 : ' + str3 + '<br>');

document.write('kdata 배열 :' + kdata+ '<br>');

var str1 = kdata.splice(1, 2);
document.write('삭제데이터 : ' + str1 + '<br>');
document.write('kdata 배열(splice(1, 2)) :' + kdata + '<br>');

//sliec는 원배열 건드리지 않고 반환값만 바껴서 나오는데, 
//splice는 원배열 건드림.

var str2 = kdata.splice(1, 2, '강릉', '수원');
document.write('삭제데이터 : ' + str2 + '<br>');
document.write('kdata 배열 :' + kdata + '<br>');

var str3 = kdata.splice(2, Number.MAX_VALUE);
document.write('삭제데이터 : ' + str3 + '<br>');
document.write('kdata 배열(max_value) :' + kdata + '<br>');

document.write('<hr>');

var kdata = [
	'서울', '부산', '대구', '대전', '인천', '울산', '세종'	
	/*0			1		2		3		4		5		6		7		8*/
	/*-9		-8		-7		-6		-5		-4		-3		-2		-1*/
]

var len = kdata.push('광주', '제주');
document.write('배열 길이 : ' +  len + '<br>');
document.write('배열데이터 : ' + kdata + '<br>');

var str = kdata.pop();
document.write('삭제 데이터 : ' +  str + '<br>');
document.write('배열데이터 : ' + kdata + '<br>');

//pop , push는 맨 마지막에 데이터 쌓고 지우는 함수
document.write('<hr>');
//shift, unshfit 얘는 맨 처음에 데이터 쌓고 지우는 함수

var kdata = ['서울', '부산'];
var len = kdata.unshift('대구', '대전');// unshift 첫번째 인덱스에 데이터 추가하는 함수
document.write('배열데이터(unshift) : ' + kdata + '<br>');

var str = kdata.shift();
document.write('삭제데이터 : ' + str+ '<br>');
document.write('배열데이터(shift) : ' + kdata + '<br>');
