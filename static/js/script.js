(function ($) {
    "use strict"; // Start of use strict
  
    // Closes the sidebar menu
    $(".menu-toggle").click(function (e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
      $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
      $(this).toggleClass("active");
    });
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Copyright date will be automatically updated every year without user input.
    $("#copyright").text(new Date().getFullYear());
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('#sidebar-wrapper .js-scroll-trigger').click(function () {
      $("#sidebar-wrapper").removeClass("active");
      $(".menu-toggle").removeClass("active");
      $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    });
  
    // When 'To Top Button' is clicked: Scroll to top of page in 800ms.
    $("a[href='#top']").click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  
    // If position of vertical scroll is above 200px, to top button will disappear.
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('.to-top').fadeIn();
      } else {
        $('.to-top').fadeOut();
      }
    });
  
  })(jQuery); // End of use strict
  
  // Disable Google Maps scrolling
  // See http://stackoverflow.com/a/25904582/1607849
  // Disable scroll zooming and bind back the click event
  var onMapMouseleaveHandler = function (event) {
    var that = $(this);
    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  };
  
  var onMapClickHandler = function (event) {
    var that = $(this);
    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);
    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");
    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
  };
  
  // Enable map zooming with mouse scroll when the user clicks the map
  $('.map').on('click', onMapClickHandler);