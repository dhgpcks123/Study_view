var name = prompt('이름을 입력하세요!');

//alert('이름 : ' + name);

/*
	문제 ]
		본문에 h1태그를 만들어서
		
			이름 : ***
		의 형식으로 문서의 내용이 출력되게 하세요.
		문자의 정렬은 가운데 정렬을 사용하기로 한다.
		w3.css를 사용해서 처리하세요.
*/

document.write('<h1 class=" w3-content w3-center w3-amber w3-padding w3-card-4 w3-round-large"'
				+ 'style="max-width:500px; font-size: 16pt;"> 이름 : '
				+ name
				+ '</h1>');
//	+대신에 document.write로 써도 됨. 그냥 body에다가 내용 써내려가는거야.

console.log(name);