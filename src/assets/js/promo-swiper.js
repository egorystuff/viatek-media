let promoSwiper = null;

function initPromoSwiper() {
  const promoBlock = document.querySelector(".promo__block");
  const isMobile = window.innerWidth <= 1024;

  if (isMobile && promoBlock && !promoBlock.classList.contains("swiper-wrapper")) {
    const swiperContainer = document.createElement("div");
    swiperContainer.classList.add("swiper", "promoSwiper");

    const swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper");

    Array.from(promoBlock.children).forEach((item) => {
      const swiperSlide = document.createElement("div");
      swiperSlide.classList.add("swiper-slide");
      swiperSlide.appendChild(item.cloneNode(true));
      swiperWrapper.appendChild(swiperSlide);
    });

    const pagination = document.createElement("div");
    pagination.classList.add("swiper-pagination");

    swiperContainer.appendChild(swiperWrapper);
    swiperContainer.appendChild(pagination);

    promoBlock.replaceWith(swiperContainer);

    new Swiper(".promoSwiper", {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: false,
      loop: false,
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
  } else if (!isMobile && document.querySelector(".promoSwiper")) {
    const swiperContainer = document.querySelector(".promoSwiper");
    const swiperWrapper = swiperContainer.querySelector(".swiper-wrapper");

    const originalBlock = document.createElement("div");
    originalBlock.classList.add("promo__block");

    Array.from(swiperWrapper.children).forEach((slide) => {
      originalBlock.appendChild(slide.firstElementChild.cloneNode(true));
    });

    swiperContainer.replaceWith(originalBlock);
  }
}

initPromoSwiper();

window.addEventListener("resize", () => {
  initPromoSwiper();
});
