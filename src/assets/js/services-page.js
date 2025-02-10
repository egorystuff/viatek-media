let originalPositions = [];

function saveOriginalPositions() {
  const servicePages = document.querySelectorAll(".services__page");

  servicePages.forEach((servicePage) => {
    const contentBlock = servicePage.querySelector(".services__page-content");
    const imgBlock = servicePage.querySelector(".services__page-img");

    originalPositions.push({
      contentBlock: contentBlock,
      imgBlock: imgBlock,
      parent: servicePage,
      nextSibling: imgBlock.nextSibling,
    });
  });
}

function reorderElements() {
  originalPositions.forEach((pos) => {
    const { imgBlock, contentBlock, parent } = pos;
    const h1Element = contentBlock.querySelector("h1");
    contentBlock.insertBefore(imgBlock, h1Element.nextSibling);
  });
}

function restoreOriginalPositions() {
  originalPositions.forEach((pos) => {
    const { imgBlock, parent, nextSibling } = pos;
    parent.insertBefore(imgBlock, nextSibling);
  });
}

function checkWindowSize() {
  if (window.innerWidth <= 1280) {
    reorderElements();
  } else {
    restoreOriginalPositions();
  }
}

window.addEventListener("resize", checkWindowSize);

// Initial setup
saveOriginalPositions();
checkWindowSize();
