new Splide("#splide", {
  type: "slide",
  perPage: 1,
  width: 1110,
  fixedWidth: 820,
  height: 280,
  gap: 40,
  padding: {
    left: "40px",
    right: "200px",
  },
  pagination: false,
  autoplay: true,
  interval: 5000,
  trimSpace: false,
  classes: {
    arrows: "splide__arrows arrows",
    arrow: "splide__arrow arrow",
    prev: "splide__arrow--prev prev",
    next: "splide__arrow--next next",
  },
}).mount();
