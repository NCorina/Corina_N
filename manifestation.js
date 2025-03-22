const prompts = [
  "What energy are you calling in today?",
  "What color or texture feels like that energy?",
  "Where does this version of you walk today?"
];

let currentPrompt = 0;
const userAnswers = [];

const promptText = document.getElementById("prompt-text");
const userResponse = document.getElementById("userResponse");

function nextPrompt() {
  const response = userResponse.value.trim();
  if (response !== "") {
    userAnswers.push(response);
    userResponse.value = ""; // clear input
    currentPrompt++;

    if (currentPrompt < prompts.length) {
      promptText.textContent = prompts[currentPrompt];
    } else {
      // Store the user's inputs (or send to backend later)
      console.log("Manifestation responses:", userAnswers);
      localStorage.setItem("manifestationAnswers", JSON.stringify(userAnswers));
      window.location.href = "style-suggestion.html"; // next step placeholder
    }
  }
}
