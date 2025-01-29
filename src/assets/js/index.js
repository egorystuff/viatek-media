//  services__block animation
//-------------------------------------------------------------------------------------

const elements = document.querySelectorAll(".services__block-item");

elements.forEach((element) => {
  const color = element.getAttribute("data-color") || "#112630";
  const size = element.hasAttribute("data-size") ? "1000px" : "600px";
  const style = element.hasAttribute("data-style") ? "second" : "base";

  element.style.setProperty("--color", color);
  element.style.setProperty("--size", size);

  element.classList.add(style);
});

//  price__block add active
//-------------------------------------------------------------------------------------

const priceBlockItems = document.querySelectorAll(".price__block-item");

priceBlockItems.forEach((item) => {
  const topBlock = item.querySelector(".price__block-item-top");
  const detailsBlock = item.querySelector(".price__block-item-details");

  topBlock.addEventListener("click", () => {
    detailsBlock.classList.toggle("active");
  });
});

priceBlockItems.forEach((item) => {
  const topBlock = item.querySelector(".price__block-item-top");
  const icon = item.querySelector(".item-icon");

  topBlock.addEventListener("click", () => {
    icon.classList.toggle("active");
  });
});

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

// Вызываем функцию копирования при загрузке страницы
document.addEventListener("DOMContentLoaded", copyMenuItems);
