document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;
  const allCards = document.querySelectorAll(".blog-card");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const rotatingText = document.getElementById("rotatingText");

  const applyDarkMode = (isDark) => {
    // Body
    body.classList.toggle("bg-dark", isDark);
    body.classList.toggle("text-light", isDark);
    body.classList.toggle("bg-light", !isDark);
    body.classList.toggle("text-dark", !isDark);

    // Cards
    allCards.forEach((card) => {
      card.classList.toggle("dark-mode", isDark);
    });

    // Header
    header?.classList.toggle("dark-header", isDark);

    // Footer
    footer?.classList.toggle("bg-dark", isDark);
    footer?.classList.toggle("text-light", isDark);
    footer?.classList.toggle("bg-light", !isDark);
    footer?.classList.toggle("text-dark", !isDark);

    // Rotating Welcome Text (optional)
    rotatingText?.classList.toggle("text-light", isDark);
    rotatingText?.classList.toggle("text-dark", !isDark);
  };

  const currentTheme = localStorage.getItem("theme");
  const isDark = currentTheme === "dark";
  applyDarkMode(isDark);
  if (toggleBtn) toggleBtn.textContent = isDark ? "☀️" : "🌙";

  toggleBtn?.addEventListener("click", () => {
    const nowDark = !body.classList.contains("bg-dark");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    toggleBtn.textContent = nowDark ? "☀️" : "🌙";
    applyDarkMode(nowDark);
  });
});
