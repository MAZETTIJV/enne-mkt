const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const service = formData.get("service");
  const message = formData.get("message") || "Não informado";

  // Troque pelo e-mail oficial da empresa antes de publicar.
  const destinationEmail = "contato@seudominio.com";
  const subject = encodeURIComponent(`Novo contato pelo site — ${name}`);
  const body = encodeURIComponent(
    `Nome: ${name}\nE-mail: ${email}\nServiço: ${service}\n\nProjeto:\n${message}`
  );

  document.getElementById("formNote").textContent =
    "Abrindo seu aplicativo de e-mail. Se não abrir, verifique a configuração do navegador.";
  window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
});
