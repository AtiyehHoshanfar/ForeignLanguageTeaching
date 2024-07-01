var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 3000,
      spaceBetween: 40,
      pauseOnMouseEnter: true
    },
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      580: {
        slidesPerView: 2,
      },
      1224: {
        slidesPerView: 4,
      }
    }
  });
  