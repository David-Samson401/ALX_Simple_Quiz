function checkAnswer() {
  const correctAnswer = "4"; // exact string
  const selected = document.querySelector('input[name="quiz"]:checked');
  const feedback = document.getElementById("feedback");

  if (selected) {
    const userAnswer = selected.value;
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
    }
  } else {
    feedback.textContent = "Please select an answer.";
  }
}

const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
