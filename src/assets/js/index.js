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
