$(document).ready(function(){
	$('#btn1').click(function(){
		$('input').val('');
	})
	$('#btn2').click(function(){
		var tid = $('#id').val();
		alert(tid);
		var tpw = $('#pw').val();
		alert(tpw);
		
		if(!(tid && tpw)){
			return;
		}
		$('#frm').submit();
	})
})