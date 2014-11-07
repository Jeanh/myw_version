$(document).ready(function (){
	
	$('#drop1').click(function(){
		$('#drop2').toggle();
	});

	$('#drop3').click(function(){
		$('#drop4').toggle();
	});

	$('#filter').click(function(){
		$('#box_filter').toggle();
	});

	$(window).load(function() {
      $("[data-toggle='modal']").trigger('click');
	});


$("[data-toggle='modal']").modal('click');
});






function initialize() {

var input = document.getElementById('searchTextField');
var autocomplete = new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', initialize);
