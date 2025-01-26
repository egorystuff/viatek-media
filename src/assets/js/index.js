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

//  slider animation
//-------------------------------------------------------------------------------------
// const slideContainer = document.querySelector(".bg-img__slide");
// const slides = slideContainer.querySelectorAll("img");
// const textMain = document.querySelectorAll(".text-main__slide");
// const paginationItems = document.querySelectorAll(".slide-pagination-item");
// const prevButton = document.querySelector(".slide-control.prev");
// const nextButton = document.querySelector(".slide-control.next");

// let currentSlide = 0;

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.toggle("active", i === index);
//   });
//   textMain.forEach((item, i) => {
//     item.classList.toggle("active", i === index);
//   });
//   paginationItems.forEach((item, i) => {
//     item.classList.toggle("active", i === index);
//   });
// }

// function updatePagination() {
//   const paginationItem = document.querySelector(".slide-pagination-item");
//   paginationItem.textContent = `${currentSlide + 1}/${slides.length}`;
// }
// updatePagination();

// prevButton.addEventListener("click", () => {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   slideContainer.classList.add("slide-out-left");
//   setTimeout(() => {
//     showSlide(currentSlide);
//     updatePagination();
//     slideContainer.classList.remove("slide-out-left");
//   }, 300);
// });

// nextButton.addEventListener("click", () => {
//   currentSlide = (currentSlide + 1) % slides.length;
//   slideContainer.classList.add("slide-out-right");
//   setTimeout(() => {
//     showSlide(currentSlide);
//     updatePagination();
//     slideContainer.classList.remove("slide-out-right");
//   }, 300);
// });
