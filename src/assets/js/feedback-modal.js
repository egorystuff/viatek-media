const feedbackModal = document.getElementById("feedback-modal");
const feedbackButton = document.getElementById("feedback-button");
const burgerFeedbackButton = document.querySelector(".burger-modal .button"); // Кнопка в бургер-меню
const closeFeedbackButton = document.getElementById("close-feedback-button");

function openFeedbackModal() {
  feedbackModal.style.display = "block";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    feedbackModal.classList.add("open");
  }, 10);
}

function closeFeedbackModal() {
  feedbackModal.classList.remove("open");
  setTimeout(() => {
    feedbackModal.style.display = "none";
    document.body.style.overflow = "";
  }, 500);
}

// Открываем модальное окно при клике на кнопку в "top__header"
if (feedbackButton) {
  feedbackButton.addEventListener("click", openFeedbackModal);
}

// Открываем модальное окно при клике на кнопку в бургер-меню
if (burgerFeedbackButton) {
  burgerFeedbackButton.addEventListener("click", openFeedbackModal);
}

// Закрываем модальное окно при клике на кнопку закрытия
if (closeFeedbackButton) {
  closeFeedbackButton.addEventListener("click", closeFeedbackModal);
}

// Закрываем модальное окно при клике вне его области
if (feedbackModal) {
  feedbackModal.addEventListener("click", (e) => {
    if (e.target === feedbackModal) {
      closeFeedbackModal();
    }
  });
}
