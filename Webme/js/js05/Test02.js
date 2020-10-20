function func01(){
	//할일
	//데이터를 읽는다.
		var sname = document.getElementById('tname').innerText;
		var sage = document.getElementById('tage').innerText;
		var stel = document.getElementById('ttel').innerText;
		var smail = document.getElementById('tmail').innerText;
		var sgen = document.getElementById('tgen').value;
		
	document.getElementById('btn1').onclick = function(){
	//방법1 : location.href방법
	location.href = 'sample.html?name='+sname+'&age='+sage+'&tel='+stel+'&mail='+smail+'&gen='+sgen;
	//방법2 : 폼태그를 통째로 전송하는 방법
	}
	
	document.getElementById('btn2').onclick = function(){
		// 읽은 데이터 입력태그에 채워주고
//		document.frm.name.value = sname;
		document.getElementById('name').value = sname;
		document.getElementById('age').value = sage;
		document.getElementById('tel').value = stel;
		document.getElementById('mail').value = smail;
		document.getElementById('gen').value = sgen;
		
		//입력태그의 내용이 모두 채워지면 폼을 전송한다.
		document.getElementById('frm').submit();	
		alert(location.href);
		//url. 아무튼 넘어온 데이터 객체로 저장되는데 location객체에 있다.
	}
}