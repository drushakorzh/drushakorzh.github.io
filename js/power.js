$(function() {
  $('.toggle-nav').click(function(event) {
	  //event.stopPropagation();
    if ($('.wrapper').css('opacity') == 0) $('.wrapper').css('opacity', 1), $('.uniqhdr').css('opacity', 0);
    else $('.wrapper').css('opacity', 0), $('.uniqhdr').css('opacity', 1);;
    $('.burger').toggleClass('open');
  });
});