$(document).ready(function () {
	$('.carousel').carousel({
		interval: 5000 //changes the speed
	});
    
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    }); 
});