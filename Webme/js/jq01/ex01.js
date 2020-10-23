/*
	무명함수 호출하면서 바로 실행하는 방법
	(
		function(){
		var sdata - location.search.sub+string(1);
		}
	)();
*/


var data = [
	{
		name: '이지우',
		age: 26,
		tel: '010-1111-2222',
		mail: 'jiwon@increpas.com',
		gen: '남자'
	},
	{
		name: '장성환',
		age: 27,
		tel: '010-2222-2222',
		mail: 'hwan@increpas.com',
		gen: '남자'
	},
	{
		name: '오혜찬',
		age: 28,
		tel: '010-3333-3333',
		mail: 'dhgpcks123@naver.com',
		gen: '남자'
	},
	{
		name: '유병욱',
		age: 29,
		tel: '010-4444-4444',
		mail: 'wook@increpas.com',
		gen: '남자'
	},
	{
		name: '윤요셉',
		age: 30,
		tel: '010-5555-5555',
		mail: 'joseph@increpas.com',
		gen: '남자'
	}
]

$(document).ready(function(){

	var eList = $('.txt16')/*얘는 클래스로 뽑아와서 변수에 담으면 배열이다!*/
	/*배열은 뭘로 빼낸다? for문, 하지만 또 배열은 아니어서 length없음.*/

	for(var i = 0 ; i < 5; i++){
		eList.eq(i).children().eq(0).html(data[i].name);
		eList.eq(i).children().eq(1).html(data[i].age);
		eList.eq(i).children().eq(2).html(data[i].tel);
		eList.eq(i).children().eq(3).html(data[i].mail);
		eList.eq(i).children().eq(4).html(data[i].gen);
	}
	//------------------------------------데이터셋팅이 끝난거야---------
	
	//버튼(마지막 div 태그) 클릭하면 전송되도록하자.
	$('.w3-btn').click(function(){
		
		//데이터 읽고
		var pa = $(this).parent();
		var sname = $(pa).children().eq(0).text();
		var sage = $(pa).children().eq(1).text();
		var stel = $(pa).children().eq(2).text();
		var smail = $(pa).children().eq(3).text();
		var sgen = $(pa).children().eq(4).text();
		//데이터 채우고
		$('#name').val(sname);
		$('#age').val(sage);
		$('#tel').val(stel);
		$('#mail').val(smail);
		$('#gen').val(sgen);
		
		
		//폼 전송하고
		$('#frm').submit();
	});
});


