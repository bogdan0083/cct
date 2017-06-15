$(document).ready(function () {
  // variables ----------------------
  var $navTrigger = $('.nav-trigger');
  var $mobileMenu = $('.mobile-menu');
  var $outWrapper = $('.out');
  var $formTrigger = $('.js-form-trigger');
  var $mainNavTrigger = $('.main-nav-trigger');
  var $projectsSlider = $('.projects-slider');
  var $itemsAmountSelect = $('.items-amount-select');

  // window width
  var windowWdth = $(window).width();
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

  $('.zoom-popup').magnificPopup({
    type: 'image',
    easing: 'ease-in-out',
    mainClass: 'mfp-with-zoom',
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out'
    }
  });

  // если мы на десктопе
  if (windowWdth > 900) {
    // обрезаем длинные блоки с классом .js-truncated
    console.log(windowWdth);
    $('.js-truncated').dotdotdot({
      watch: 'window',
      height: 60
    });
  }

  var $grid = $('.grid').isotope({
    itemSelector: '.projects-col'
  });
  // bind filter button click
  $('.projects-filter').on( 'click', 'a', function (e) {
    e.preventDefault();
    $('.projects-filter a').removeClass('active');
    $(this).toggleClass('active');
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
});
