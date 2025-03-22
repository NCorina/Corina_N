const responses = JSON.parse(localStorage.getItem("manifestationAnswers"));

const summaryText = document.getElementById("summary-text");
const suggestionBox = document.getElementById("style-suggestion");

const suggestions = [
  {
    vibe: "calm",
    text: "Today you're called to move softly, with breath and clarity. Choose something that doesn’t ask for attention but honors your inner peace.",
    pieces: ["a cream knit tank", "soft linen trousers", "barely-there sandals"],
    muse: "Jeanne Damas"
  },
  {
    vibe: "radiant",
    text: "Your light is gentle, but certain. Let it speak in sun-warmed tones and flowing shapes.",
    pieces: ["a golden silk slip", "a vintage scarf", "delicate gold earrings"],
    muse: "Zoë Kravitz"
  },
  {
    vibe: "mysterious",
    text: "She doesn’t chase or explain. Let textures do the talking.",
    pieces: ["a long black cardigan", "flowing wide-leg pants", "silver ring"],
    muse: "Tilda Swinton"
  }
];

// Soft matching logic (demo only—expand with keyword detection)
let vibeMatch = suggestions.find(s =>
  responses[0].toLowerCase().includes(s.vibe)
);

if (!vibeMatch) {
  vibeMatch = suggestions[0]; // default to calm if no match
}

summaryText.textContent = `You’re stepping into: ${vibeMatch.vibe}`;

suggestionBox.innerHTML = `
  <p>${vibeMatch.text}</p>
  <p><strong>Pieces:</strong> ${vibeMatch.pieces.join(", ")}</p>
  <p><strong>Style muse:</strong> ${vibeMatch.muse}</p>
`;

function startAgain() {
  localStorage.clear();
  window.location.href = "index.html";
}
function saveLook() {
  const lookEntry = {
    date: new Date().toLocaleDateString(),
    vibe: vibeMatch.vibe,
    text: vibeMatch.text,
    pieces: vibeMatch.pieces,
    muse: vibeMatch.muse,
    note: prompt("Want to add a personal note about how you feel in this look?")
  };

  let savedLooks = JSON.parse(localStorage.getItem("lookbook")) || [];
  savedLooks.push(lookEntry);
  localStorage.setItem("lookbook", JSON.stringify(savedLooks));

  alert("Look saved to your Lookbook.");
}
