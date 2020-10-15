//리셋버튼
document.getElementById('reset').onclick = function(){
	document.getElementById('id').value = 'ID를 입력하세요';
	document.getElementById('pw').value = 'password';
	document.getElementById('name').value = '이름을 입력하세요';
	
	document.getElementById('readid').innerText='';
	document.getElementById('readpw').innerText='';
	document.getElementById('readname').innerText='';
	
	document.getElementById('show').classList.add('w3-hide');
}


//내용읽기
document.getElementById('read').onclick = function(){
	var id = document.getElementById('id').value;
	var pw = document.getElementById('pw').value;
	var name = document.getElementById('name').value;
	
	document.getElementById('readid').innerText = id;
	document.getElementById('readpw').innerText = pw;
	document.getElementById('readname').innerText = name;
	
	document.getElementById('show').classList.remove('w3-hide');
}

document.getElementById('test').onkeyup = function(){
	var el = this;
//	함수를 호출한 녀석을 가리키는 게 this임. 여기서는 id가 test인 input태그겠지?
	var txt = document.getElementById('test').value;
	alert('입력내용 : ' + el.value);
	
}

var list = document.getElementsByClassName('btn');

for(var i = 0; i <list.length ; i++){
	list[i].onclick = function(){
		var txt = this.innerText;
//		alert(txt);
		var tid = this.getAttribute('id');
		alert(tid);
	}
}