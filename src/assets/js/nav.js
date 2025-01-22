// scroll navigation
//-------------------------------------------------------------------------------------

const navigationItems = document.querySelectorAll(".navigation__list-item a");

navigationItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // предотвращаем переход по ссылке

    const targetId = item.getAttribute("href").slice(1); // получаем ID элемента из атрибута href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
