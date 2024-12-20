const DESKTOP_BREAKPOINT = "1280";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  autoplay: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
      loop: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
      loop: true,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  },
  on: {
    breakpoint(swiper, breakpointParams) {
      if (swiper.currentBreakpoint === DESKTOP_BREAKPOINT) {
        // Reset to the first item
        swiper.slideToLoop(0);
      }
    }
  }
});