var func01 = function(){
	alert('btn1 버튼 클릭!');
}

//document.getElementById('btn1').onclick = func01;
document.getElementById('btn1').onclick = function(){
	alert('btn1 버튼 클릭!');
};

document.getElementById('btn2').onclick = function(){
	var sfile = document.getElementById('file').value;
	alert('선택된 파일 : '+ sfile);
};

var btn3 = document.getElementById('btn3');
btn3.onclick = function(){
	var sid=document.getElementById('id').value;
	alert('입력된 아이디 : ' + sid);
};

// 위 코드를 수정해서 아이디 입력창에 입력된 내용으로 버튼 이름을 변경하세요.
var btn3 = document.getElementById('btn3');
btn3.onclick = function(){
	var sid=document.getElementById('id').value;
	btn3.innerText = sid;
};
