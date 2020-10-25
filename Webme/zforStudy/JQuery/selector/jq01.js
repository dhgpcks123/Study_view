// JQuery선택자

//1 ) jQuery 제일 먼저 해줘야할 건 뭐다?

$(document).ready(function(){

//2) html1에 있는 모든 요소를 선택해서
//	w3-border를 주세요
	
	$('*').addClass('w3-border');

//3) id= test를 선택해서 font-size를 25pt로 주세요.
	
	$('#test').css('font-size', '25px');

//4) w3-blue 클래스를 선택해서 w3-blue를 모두 제거하세요
	
	$('.w3-blue').removeClass('w3-blue');
	
//5) li요소를 골라서 왼쪽에 뜨는 기호를 없애세요!
	
	$('li').css('list-style', 'none');

//6) parent와 parents의 차이를 설명하세요.
// #parentTest의 parent와 parents를 얘기해주세요!
	
// parent는 상위요소 1개를 선택하고 li
// parents는 상위요소를 전부 선택한다. li, ul, h1

//7) ul 하위태그중 div를 선택하려고 한다.
// w3-amber클래스를 더하세요.
// ul>div와 ul div의 차이를 설명하세요.
	
	$('ul div').addClass('w3-aqua');
//	ul>div는 바로 밑! 자식 태그들 선택해서 그 중에서 고르는거고
//	ul div는 자손까지 쭈욱 선택한 태그들 중에서 고르는거다.
	
// 8) ul밑의 li를 모두 선택한후 eq(1)을 골라
// 폰트 색상을 red로 바꾸세요
	
	$('ul').children().eq(1).css('color','red');
	$('ul>li').eq(1).css('color','red');
// 9) #liTest 이전의 형제요소만 선택하는 선택자를 사용해 파란글씨로,
	//이전의 형제요소 모두를 선택하는 선택자를 사용해서
	//폰트를 굵게 만드세요.
	$('#liTest').prev().css('color','blue');
	$('#liTest').prevAll().css('font-weight','bold');
// 10) 선택한 요소의 다음 형제요소 선택하는 선택자와
	//다음 형제요소 모두 선택하는 선택자는?
	$('#liTest').next();
	$('#liTest').nextAll();
	
// 11)#liTest를 선택해서 형제요소를 모두 선택한 후
//	w3-center로 가운데 정렬해주세요.
	$('#liTest').siblings().addClass('w3-center');
	
});
