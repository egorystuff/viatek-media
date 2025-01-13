const elements = document.querySelectorAll(".services__block-item");

elements.forEach((element) => {
  const color = element.getAttribute("data-color") || "#112630";
  const size = element.hasAttribute("data-size") ? "1000px" : "600px";
  const style = element.hasAttribute("data-style") ? "second" : "base";

  element.style.setProperty("--color", color);
  element.style.setProperty("--size", size);

  element.classList.add(style);
});
