//칼라 클래스 변수
var color = [
	'w3-red', 'w3-teal', 'w3-purple', 'w3-deep-purple',
	'w3-indigo', 'w3-blue', 'w3-aqua', 'w3-pink'
];

 document.write('<div class="w3-content w3-padding w3-center" style="max-width: 800px;">');
 document.write('<h1 class="w3-deep-orange w3-padding">구 구 단</h1>');
 document.write('<div class="w3-col">');

for(var k = 0 ; k < 8 ; k ++){

 document.write('<div class="w3-quarter w3-padding">');
 document.write('<div class="w3-col w3-padding '+color[k]+' w3-border txt"><span id="'+ (k+2) + 'dan"></span> 단</div>');
 document.write('<div class="w3-col w3-padding w3-border">');

for(var i = 0 ; i < 9 ; i++){
	document.write('<div class="w3-col" id="'+(k+2)+(i+1)+'gap">'+(k+2)+'</div>');
}
 document.write('</div>');
 document.write('</div>');
}
 document.write('</div>');
 document.write('</div>');

 /*------------------------------------------------------------------------*/
 
 for(var m = 0 ; m < 8 ; m ++){
		document.getElementById((m+2)+'dan').innerText= (m+2);
	for(var n = 0 ; n < 9 ; n ++){
		var msg = document.getElementById((m+2)+''+(n+1)+'gap').innerHTML;
		document.getElementById(''+(m+2)+(n+1)+'gap').innerHTML = msg+ ' x '+ (n+1)+' = '+(m+2)*(n+1);
	//	document.write((m+2)+(n+1)+'gap');
	}
}