// Rotating professional identity on the homepage
const roleText = document.getElementById("roleText");
const roles = ["Economist", "Educator", "Mentor", "Community Builder"];
let roleIndex = 0;

if (roleText) {
  setInterval(() => {
    roleText.classList.add("role-out");
    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      roleText.textContent = roles[roleIndex];
      roleText.classList.remove("role-out");
      roleText.classList.add("role-in");
      setTimeout(() => roleText.classList.remove("role-in"), 500);
    }, 450);
  }, 2200);
}

// Mobile navigation
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu?.addEventListener("click", () => nav?.classList.toggle("open"));

// Read More buttons
document.querySelectorAll(".more").forEach(button => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);
    if (!target) return;
    target.classList.toggle("show");
    button.textContent = target.classList.contains("show") ? "Read Less ↑" : "Read More →";
  });
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Project filters
document.querySelectorAll(".filter").forEach(filter => {
  filter.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
    filter.classList.add("active");
    const category = filter.dataset.filter;

    document.querySelectorAll(".project").forEach(project => {
      project.style.display =
        category === "all" || project.dataset.cat === category ? "block" : "none";
    });
  });
});

// Contact form opens the user's email app
document.getElementById("form")?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.target);
  const recipient = "nangala.harriet@gmail.com";
  const body =
    `Name: ${data.get("name")}\n` +
    `Email: ${data.get("email")}\n\n` +
    `${data.get("message")}`;

  window.location.href =
    `mailto:${recipient}?subject=${encodeURIComponent(data.get("subject"))}&body=${encodeURIComponent(body)}`;
});
