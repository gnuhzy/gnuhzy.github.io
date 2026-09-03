const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');

function syncThemeColor() {
  themeMeta?.setAttribute("content", root.dataset.theme === "light" ? "#f5f8fc" : "#07111f");
}

themeButton?.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  try {
    localStorage.setItem("theme", root.dataset.theme);
  } catch {
    // The selected theme still applies for the current page view.
  }
  themeButton.setAttribute(
    "aria-label",
    root.dataset.theme === "light" ? "Switch to dark theme" : "Switch to light theme",
  );
  syncThemeColor();
});

syncThemeColor();

const year = document.querySelector("#current-year");
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
