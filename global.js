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

	//inside box filter

	$("#drop5").click(function(){
		$("#drop5bis").toggle();
	});

	$("#drop6").click(function(){
		$("#drop6bis").toggle();
	});

	$("#drop7").click(function(){
		$("#drop7bis").toggle();
	});

	//share
	$("#drop8").click(function(){
		$("#drop8bis").toggle();
	});
	//support
	$("#drop9").click(function(){
		$("#drop9bis").toggle();
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
