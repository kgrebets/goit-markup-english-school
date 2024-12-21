const DESKTOP_BREAKPOINT = "1280";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 32,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
      loop: false,
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