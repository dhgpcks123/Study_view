$(document).ready(function(){
	var pdata = $(location).attr('search');
	pdata = pdata.substr(1);
	var arr = pdata.split('&');

	for( var i = 0 ; i< arr.length; i++){
		arr[i] = arr[i].split('=');
	}
	
//	$('#id').text(arr[0][1]);
//	$('#pw').text(arr[1][1]);
	for( var i = 0 ; arr.length; i++){
		var tkey = arr[i][0];
		var tval = arr[i][1];
		$('#'+tkey).text(tval);
	}
	
});