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

})();