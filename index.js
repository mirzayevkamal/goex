$(".hamburger-menu").on("click", function () {
  $(" .header-main nav").slideToggle();
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
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
