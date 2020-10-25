$(document).ready(function(){
	
	$('#listForm').children().first().click(function(){
		$('#idForm').removeClass('w3-hide');
	});
	$('#listForm').children().last().click(function(){
		$('#idForm').addClass('w3-hide');
		$('#contentForm').addClass('w3-hide');
	});
	
	$('#idForm').children().eq(0).children().click(function(){
		$('#contentForm').removeClass('w3-hide');
		
		var sname = $(this).text();
		$.ajax({
			url: 'http://localhost:8080/member.info',
			type: 'post',
			dataType: 'json',
			data: {
				name:sname
			},
			success: function(obj){
				if(obj.result =='YES'){
					$('#sname').text(obj.name);
					$('#sage').text(obj.age);
					$('#stel').text(obj.tel);
					$('#sgen').text(obj.gen);
					$('#contentForm').removeClass();					
					$('#contentForm').addClass(obj.color);
				}else{
				}
			},
			error: function(){
				alert('###통신 에러###')
			}
		})
		
	});
});


