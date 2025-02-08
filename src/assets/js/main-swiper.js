let swiperInstance = null;
let portfolioSwiper = null;
let promoSwiper = null;
let currentSlideIndex = 0;

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------

function initPortfolioSwiper() {
  const portfolioBlock = document.querySelector(".portfolio__block");
  const isMobile = window.innerWidth <= 1024;

  if (isMobile && portfolioBlock && !portfolioBlock.classList.contains("swiper-wrapper")) {
    // Создаем контейнер Swiper
    const swiperContainer = document.createElement("div");
    swiperContainer.classList.add("swiper", "portfolioSwiper");

    // Создаем обертку для слайдов
    const swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper");

    // Перемещаем элементы портфолио в swiper-wrapper
    Array.from(portfolioBlock.children).forEach((item) => {
      const swiperSlide = document.createElement("div");
      swiperSlide.classList.add("swiper-slide");
      swiperSlide.appendChild(item.cloneNode(true));
      swiperWrapper.appendChild(swiperSlide);
    });

    // Добавляем пагинацию и навигацию
    const pagination = document.createElement("div");
    pagination.classList.add("swiper-pagination");

    // Собираем Swiper
    swiperContainer.appendChild(swiperWrapper);
    swiperContainer.appendChild(pagination);

    // Заменяем оригинальный блок на Swiper
    portfolioBlock.replaceWith(swiperContainer);

    // Инициализируем Swiper
    new Swiper(".portfolioSwiper", {
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
  } else if (!isMobile && document.querySelector(".portfolioSwiper")) {
    // Если экран больше 1024px, возвращаем исходный блок
    const swiperContainer = document.querySelector(".portfolioSwiper");
    const swiperWrapper = swiperContainer.querySelector(".swiper-wrapper");

    const originalBlock = document.createElement("div");
    originalBlock.classList.add("portfolio__block");

    Array.from(swiperWrapper.children).forEach((slide) => {
      originalBlock.appendChild(slide.firstElementChild.cloneNode(true));
    });

    swiperContainer.replaceWith(originalBlock);
  }
}

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------

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

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------

function initSwiper() {
  const isMobile = window.innerWidth <= 768;

  // Если Swiper уже инициализирован, сохраняем текущий индекс слайда
  if (swiperInstance) {
    currentSlideIndex = swiperInstance.activeIndex; // Сохраняем текущий слайд
    swiperInstance.destroy(true, true); // Уничтожаем текущий экземпляр Swiper
  }

  // Создаем новый экземпляр Swiper
  swiperInstance = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: isMobile ? "bullets" : "fraction", // Переключаем тип пагинации
      clickable: isMobile, // Делаем bullets кликабельными на маленьких экранах
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    initialSlide: currentSlideIndex, // Восстанавливаем текущий слайд
  });
}

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------

initSwiper();
initPortfolioSwiper();
initPromoSwiper();

window.addEventListener("resize", () => {
  initSwiper();
  initPortfolioSwiper();
  initPromoSwiper();
});
