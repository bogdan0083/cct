$(document).ready(function () {

  // variables ----------------------
  var $navTrigger = $('.nav-trigger');
  var $mobileMenu = $('.mobile-menu');
  var $outWrapper = $('.out');
  var $formTrigger = $('.js-form-trigger');
  var $mainNavTrigger = $('.main-nav-trigger');
  var $projectsSlider = $('.projects-slider');
  var $itemsAmountSelect = $('.items-amount-select');
  // end variables
  // Mobile menu click events
  $('.nav-trigger').click(function (e) {
    e.preventDefault();
    $navTrigger.toggleClass('js-active');
    $mobileMenu.toggleClass('js-active');
    $outWrapper.toggleClass('js-overlayed');
  });

  // form trigger
  $formTrigger.click(function (e) {
    e.preventDefault();
    $(this).toggleClass('js-active').prev().toggleClass('js-active');
    $(this).parent().toggleClass('js-active');
  });

  // main nav trigger
  $mainNavTrigger.click(function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('js-active').next().slideToggle();

    if ($this.hasClass('js-active')) {
      $this.find('span').text('Закрыть меню');
    } else {
      $this.find('span').text('Открыть меню');
    }
  });

  // projects slider
  $projectsSlider.slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

  $itemsAmountSelect.selectize();
});
