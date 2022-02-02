
$(function () {

  // Slider

var galleryTop = new Swiper(".slider2", {
  loop: true,
  loopedSlides: 5,
  effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
});
/* thumbs */
var galleryThumbs = new Swiper(".slider1", {
  spaceBetween: 14,
  centeredSlides: true,
  slidesPerView: "auto",
  touchRatio: 0.4,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 5,
});

/* set conteoller  */
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;





  // Burger menu

  $('.ham').on('click', function () {
    $('.header__menu').toggleClass('active');
    $('body').toggleClass('active');
  });


  // Fixed menu

  let header = $("#header");
  let headerH = header.innerHeight();
  let scrollPos = $(window).scrollTop();
  checkScroll(scrollPos, headerH);

  $(window).on("scroll resize", function () {
    headerH = header.innerHeight();
    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, headerH);
  });

  function checkScroll(scrollPos, headerH) {
    if (scrollPos > headerH) {
      header.addClass("active");
    } else {
      header.removeClass("active");
    }
  }

  // Scroll menu nav

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let elementID = $(this).data("scroll");
    let elementOffset = $(elementID).offset().top;

    if (window.matchMedia("(min-width: 625px)").matches) {

      $('.ham').toggleClass('active');
      $('.header__menu').toggleClass('active');
      
    } else {

      $('.ham').toggleClass('active');
      $('.header__menu').toggleClass('active');
      $('body').toggleClass('active');
  
    }


    $("html, body").animate({
      scrollTop: elementOffset - 75
    }, 0);
  });


  // modal video
  $(document).ready(function() {
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
  
      fixedContentPos: false
    });
  });


});