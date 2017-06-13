$(document).ready(function () {
  var $navTrigger = $('.nav-trigger');
  var $mobileMenu = $('.mobile-menu');
  var $outWrapper = $('.out');

  // Mobile menu click events
  $('.nav-trigger').click(function (e) {
    e.preventDefault();
    $navTrigger.toggleClass('js-active');
    $mobileMenu.toggleClass('js-active');
    $outWrapper.toggleClass('js-overlayed');
  });
});
