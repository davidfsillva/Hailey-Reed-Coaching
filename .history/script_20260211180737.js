// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgba(15, 23, 42, 0.85)";
    nav.style.backdropFilter = "blur(10px)";
    nav.style.padding = "16px 8%";
    nav.style.transition = "0.3s ease";
  } else {
    nav.style.background = "transparent";
    nav.style.backdropFilter = "none";
    nav.style.padding = "0";
  }
});


// ===============================
// SCROLL REVEAL EFFECT
// ===============================
const revealElements = document.querySelectorAll(".section, .card, .testimonial");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

// Estado inicial
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===============================
// HERO IMAGE PARALLAX
// ===============================
const heroImg = document.querySelector(".hero-img");

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  heroImg.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.15}px))`;
});


// ===============================
// BUTTON FADE-IN ON LOAD
// ===============================
window.addEventListener("load", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn, index) => {
    btn.style.opacity = "0";
    btn.style.transform = "translateY(20px)";
    btn.style.transition = "all 0.6s ease";

    setTimeout(() => {
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    }, 400 + index * 200);
  });
});


// ===============================
// CARD HOVER GLOW EFFECT
// ===============================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
      rgba(240,122,165,0.15),
      rgba(255,255,255,0.03))
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "";
  });
});
