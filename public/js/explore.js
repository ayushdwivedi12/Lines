const phrases = [
  "✍️ Share your ideas with the world",
  "🚀 Start your blogging journey today",
  "💡 Let your thoughts shine bright!",
  "🌍 Connect with readers globally",
  "📚 Your story deserves a stage",
];

let index = 0;
const textElement = document.getElementById("rotatingText");

if (textElement) {
  setInterval(() => {
    index = (index + 1) % phrases.length;
    textElement.innerText = phrases[index];
  }, 2000);
}
