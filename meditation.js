const meditationLines = [
  "Welcome.",
  "Take a moment to arrive.",
  "Feel your breath moving in… and out.",
  "Let the world soften around you.",
  "Imagine the version of you that already exists inside—the one you’re growing into.",
  "What does she feel like?",
  "How does she move through the world?",
  "What is she learning to trust?",
  "Let her rise gently in your awareness.",
  "Let her presence fill your body.",
  "When you're ready, dress not to impress,",
  "But to call her in.",
  "This is your quiet becoming."
];

const container = document.getElementById("meditation-text");

let currentLine = 0;

function showNextLine() {
  if (currentLine < meditationLines.length) {
    const p = document.createElement("p");
    p.textContent = meditationLines[currentLine];
    container.appendChild(p);
    setTimeout(() => p.classList.add("show-line"), 100);
    currentLine++;
    setTimeout(showNextLine, 2500); // Adjust timing between lines
  } else {
    document.getElementById("nextButton").style.display = "inline-block";
  }
}

window.onload = showNextLine;

function goToManifestation() {
  window.location.href = "manifestation.html"; // placeholder for your next screen
}
