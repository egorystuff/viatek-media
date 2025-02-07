let swiperInstance = null;
let portfolioSwiper = null;
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

    const buttonNext = document.createElement("div");
    buttonNext.classList.add("swiper-button-next");

    const buttonPrev = document.createElement("div");
    buttonPrev.classList.add("swiper-button-prev");

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
    });
  } else if (!isMobile && document.querySelector(".portfolioSwiper")) {
    // Если экран больше 1024px, возвращаем исходный блок
    const swiperContainer = document.querySelector(".portfolioSwiper");
    const swiperWrapper = swiperContainer.querySelector(".swiper-wrapper");

    // Восстанавливаем оригинальный блок
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

function debounce(func, timeout = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------

initSwiper();
initPortfolioSwiper();

window.addEventListener(
  "resize",
  debounce(() => {
    initSwiper();
    initPortfolioSwiper();
  }),
);
