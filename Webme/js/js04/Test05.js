/*var jiwoo = {
	name: '이지우',
	age: 26,
	score: [85, 85, 95],
	gender: '남자',
	work: function(){
		return this.name+ '씨가 열심히 공부합니다';
	}	
}*/
var jiwoo = new Object();
	jiwoo.name = '이지우';
	jiwoo.age= 26;
	jiwoo.score= [85, 85, 95];
	jiwoo.gender= '남자';
	jiwoo.work= function(){
			return this.name+ '씨가 열심히 공부합니다';
		}
/* Object객체 만들어놓고 집어넣어도 된다. 말랑말랑한 객체 */

var total = 0;
function getTotal(value){
	total += value;
}
jiwoo.score.forEach(getTotal);
/*
document.write('이름 :' + jiwoo.name + '<br>');
document.write('나이 :' + jiwoo['age'] + '<br>');
document.write('성별 :' + jiwoo.gender + '<br>');
document.write('점수 :' + jiwoo.score + '<br>');
document.write('총점 :' + total + '<br>');
*/
jiwoo.total = total;
function func01(){	
	document.getElementById('name').innerHTML = jiwoo.name;
	document.getElementById('age').innerText = jiwoo['age'];
	document.getElementById('gen').textContent = jiwoo.gender;
	document.getElementById('score').innerHTML = jiwoo['score'];
	document.getElementById('total').innerHTML = jiwoo.total;
	document.getElementById('work').innerHTML = jiwoo.work();
}