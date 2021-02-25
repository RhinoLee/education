;(function() {
  let bannerSwiper = new Swiper('.main-slider .swiper-container', {
    // autoplay: {
    //   delay: 5000,
    // },
    speed: 1500,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  })

  let coursesSwiper = new Swiper('#section-courses .swiper-container', {
    // autoplay: {
    //   delay: 5000,
    // },
    speed: 1500,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      }, 
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      }, 
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }, 
    }
  })

  let clientSwiper = new Swiper('#section-client-mobile .swiper-container', {
    // autoplay: {
    //   delay: 5000,
    // },
    speed: 1500,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  let blogSwiper = new Swiper('#section-blog .swiper-container', {
    // autoplay: {
    //   delay: 5000,
    // },
    slidesPerView: 1.2,
    centeredSlides: true,
    speed: 1500,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      576: {
        slidesPerView: 2.5,
        spaceBetween: 20
      }, 
    }
  })

})();