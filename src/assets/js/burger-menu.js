//  burger menu
// -------------------------------------------------------------------------------------
function toggleBurgerMenu() {
  const burgerModal = document.getElementById("burgerModal");
  const overlay = document.getElementById("overlay");

  burgerModal.classList.toggle("open");
  overlay.classList.toggle("active");

  if (burgerModal.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

const overlay = document.getElementById("overlay");
overlay.addEventListener("click", () => {
  toggleBurgerMenu();
});

// Функция для копирования пунктов меню
// -------------------------------------------------------------------------------------

function copyMenuItems() {
  // Находим все пункты меню в nav-header__list, кроме кнопки бургер-меню
  const navItems = document.querySelectorAll(".nav-header__list-item:not(.burger-menu)");
  const burgerMenuList = document.querySelector(".burger-menu-list");

  // Проверяем, что элементы найдены
  if (!navItems || !burgerMenuList) {
    console.error("Не удалось найти элементы меню или контейнер для бургер-меню.");
    return;
  }

  // Очищаем текущий список в бургер-меню (на случай, если функция вызывается несколько раз)
  burgerMenuList.innerHTML = "";

  // Копируем каждый пункт меню
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    if (link) {
      // Создаем новый элемент списка
      const clonedItem = document.createElement("li");
      clonedItem.className = "burger-menu-item"; // Добавляем класс для стилизации

      // Создаем новую ссылку
      const clonedLink = document.createElement("a");
      clonedLink.href = link.href;
      clonedLink.textContent = link.textContent;

      // Добавляем ссылку в элемент списка
      clonedItem.appendChild(clonedLink);

      // Добавляем элемент списка в бургер-меню
      burgerMenuList.appendChild(clonedItem);
    }
  });
}

function copySocialLinks() {
  // Находим блок с соцсетями
  const socials = document.querySelector(".socials");
  const burderSocial = document.querySelector(".burder-social");

  if (!socials || !burderSocial) {
    console.error("Не удалось найти блок с соцсетями или контейнер для них в бургер-меню.");
    return;
  }

  burderSocial.innerHTML = ""; // Очищаем текущий список

  // Копируем каждую ссылку на соцсети
  socials.querySelectorAll(".socials__link").forEach((link) => {
    const clonedLink = link.cloneNode(true); // Клонируем ссылку (включая все атрибуты и дочерние элементы)
    burderSocial.appendChild(clonedLink); // Добавляем в бургер-меню
  });
}

// Вызываем обе функции при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  copyMenuItems(); // Копируем пункты меню
  copySocialLinks(); // Копируем ссылки на соцсети
});
