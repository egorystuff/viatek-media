//feedback-modal
//-------------------------------------------------------------------------------------

const feedbackModal = document.getElementById("feedback-modal");
const feedbackButton = document.getElementById("feedback-button");
const closeFeedbackButton = document.getElementById("close-feedback-button");

function closeFeedbackModal() {
  feedbackModal.classList.remove("open");
  setTimeout(() => {
    feedbackModal.style.display = "none";
    document.body.style.overflow = "";
  }, 500);
}

feedbackButton.addEventListener("click", () => {
  feedbackModal.style.display = "block";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    feedbackModal.classList.add("open");
  }, 10);
});

closeFeedbackButton.addEventListener("click", () => {
  closeFeedbackModal();
});

feedbackModal.addEventListener("click", (e) => {
  if (e.target === feedbackModal) {
    closeFeedbackModal();
  }
});

document.getElementById("feedback-form").addEventListener("submit", (e) => {
  e.preventDefault();
});
