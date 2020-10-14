var arr = [
	'teal', 'pink', 'purple', 'deep-purple',
	'indigo', 'blue', 'aqua', 'red'
];

for(var i = 1 ; i< 9 ; i++){
	document.write( '<div class="w3-'+arr[i-1]+' w3-col m3 w3-round-large w3-center" id='+(i+1)+'title>'+(i+1)+'단')
	document.write(	'<div class="w3-col m12 w3-white w3-round-large w3-center" id="'+(i+1)+'dan"></div>')
	document.write(	'</div>')
}