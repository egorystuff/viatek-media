let swiperInstance = null;
let currentSlideIndex = 0;

/**
 * Function to initialize a custom swiper instance
 * @param {string} containerClass - Class name of the swiper container
 * @param {string} blockClass - Class name of the block that will be replaced with the swiper
 */
function initCustomSwiper(containerClass, blockClass) {
  const block = document.querySelector(`.${blockClass}`);
  const isMobile = window.innerWidth <= 1024;

  if (isMobile && block && !document.querySelector(`.${containerClass}`)) {
    const swiperContainer = document.createElement("div");
    swiperContainer.classList.add("swiper", containerClass);

    const swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper");

    Array.from(block.children).forEach((item) => {
      const swiperSlide = document.createElement("div");
      swiperSlide.classList.add("swiper-slide");
      swiperSlide.appendChild(item);
      swiperWrapper.appendChild(swiperSlide);
    });

    const pagination = document.createElement("div");
    pagination.classList.add("swiper-pagination");

    swiperContainer.appendChild(swiperWrapper);
    swiperContainer.appendChild(pagination);

    block.replaceWith(swiperContainer);

    new Swiper(`.${containerClass}`, {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  } else if (!isMobile && document.querySelector(`.${containerClass}`)) {
    const swiperContainer = document.querySelector(`.${containerClass}`);
    const swiperWrapper = swiperContainer.querySelector(".swiper-wrapper");

    const originalBlock = document.createElement("div");
    originalBlock.classList.add(blockClass);

    while (swiperWrapper.firstChild) {
      originalBlock.appendChild(swiperWrapper.firstChild.firstElementChild);
      swiperWrapper.removeChild(swiperWrapper.firstChild);
    }

    swiperContainer.replaceWith(originalBlock);
  }
}

function initMainSwiper() {
  const swiperElement = document.querySelector(".mySwiper");
  if (!swiperElement) {
    return;
  }

  const isMobile = window.innerWidth <= 768;

  if (swiperInstance) {
    currentSlideIndex = swiperInstance.activeIndex;
    swiperInstance.destroy(true, true);
  }

  swiperInstance = new Swiper(".mySwiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: isMobile ? "bullets" : "fraction",
      clickable: isMobile,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    initialSlide: currentSlideIndex,
  });
}

function destroySwipers() {
  const customSwipers = document.querySelectorAll(".swiper-container");
  customSwipers.forEach((swiper) => {
    if (swiper.swiper) {
      swiper.swiper.destroy(true, true);
    }
  });
}

function initSwipers() {
  destroySwipers();
  initMainSwiper();
  initCustomSwiper("portfolioSwiper", "portfolio__block");
  initCustomSwiper("promoSwiper", "promo__block");
  initCustomSwiper("reviewsSwiper", "reviews");
}

document.addEventListener("DOMContentLoaded", initSwipers);
window.addEventListener("resize", initSwipers);
window.addEventListener("beforeunload", destroySwipers);
