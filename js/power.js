$(function() {
  $('.toggle-nav').click(function(event) {
	  //event.stopPropagation();
    if ($(".wrapper").css('opacity') == 0) $('.wrapper').css('opacity', 1);
    else $('.wrapper').css('opacity', 0);
  });
});