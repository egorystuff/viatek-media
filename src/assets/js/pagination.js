// получаем элементы пагинации
const pagination = document.querySelector(".pagination");
const prevButton = pagination.querySelector(".prev");
const nextButton = pagination.querySelector(".next");
const pageNumbers = pagination.querySelectorAll(".page-num");

const totalPages = 10;

let currentPage = 1;

function renderPage() {
  // отображаем номер текущей страницы
  pageNumbers.forEach((pageNumber, index) => {
    if (index === currentPage - 1) {
      pageNumber.classList.add("active");
    } else {
      pageNumber.classList.remove("active");
    }
  });
}

// функция для обработки клика на кнопку "Предыдущая"
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderPage();
  }
}

// функция для обработки клика на кнопку "Следующая"
function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    renderPage();
  }
}

// функция для обработки клика на номер страницы
function setPageNumber(event) {
  const pageNumber = event.target.textContent;
  currentPage = parseInt(pageNumber);
  renderPage();
}

// добавляем обработчики событий
prevButton.addEventListener("click", prevPage);
nextButton.addEventListener("click", nextPage);
pageNumbers.forEach((pageNumber) => {
  pageNumber.addEventListener("click", setPageNumber);
});

// отображаем текущую страницу
renderPage();
