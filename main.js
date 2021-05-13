var swiper1 = new Swiper('.first-slider', {
  slidesPerView: 1,
  spaceBetween: 36,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });

var swiper2 = new Swiper('.second-swiper', {
  slidesPerView: 3,
  spaceBetween: 36,
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
        spaceBetweenSlides: 50
    },
    640: {
      slidesPerView: 3,
      spaceBetweenSlides: 36
    }
  }
});




var drop1 = $('.sidebar-link1');
var dropdown1 = $('.sidebar-prelink1')
drop1.on('click', function () {
dropdown1.toggleClass('open');
});

var drop2 = $('.sidebar-link2');
var dropdown2 = $('.sidebar-prelink2')
drop2.on('click', function () {
dropdown2.toggleClass('open');
});

var drop3 = $('.sidebar-link3');
var dropdown3 = $('.sidebar-prelink3')
drop3.on('click', function () {
dropdown3.toggleClass('open');
});




$(document).ready(function() {
  $('.menu-burger__header').click(function() {
      $('.menu-burger__header').toggleClass('open-menu');
      $('.header__nav').toggleClass('open-menu');
  });
});
