function func01(){
	document.getElementById('btn1').onclick = function(){
		// 할 일
		// 데이터 읽고
		// 뭔가 검사하고 처리하고
		/*
		var sname= document.getElementById('tname').value;
		var sage= document.getElementById('tage').value;
		var sgen= document.getElementById('tgen').value;
		*/
		
		//방법 1. 대상 페이지로 데이터를 전송한다.
//		location.href = './sample/html?name='+sname+'&age='+sage+'&gen='+sgen;

		//방법 2. 폼태그를 통째로 전송하는 방법
		//2-1 input 태그에 데이터를 입력하고.
		/*
		document.getElementById('name').value = sname;
		document.getElementById('age').value = sage;
		document.getElementById('gen').value = sgen;
		*/
		//2-2 감싸는 form태그를 전송한다.
//		document.getElementById('frm').submit();

		//formid안쓰고 form태그의 name을 가져왔음.
		//input태그 선택도 가능하다. input태그 선택은?
		var sname = document.frm.tname.value;
		//document안쓰고 . . . . . 쓰고있다? name값으로 가져오는거야.
		var sage = document.frm.tage.value;
		var sgen = document.frm.tgen.value;
		
		if(!(sname && sage && document.frm.tgen.value) ){
			alert('제발 좀 입력좀...!');
			return;
		}
		document.frm.submit();
		
	}	
	document.getElementById('btn2').onclick = function(){
		var el = document.querySelectorAll('input[type="text"]')
		
		for(var i = 0 ; i < el.length ; i ++){
			el[i].value = '';
		}
	}	
}