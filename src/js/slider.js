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
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      }, 
      720: {
        slidesPerView: 3,
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
    }
  })

})();