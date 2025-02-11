let originalContents = [];

function initPortfolioSwiper() {
  const portfolioWrappers = document.querySelectorAll(".portfolio__page-wrapper");
  const isMobile = window.innerWidth <= 768;

  portfolioWrappers.forEach((portfolioWrapper, index) => {
    if (isMobile && !portfolioWrapper.classList.contains("swiper-initialized")) {
      // Сохраняем оригинальное содержимое и классы
      originalContents[index] = portfolioWrapper.cloneNode(true);

      const swiperContainer = document.createElement("div");
      swiperContainer.classList.add("swiper", "portfolioSwiper");

      const swiperWrapper = document.createElement("div");
      swiperWrapper.classList.add("swiper-wrapper");

      Array.from(portfolioWrapper.querySelectorAll("a")).forEach((item) => {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        swiperSlide.appendChild(item.cloneNode(true));
        swiperWrapper.appendChild(swiperSlide);
      });

      const pagination = document.createElement("div");
      pagination.classList.add("swiper-pagination");

      swiperContainer.appendChild(swiperWrapper);
      swiperContainer.appendChild(pagination);

      portfolioWrapper.replaceWith(swiperContainer);
      swiperContainer.classList.add("swiper-initialized");

      new Swiper(".portfolioSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else if (!isMobile && portfolioWrapper.classList.contains("swiper-initialized")) {
      const swiperContainer = document.querySelector(".portfolioSwiper");

      // Восстанавливаем оригинальное содержимое и классы
      if (originalContents[index]) {
        swiperContainer.replaceWith(originalContents[index]);

        // Удаляем класс swiper-initialized
        originalContents[index].classList.remove("swiper-initialized");
      }
    }
  });
}

initPortfolioSwiper();

window.addEventListener("resize", () => {
  initPortfolioSwiper();
});
