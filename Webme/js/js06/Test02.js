
function func01(){
var el = document.getElementById('dv1');
var node1 = el.childNodes;

/*alert(node1.length);
for(var i = 0 ; i<node1.length; i++){
	alert(node1[i].nodeValue);
}*/

//HTML 속성넣고 그냥 value로 쓰자...
/*
for(var i = 0 ; i<node1.length; i++){
	alert(node1[i].innerHTML);
}
*/

	var el2 = document.createElement('p');
	el2.style.backgroundColor = 'green';
	el2.innerHTML = '여기는 p태그'
	document.getElementById('dv2').append(el2);
	document.getElementById('dv2').append('여기는 테ㄱ스트3');
/*
	document.getElementById('dv2').innerHTML = el2;
	document.getElementById('dv2').innerHTML = '여기는 테ㄱ스트3';
*/
// HTML은 날리고 새로넣고 append는 추가해서 넣고.

}

//재귀함수
/*function abc(){
	return abc();
}*/

//callback함수 매개변수로 함수 넣어주는 경우
//onclick, foreach, map

/*
	정규표현식 ---> 네이버폼 적용
	
		전방탐색
			?=	---> 긍정 전방탐색
			?!	---> 부정 전방탐색
			
		후방탐색
			?<=	---> 긍정 후방탐색
			?<!	---> 부정 후방탐색
*/



