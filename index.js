$(".hamburger-menu").on("click", function () {
  $(" .header-main nav").slideToggle();
});

$(document).ready(function () {
  $(".main-carousel .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 8000,
    animateOut: "fadeOut",
    margin: 10,
    responsiveClass: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
      600: {
        items: 1,
        nav: false,
        loop: true,
      },
      1000: {
        items: 1,
        nav: false,
        loop: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".shops-carousel .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 8000,
    animateOut: "fadeOut",
    margin: 10,
    responsiveClass: true,
    loop: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        loop: true,
      },
      600: {
        items: 4,
        nav: false,
        loop: true,
      },
      1000: {
        items: 6,
        nav: false,
        loop: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".partners-carousel .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 8000,
    animateOut: "fadeOut",
    margin: 10,
    responsiveClass: true,
    loop: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        loop: true,
      },
      600: {
        items: 4,
        nav: false,
        loop: true,
      },
      1000: {
        items: 6,
        nav: false,
        loop: true,
      },
    },
  });
});
