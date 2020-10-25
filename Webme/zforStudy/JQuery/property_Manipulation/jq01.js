$(document).ready(function(){
	
// 1) h1의 style속성을 alert로 출력해보세요.
	
	var sty = $('h1').attr('style');
//	alert(sty);

// 2) h1의 id="oing"를 지워보세요.
//	alert로 확인시켜주세요.
	
	$('h1').removeAttr('id');
//	alert($('h1').attr('id'));

//h1 클릭시 배경 색깔을 파랑으로 바꿔주세요.
//다시 클릭하면 원래 색으로 돌아오게 해주세요.
	$('h1').css('cursor','pointer');	
	
	$('h1').click(function(){
		$('h1').toggleClass('w3-blue');		
	});
	
	alert($('h1').prop('class'));
	
});