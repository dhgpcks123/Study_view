

for(var i = 1 ; i<9 ; i++){
	for(var j = 0 ; j < 9 ; j ++){
		document.getElementById((i+1)+'dan').innerHTML += (i+1)+'x'+(j+1)+'='+(j+1)*(i+1)+'<br>';
	}
}