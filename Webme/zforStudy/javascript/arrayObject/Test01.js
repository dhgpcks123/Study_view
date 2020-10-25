
//0. 자바스크립트에서 배열은 () 를 사용한다

var data ='[x]대괄호를 사용한다.';


//1. 배열 data에 1000, 'hong' , '홍길동'을 담아 선언하세요.
var data = [1000, 'hong', '홍길동']

//2. 배열 안에 인덱스를 가진 애들을 ---- 혹은 --라고 부른다.

엘리먼트, 요소

//3. 자바스크립트의  배열안에 데이터형태 자유롭게 쓸 수 있다. 함수도 넣을 수 있음.

//4. var fruits = ['apple', 'banna', 'orange']; 배열을 문자열로 다 연결해서 만드세요. (함수사용), 사이에 '-'넣어서 데이터를 만들기도 하세요.

var result = fruits.join(); 
var result2 = frutis.join('-');

//5.  반대로 result2를 배열 var fru에 담아보세요.
//또한 orange를 제외하고 두 개만 배열 fru에 담아보세요
result2.split('-');
result2.split('-', 2)

//6. 배열을 정렬하는 함수? 내림차순으로 만드는 함수?

.sort() .reverse()

//7. 배열 마지막에 값을 추가하는 함수? 빼는 함수?

push()
pop()

//8. 배열 마지막번째 alert하시오.
alert(array[array.length-1]);

//9. 배열 제일 앞에 값을 추가하는 함수? 빼는 함수?
shift(), unshift()

< 보기 >
class Student{
  constructor(name, age, enrolled, score){
   this.name = name;
   this.age = age;
   this.enrolled = enrolled;
   this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88)
];

//10. 학생이 90점인 학생(알파벳 alert출력)을 찾으세요.
const result = students.find(function(student){
  return student.score === 90;
});
alert(result.name);

//10-1 인덱스 찾는 함수는?
findIndex(val, index)

//11. true, false가 등록했냐 안했냐거든? 등록한 학생들만 빼서 배열로 만들어줘.

var result = students.filter(function(value){
	return value.enrolled === true;
});

var str= '';
for(var i = 0 ; i<result.length ; i++){
	str += result[i].name;
}

//10. 학생 점수만 뽑아서 *2해서 새로운 배열만드세요.
var result = students.map(function(student){
 return student.score *2;
});
//콜백함수는 최대한 이해하기 쉽게 써주세요~!

//11. 점수가 50점 이상인 결과값을 문자열로 출력하세요.
//-> result should be : '80, 90, 66, 88'
var result = student.map(function(student){
	return student.score.filter(function(score){
								return score >= 50
								}).join(', ')
});

//12.forEach

//13.prototype