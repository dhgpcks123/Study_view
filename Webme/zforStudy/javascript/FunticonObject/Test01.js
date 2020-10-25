//1] jiwoo라는 객체를 만들고
//	name = '이지우';
//	age= 26;
//	score= [85, 85, 95];
//	gender= '남자';
//	work= function(){
//			return xxx + '씨가 열심히 공부합니다';
//	} 값을 넣으세요. xxx값도 채우세요.
	
	var jiwoo = new Object();
	jiwoo.name = '이지우';
	jiwoo.age = 26;
	jiwoo.score = [85, 85, 95];
	jiwoo.gender = '남자';
	jiwoo.work = function(){
		return this.name + '씨가 열심히 공부합니다';
	}
	
//2] name과 work를 alert로 출력하세요.

	alert(jiwoo.name);
	alert(jiwoo.work());
	
//3] 이름, 나이, 지역을 매개변수로 받는 생성자함수 Stud를 만들고
//	오혜찬 28 seoul/ 민영 28 jeju 데이터를 넣어 new시키세요.
	
function Stud(name, age, area){
	this.name = name;
	this.age = age;
	this.area = area;
}

var chan = new Stud('오혜찬', 28, 'seoul');
var min = new Stud('민영', 28, 'jeju');

//4] 만들어진 오혜찬 객체에 birth를 추가하세요.
	chan.birth = 930214;

//5] 만들어진 민영 객체에서 area를 삭제하세요.
	delete min.area;
	
//6] Stud로 new시켜진 모든 객체에 money속성 0를 추가하세요.

Stud.prototype.money = 0;