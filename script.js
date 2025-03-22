function startMeditation() {
  // Placeholder for transitioning to meditation screen
  window.location.href = "meditation.html"; // or load the next section dynamically
}
function selectPiece() {
  const piece = document.getElementById("userPiece").value.trim();
  if (piece !== "") {
    document.getElementById("piece-step").style.display = "none";
    document.getElementById("suggestion-step").style.display = "block";

    const suggestionText = `You're calling in: ${manifestation}\n
You want to style: ${piece}\n\n
Try combining it with textures and colors that support this energy. Add structure or flow depending on how you want to feel.
Choose soft layers or bold contrast—whichever helps you step into the version of you you're calling in.\n\n
Inspired by: intuition + intentional style.`;

    document.getElementById("suggestionText").textContent = suggestionText;
  }
}
