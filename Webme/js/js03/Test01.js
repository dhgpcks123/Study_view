/*document.getElementById('teal').onclick = function(){
	var col = this.getAttribute('value');
	
	var tmp = document.getElementById('colorpanel').classList;
	
}*/

var color = [
	'w3-red', 'w3-teal', 'w3-purple', 'w3-green',
	'w3-indigo', 'w3-blue', 'w3-aqua', 'w3-pink'
];

var img = [
	'루피.jpg', '로디.jpg', '뽀로로.jpg', '에디.jpg', '크롱.jpg',
	'패티.jpg', '포비.jpg', '해리.jpg'
]

var list = document.getElementsByClassName('btn');

function removeCls(){
	for(var i = 0 ; i < color.length ; i++ ){	
		document.getElementById('colorpanel').classList.remove(color[i]);	
	}
		document.getElementById('inimg').innerHTML='';	
}



for(var i = 0; i<list.length; i++){
		
	list[i].onclick= function(){
		removeCls();	
		var colortxt = 'w3-' + this.getAttribute('value');
		document.getElementById('colorpick').innerHTML = colortxt;
		document.getElementById('colorpanel').classList.add(colortxt);
		
		var imgsrc='<img src="../img/8인의아이돌/';
		switch(colortxt){
			case 'w3-red':
				imgsrc += '루피.jpg';
				break;
			case 'w3-teal' :
				imgsrc += '로디.jpg';
				break;
			case 'w3-purple':
				imgsrc += '뽀로로.jpg';
				break;
			case 'w3-green' :
				imgsrc += '에디.jpg';	
				break;
			case 'w3-indigo':
				imgsrc += '크롱.jpg';
				break;
			case 'w3-blue' :
				imgsrc += '패티.jpg';	
				break;
			case 'w3-aqua' :
				imgsrc += '포비.jpg';	
				break;
			case 'w3-pink' :
				imgsrc += '해리.jpg';	
				break;
		}
		
		imgsrc += '" style="width: 100xp; height: 100px;"></img>';
		document.getElementById('inimg').innerHTML += imgsrc;
	};
}


