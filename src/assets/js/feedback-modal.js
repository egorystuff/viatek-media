//feedback-modal
//-------------------------------------------------------------------------------------

const feedbackModal = document.getElementById("feedback-modal");
const feedbackButton = document.getElementById("feedback-button");

feedbackButton.addEventListener("click", () => {
  console.log(feedbackButton);
  feedbackModal.style.display = "block";
});

feedbackModal.addEventListener("click", (e) => {
  if (e.target === feedbackModal) {
    feedbackModal.style.display = "none";
  }
});

document.getElementById("feedback-form").addEventListener("submit", (e) => {
  e.preventDefault();
});
