$(document).ready(function () {
  // variables ----------------------
  var $navTrigger = $('.nav-trigger');
  var $mobileMenu = $('.mobile-menu');
  var $outWrapper = $('.out');

  // overlay
  var $overlay = $('.js-overlay');
  var $formTrigger = $('.js-form-trigger');
  var $mainNavTrigger = $('.main-nav-trigger');
  var $projectsSlider = $('.projects-slider');
  var $itemsAmountSelect = $('.items-amount-select');

  // window width
  var windowWdth = $(window).width();
  // end variables

  // Убираем оверлей при клике
  $overlay.click(function () {
    $overlay.removeClass('active');
    $outWrapper.removeClass('active');
    $mobileMenu.removeClass('js-active');
    $navTrigger.removeClass('js-active');
    if (solutionsItemIsActive) {
      $('.solutions-item.active')
        .find('.js-circle-toggle')
        .trigger('click');
    }
  });

  // Mobile menu click events
  $('.nav-trigger').click(function (e) {
    e.preventDefault();
    $navTrigger.toggleClass('js-active');
    $mobileMenu.toggleClass('js-active');
    $overlay.toggleClass('active');
    $outWrapper.toggleClass('active');
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

  // Активнен ли айтем в .solutions-item?
  var solutionsItemIsActive = false;

  $('.js-circle-toggle').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    var $item = $this.closest('.solutions-item');
    var $container = $this.prev();
    var $wrap = $container.find('.wrap');

    $this.toggleClass('active');

    if ($this.hasClass('active')) {
      var $wrapHeight = $wrap.height();
      $overlay.addClass('active');
      $container.animate({
        height: $wrapHeight
      });
      $item.addClass('active');
      solutionsItemIsActive = true;
    } else {
      $container.animate({
        height: 180
      });
      $overlay.removeClass('active');
      $item.removeClass('active');
      solutionsItemIsActive = false;
    }
  });

  var mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "stylers": [
      {
        "color": "#eeeeee"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

  (function initMap() {
    if ($('.contact-map').length > 0) {
      var myLatLng = {
        lat: 55.844083,
        lng: 37.576811
      }
      // first map on contact page
      var mapFirst = new google.maps.Map(document.getElementById('map-first'), {
        center: myLatLng,
        zoom: 16,
        disableDefaultIU: true,
        styles: mapStyles
      });

      var mapSecond = new google.maps.Map(document.getElementById('map-second'), {
        center: myLatLng,
        zoom: 16,
        disableDefaultIU: true,
        styles: mapStyles
      });

      var markerRed = new google.maps.Marker({
        position: myLatLng,
        title: 'Hello World!',
        icon: 'images/mark-red.svg'
      });

      var markerBlue = new google.maps.Marker({
        position: myLatLng,
        title: 'Hello World!',
        icon: 'images/mark-blue.svg'
      });

      markerRed.setMap(mapFirst);
      markerBlue.setMap(mapSecond);
    }
  })();
});
