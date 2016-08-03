$(document).ready(function() {
  // set active nav item when clicking on items
  $('.nav a').on('click', function(event) {
    event.preventDefault();
      $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');

    var $href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $($href).offset().top
    }, 1000);
    $('.navbar-collapse').collapse('hide');
  });

  // set active nav items when scrolling the page
  $(window).on('scroll', function() {
    $('.target').each(function() {
      if ($(window).scrollTop() >= $(this).offset().top - $('nav').height()) {
        var id = $(this).attr('id');
        $('.nav a').removeClass('active');
        $('.nav a[href=\'#' + id + '\']').addClass('active');
      }
    });
  });
  
});