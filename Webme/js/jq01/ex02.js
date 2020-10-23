$(document).ready(function(){
	//방법 1. form태그를 사용해서 데이터 넘겨줬음.
	$('#login').click(function(){
/*
		$('body').prepend('<form method="GET" action="../jq01/sample02.html" id="frm"></form>');
		$('#frm').append('<input type="hidden" id="fid" name="id">');
		$('#frm').append('<input type="hidden" id="fpw" name="pw">');
		
		var id = $('#id').val();
		var pw = $('#pw').val();
		$('#fid').val(id);
		$('#fpw').val(pw);
		$('#frm').submit();
*/
	//방법 2. location 객체를 사용해서 넘겨주자.
		var id = 'id='+$('#id').val();
		var pw = 'pw='+$('#pw').val();
	$(location).attr('href','../jq01/sample02.html?'+id+'&'+pw);
	});
});