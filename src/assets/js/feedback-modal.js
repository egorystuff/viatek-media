//feedback-modal
//-------------------------------------------------------------------------------------

const feedbackModal = document.getElementById("feedback-modal");
const feedbackButton = document.getElementById("feedback-button");

feedbackButton.addEventListener("click", () => {
  feedbackModal.style.display = "block";
  document.body.style.overflow = "hidden";
});

feedbackModal.addEventListener("click", (e) => {
  if (e.target === feedbackModal) {
    feedbackModal.style.display = "none";
    document.body.style.overflow = "";
  }
});

document.getElementById("feedback-form").addEventListener("submit", (e) => {
  e.preventDefault();
});
