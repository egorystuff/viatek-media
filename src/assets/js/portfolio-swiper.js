let swiperInstances = [];

function initPortfolioSwiper() {
  const portfolioWrappers = document.querySelectorAll(".portfolio__page-wrapper");
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    portfolioWrappers.forEach((portfolioWrapper, index) => {
      if (!portfolioWrapper.classList.contains("swiper-initialized")) {
        // Скрываем оригинальный блок
        portfolioWrapper.style.display = "none";

        // Создаем контейнер для Swiper
        const swiperContainer = document.createElement("div");
        swiperContainer.classList.add("swiper", "customSwiper"); // Новое имя класса

        const swiperWrapper = document.createElement("div");
        swiperWrapper.classList.add("swiper-wrapper");

        // Копируем все элементы <a> с изображениями в слайды
        Array.from(portfolioWrapper.querySelectorAll("a")).forEach((link) => {
          const swiperSlide = document.createElement("div");
          swiperSlide.classList.add("swiper-slide");
          swiperSlide.appendChild(link.cloneNode(true)); // Копируем весь элемент <a>
          swiperWrapper.appendChild(swiperSlide);
        });

        const pagination = document.createElement("div");
        pagination.classList.add("swiper-pagination");

        swiperContainer.appendChild(swiperWrapper);
        swiperContainer.appendChild(pagination);

        // Вставляем Swiper после оригинального блока
        portfolioWrapper.insertAdjacentElement("afterend", swiperContainer);

        // Инициализируем Swiper
        const swiperInstance = new Swiper(swiperContainer, {
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: pagination,
            type: "bullets",

            clickable: true,
          },
        });

        // Сохраняем экземпляр Swiper
        swiperInstances[index] = { swiperInstance, swiperContainer };

        // Добавляем класс для отметки инициализации
        portfolioWrapper.classList.add("swiper-initialized");
      }
    });
  } else {
    // Если это десктоп, удаляем Swiper и показываем оригинальные блоки
    portfolioWrappers.forEach((portfolioWrapper, index) => {
      if (portfolioWrapper.classList.contains("swiper-initialized")) {
        // Показываем оригинальный блок
        portfolioWrapper.style.display = "";

        // Удаляем Swiper, если он был создан
        if (swiperInstances[index]) {
          swiperInstances[index].swiperContainer.remove(); // Удаляем контейнер Swiper
          swiperInstances[index].swiperInstance.destroy(); // Уничтожаем экземпляр Swiper
          delete swiperInstances[index]; // Удаляем из массива
        }

        // Убираем класс инициализации
        portfolioWrapper.classList.remove("swiper-initialized");
      }
    });
  }
}

initPortfolioSwiper();

window.addEventListener("resize", () => {
  initPortfolioSwiper();
});
