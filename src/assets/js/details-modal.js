//details-modal
//-------------------------------------------------------------------------------------

const detailsModals = document.querySelectorAll(".details-modal");
const detailsButtons = document.querySelectorAll(".details-button");
const closeDetailsButtons = document.querySelectorAll(".close-button, #close-details-button");

function closeDetailsModal(modal) {
  modal.classList.remove("open");
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }, 500);
}

// Открытие модального окна при клике на кнопку "Подробнее"
detailsButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const modal = detailsModals[index];
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      modal.classList.add("open");
    }, 10);
  });
});

// Закрытие модального окна при клике на кнопку закрытия
closeDetailsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".details-modal");
    closeDetailsModal(modal);
  });
});

// Закрытие модального окна при клике вне его области
detailsModals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeDetailsModal(modal);
    }
  });
});
