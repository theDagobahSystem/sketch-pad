$(document).ready(function () {

	//create a div for the sketch-pad.png image 
	$('<div />', { 
		'id': 'sketchPad',
	}).prependTo('body');

	//create a div for .navi
	$('<div class="navi"><h1>Sketch Pad</h1></div>').prependTo('body');

	//create a div for #grid and append to #sketchPad
	$('<div />', { 
		'id': 'grid',
	}).appendTo('#sketchPad');
	

	//for loop that will create a total of 256 
	//.box divs and apppend to the #grid div 
	for (var i = 0; i <= 255; i++) {
    $('<div />', {
        'class' : 'box',
        'id'    : 'b' + i
    }).appendTo('#grid');
	}

	// adds .color on mouseenter
	$('.box').mouseenter(function () {
		$(this).addClass('color');
	});	
});