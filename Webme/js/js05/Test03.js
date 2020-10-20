function func01(){
	/*
	document.frm.sel.onchange = function(){
		var data = document.frm.sel.value;
		var idx = document.frm.sel.selectedIndex;
		
		
		alert(data+ ' : ' + idx + '번째 인덱스');
	}
	*/
/*-------------------------------------------------------*/
	document.getElementById('btn').onclick=function(){
		var sno = prompt('1~6 사이의 번호 입력!');
		
		var no = parseInt(sno);
		
		document.frm.sel.selectedIndex = no;
		
	}
//	setInterval('func02()', 1000);//일정시간 기준으로 계속 반복시키는 함수
	setTimeout('func02()', 3000); //3초 뒤에 딱 한번만.
	
}
/*-------------------------------------------------------*/
	function func02(){
		var d1 = new Date();
		var str = d1.getFullYear() + '년 ' +
					(d1.getMonth() + 1) + '월 ' +
					d1.getDate() +'일 ' +
					strDay(d1.getDay()) +'요일 ' +
					d1.getHours() + '시 ' +
					d1.getMinutes() + '분 ' +
					d1.getSeconds() + '초 ' +
					d1.getMilliseconds() + '밀리초';
					
		document.getElementById('ttag').innerText = str;
		setTimeout('func03()', 3000);
	}

/*셀렉트박스에서 인덱스 알아내는 게 셀렉티드 인덱스*/

function func03(){
	location.href = 'sample.html';
}

function strDay(d){
	var str = '';
	switch(d){
		case 0:
			str = '일';
		break;
		case 1:
			str = '월';
		break;
		case 2:
			str = '화';
		break;
		case 3:
			str = '수';
		break;
		case 4:
			str = '목';
		break;
		case 5:
			str = '금';
		break;
		case 6:
			str = '토';
		break;
	}
		return str;		
}