$(document).ready(function(){
	var list = $('.txt16');
	
//			for(var i = 0 ; i<5 ;i ++){
//			
//				list.eq(j).children().eq(i).addClass('w3-teal');
//			}
//			}


//********** 방법1 **********
/*		var i;
		$('#colorChange').children().eq(0).click(function(){
			i = 0;
			func(i);
		});
		$('#colorChange').children().eq(1).click(function(){
			i = 1;
			func(i);
		});
		$('#colorChange').children().eq(2).click(function(){
			i = 2;
			func(i);
		});
		$('#colorChange').children().eq(3).click(function(){
			i = 3;
			func(i);
		});
		$('#colorChange').children().eq(4).click(function(){
			i = 4;
			func(i);
		});
		
		function func(i) {
			list.eq(0).children().eq(i).addClass('w3-teal');
			list.eq(1).children().eq(i).addClass('w3-teal');
			list.eq(2).children().eq(i).addClass('w3-teal');
			list.eq(3).children().eq(i).addClass('w3-teal');			
			list.eq(4).children().eq(i).addClass('w3-teal');			
		};
		
*/

//********** 방법2 **********
/*
	let arr = [];
		for(var i= 0 ; i< 5 ; i++){
			arr.push(
					function(){
					for(var j= 0 ; j< 5 ; j++){
					list.eq(j).children().eq(i).addClass('w3-teal');
					}
				}
			)
		};
		for(var i= 0 ; i< 5 ; i++){
			$('#colorChange').children().eq(i).click(arr[i]);
		};
*/
		
	
//			list.eq(j).children().eq(i).addClass('w3-teal');
//			list.eq(j).children().eq(i).addClass('w3-teal');
//			list.eq(j).children().eq(i).addClass('w3-teal');
//			list.eq(j).children().eq(i).addClass('w3-teal');

//----------------------------------------------------------------------

//********** 방법3 선생님 풀이 let 사용 **********
/*
		for(var i = 0 ; i < 5 ; i++ ){
			//--------------------------------------------------------
				$('#colorChange').children().eq(i).click(function(){
					for(var j = 0 ; j < 5; j++){
						list.eq(j).children().eq(i).addClass('w3-teal');
					}
				});
			//---------------------------------------------------------
			//클릭이벤트는 클릭해야 이벤트가 발생한다. 그 전에 for문 5번 다 돌았어.
			//그래서  i=>4인 마지막 버튼이 다 색칠되는 경우이다.
			//이미 i는 들어가 있긴하지만...값도 채워졌을 수도 있지만, 클릭하는 순간!
			//클릭문 안에 i 값은 마지막4 값이 채워져서 작동하는거야.
		}
		
*/		
		/*
		(j,i)
		(0,0)(0,1)(0,2)(0,3)(0,4) 
		(1,0)(1,1)(1,2)(1,3)(1,4)
		(2,0)(2,1)(2,2)(2,3)(2,4)
		(3,0)(3,1)(3,2)(3,3)(3,4)
		(4,0)(4,1)(4,2)(4,3)(4,4)
		*/
		
		
		for(let i = 0 ; i < 5 ; i++ ){
			$('#colorChange').children().eq(i).click(function(){
				for(var j = 0 ; j < 5; j++){
					let col = list.eq(j).children().eq(i).css('background-color')
					if(col == 'rgb(0, 255, 255)'){
						list.eq(j).children().eq(i).css('background-color', '');
					}else{						
						list.eq(j).children().eq(i).css('background-color','aqua');
					}
				}
			});
		}
		
			


//		$('#colorChange').children().eq(0).click(function(){
//			list.eq(0).children().eq(0).addClass('w3-teal');
//			list.eq(1).children().eq(0).addClass('w3-teal');
//			list.eq(2).children().eq(0).addClass('w3-teal');
//			list.eq(3).children().eq(0).addClass('w3-teal');
//			list.eq(4).children().eq(0).addClass('w3-teal');
//		});
//		$('#colorChange').children().eq(1).click(function(){
//			list.eq(0).children().eq(1).addClass('w3-teal');
//			list.eq(1).children().eq(1).addClass('w3-teal');
//			list.eq(2).children().eq(1).addClass('w3-teal');
//			list.eq(3).children().eq(1).addClass('w3-teal');
//			list.eq(4).children().eq(1).addClass('w3-teal');
//		});
//		$('#colorChange').children().eq(2).click(function(){
//			list.eq(0).children().eq(2).addClass('w3-teal');
//			list.eq(1).children().eq(2).addClass('w3-teal');
//			list.eq(2).children().eq(2).addClass('w3-teal');
//			list.eq(3).children().eq(2).addClass('w3-teal');
//			list.eq(4).children().eq(2).addClass('w3-teal');
//		});
//		$('#colorChange').children().eq(3).click(function(){
//			list.eq(0).children().eq(3).addClass('w3-teal');
//			list.eq(1).children().eq(3).addClass('w3-teal');
//			list.eq(2).children().eq(3).addClass('w3-teal');
//			list.eq(3).children().eq(3).addClass('w3-teal');
//			list.eq(4).children().eq(3).addClass('w3-teal');
//		});
		
		$('.contentChange').eq(0).click(function(){
			list.eq(0).children().eq(0).addClass('w3-amber');
			list.eq(0).children().eq(0).css('border','1px black solid');
		});
		
		$('.contentChange').eq(1).click(function(){
			list.eq(2).children().eq(3).html('gpcks@increpas.com');
			list.eq(2).children().eq(3).css('border','1px black solid');
		});
		
		$('.contentChange').eq(2).click(function(){
			list.eq(4).children().eq(4).css('background-color','red');
			list.eq(4).children().eq(4).css('border','1px black solid');
		});
		$('.contentChange').eq(3).click(function(){
			list.eq(3).children().eq(0).text('병욱');
			list.eq(3).children().eq(0).css('border','1px black solid');
		});
		$('.contentChange').eq(4).click(function(){
			list.eq(4).children().eq(1).text('15');
			list.eq(4).children().eq(1).css('border','1px black solid');
		});
		
		/*
		$('.btn1').click(function(){
			var sno = $(this).html();
			var stag = 'col' + sno;
			
			$('.' +stag).addClass('w3-deep-orange');
		});
		*/
});