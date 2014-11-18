$(document).ready(function (){
	
	$('#drop1').click(function(){
		$('#drop2').toggle();
		$('#drop4').hide();
	});

	$('#drop3').click(function(){
		$('#drop4').toggle();
		$('#drop2').hide();
	});

	$('#filter').click(function(){
		$('#box_filter').toggle();
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






function initialize() {

 var options = {
  types: ['(regions)'],
  
 };

 var input = document.getElementById('searchTextField');
 var autocomplete = new google.maps.places.Autocomplete(input, options);
}

google.maps.event.addDomListener(window, 'load', initialize);
