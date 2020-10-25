
//0] html 내용중 body 부분의 내용이 모두 읽어지면
//	이벤트(function abc())가 발생하도록 하는 방법은? 

//	<body onload="abc()">; 

//1] 배열(arr)을 선언하고 1~100까지 채운 후 홀수번째 데이터는
//	0으로 채우세요.
	
	var arr = new Array();
	for(var i = 0 ; i < 100; i ++){
		arr[i] = i+1;
	}
	
	for(var i = 0 ; i <100 ; i++){
		if(i%2 != 0){
			continue;
		}
		arr[i] = 0;
	}

//2] 문자 배열 var stud = ['지유', '선환', '혜찬'];이 있다.
//	사이에 '/' 문자를 넣어 출력하세요.
//	> 이 때 stud는 변경되나요?
	
	var stud = ['지유', '선환', '혜찬'];
	str = stud.join('/');
	document.write(str);
//	>변경되지 않는다.
	
	
//3] 문자배열 stud에 var addstud = ['요셉', '욱']를 더해 출력하세요.
//	> 이 때 stud는 변경되나요?
	document.write(stud.concat(addstud));
//	변경된다
	
	
//4] stud에 addstud를 더한 배열을 출력하는데 이름 사이에 -를 넣으세요

	document.write(stud.concat(addstud).join('-'));
	
	
//5] stud 배열을 정렬하세요.
//	> 이 때 stud는 변경되나요?
	
	stud.sort();
//	변경된다
	
	
//6] 정렬한 배열을 역순으로 만드시오.

	stud.reverse();
	
//7]	var kdata = ['서울', '부산', '대구', '대전', '인천', '광주']
//		에서 부산, 대구, 대전을 날리고 출력하세요.
//		2가지 함수를 사용하고, 두 함수의 차이점을 기술하세요.
	
	document.write(kdata.slice(1, 4));
	document.write(kdata.splice(1, 4));
//	slice는 원배열을 건드리지 않음. splice는 산산조각냄.
//  원배열 건드림

//8] 7번 배열을 부산부터 끝까지 날리시오
	kdata.splice(1, Number.MAX_VALUE);
	
//9] 배열 마지막에 데이터를 쌓는 함수, 지우는 함수.
//	배열 첫 인덱스에 데이터 쌓는 함수, 지우는 함수는?
	
	쌓기push, 지우기pop
	쌓기shift, 지우기unshift
	
//  10] var kdata = ['서울', '대구', '대전', '부산'];
//	kdata 배열의 데이터를 /를 구분자로 문자열로 연결해서 출력하는데...
//	forEach()를 사용해서 문자열을 하나씩 결합해서 처리하세요.
	
	var sdata = '';
	kdata.forEach(function(data, index){
		if(index == 0){
			sdata += item;
		}else{
			sdata += '/' + item;
		}
	});
	
//11] var data=[1,2,3,4,5,6,7,8,9,10]; 의 데이터를 value*value하시오.
//	배열함수 써서 출력하세요.
	
	var mapdata = data.map(function(value){
		return value * value;
	});
	document.write(mapdata);
	
//12] mapdata에서 조건이 참인 데이터만 반환하여 새로운 배열을 만드시오.
//	조건은 20보다 큰 숫자
	
	var fildata = mapdata.filter(function(value){
		value>20;
	});
	
//13] 배열에서 특정값의 index를 찾아주는 함수는?
	
	배열.indexOf(특정값)
//14] 뒤에서부터 특정값의 index를 찾아주는 함수는?

	배열.lastindexOf(특정값)
	
//15] 연관배열로 성:오 이름:혜찬 점수[90, 99, 95],
//	총점을 넣어 만들고 출력하세요.
//	>연관배열은 java의 ---과 같다.

	var smap = {'성':'오', '이름':'혜찬', '점수':[90,99,95]};  
	document.write(smap.성);
	document.write(smap.이름);
	document.write(smap.점수);
	
	var total=0;
	
	smap.점수.forEach(function(score){
		totla += score;
	});
	
	document.write(total);
//	>map
	
