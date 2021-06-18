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
  
