$(document).ready(function (){
	
	$('#drop1').click(function(){
		$('#drop2').toggle();
		$('#drop4').hide();
	});

	$('#drop3').click(function(){
		$('#drop4').toggle();
		$('#drop2').hide();
	});

	$('#location').click(function(){
		$('#box_location').toggle();
		$('#box_filter').hide();
	});

	$('#filter').click(function(){
		$('#box_filter').toggle();
		$('#box_location').hide();
	});

	$('#L').click(function() {
		$('.language').toggle();
		$('.language').siblings().hide();
	});

	$('#N').click(function() {
		$('.nationality').toggle();
		$('.nationality').siblings().hide();
	});

	$('#pointer2').click(function() {
		$(".modal").modal('hide');
	});

	$(window).load(function() {
      $("[data-toggle='modal']").trigger('click');

	});


$("[data-toggle='modal']").modal('click');
});

// JS is only used to add the <div>s
var switches = document.querySelectorAll('input[type="checkbox"].ios-switch');

for (var i=0, sw; sw = switches[i++]; ) {
	var div = document.createElement('div');
	div.className = 'switch';
	sw.parentNode.insertBefore(div, sw.nextSibling);
}





function initialize() {

var options = {
types: ['(regions)'],
};

var input = document.getElementById('searchTextField');
var autocomplete = new google.maps.places.Autocomplete(input, options);


}

google.maps.event.addDomListener(window, 'load', initialize);
