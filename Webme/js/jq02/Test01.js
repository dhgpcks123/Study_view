$(document).ready(function(){
	$('#btn').click(function(){
		// 할 일
		// 데이터를 읽는다.
		var sid = $('#id').val();
		
		// 읽은 데이터를 서버에 전송해서 확인요청한다.
		/*
			JQuery에서는 비동기 통신을 할 수 있는
			함수를 제공해주고 있다.
			
				ajax()
			이 함수는 JQuery 객체에 소속되어 있다.
			따라서 $.ajax({}); 의 형태로 사용해야 한다.
			*{}  < javascript객체 얘기하는거임
			
			객체에 포함되어있는 속성이 있는데
				url		 : 요청 주소
				type	 : 전송 방식(get || post)
				dataType : 주고 받을 데이터의 형식을 지정. 예 ] html, text, xml, json
				data	 : 전달할 데이터를 json 형식으로 입력하는 속성
				success	 : 통신에 성공했을 경우 실행 될 함수
				error	 : 통신에 실패할 경우 실행 될 함수
		*/
		$.ajax({
			url: 'http://localhost:8080/idCheck.ck',
			type: 'post',
			dataType : 'json',
			data: {
				'id': sid
			},
			success: function(obj){
				//success()의 매개변수는 서버가 응답해주는 내용을 기억하는 변수
				/*
				 	결과적으로
				 		var obj = {
				 			'result': 'YES' || 'result': 'NO'
				 		}
				 */
//				alert('*** 통신 성공 ***');
				$('#fr').removeClass('w3-hide');
				$('#msg').removeClass('w3-text-green w3-text-red');
//				if(obj == 'YES'){
				if(obj.result == 'YES'){
					$('#msg').addClass('w3-text-green');
					$('#msg').text('*** 사용가능한 아이디 입니다 ***');
				}else{
					$('#msg').addClass('w3-text-red');
					$('#msg').text('*** 이미 있는 아이디 입니다 ***');
				}
			},
			error: function(){
				alert('### 통신 실패 ###');
			}
		});
	});

	/*
	 	npm install express
	 	npm install http
	 	npm install url
	 */
	
	
});