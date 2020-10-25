$(document).ready(function(){
	$('form').css('display', 'flex');
	$('form').css('flex-direction', 'column');

//form에 첫번째 요소만 골라서(함수로) blue색 줘
	$('#frm').children().first().css('background-color','blue');

//form에 마지막 요소만 골라서(함수로) border효과줘
	
	$('#frm').children().last().css('border','1px dashed black');
	
//form효과 짝수번째 orange 홀수번째 yellow줘
	$('#frm').children().even().css('background-color','orange');
	$('#frm').children().odd().css('background-color','yellow');

//form중 3번째 선택해서 배경색상 green주시오.
	$('#frm').children().eq(2).css('background-color','green');
	
//input중 range타입인 녀석 골라서 border 20px주세요.
	$('input[type="range"]').css('border','20px solid black')
});