let swiperInstance = null; // Переменная для хранения экземпляра Swiper
let currentSlideIndex = 0; // Переменная для хранения текущего индекса слайда

// Функция для инициализации Swiper
function initSwiper() {
  const isMobile = window.innerWidth <= 1024;

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
      dynamicBullets: isMobile, // Включаем динамические bullets на маленьких экранах
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    initialSlide: currentSlideIndex, // Восстанавливаем текущий слайд
  });
}

// Инициализация Swiper при загрузке страницы
initSwiper();

// Переинициализация Swiper при изменении размера окна
window.addEventListener("resize", () => {
  initSwiper();
});
