// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (!nav) return;

  if (window.scrollY > 50) {
    nav.style.background = "rgba(15, 23, 42, 0.85)";
    nav.style.backdropFilter = "blur(10px)";
    nav.style.padding = "16px 8%";
    nav.style.transition = "all 0.3s ease";
  } else {
    nav.style.background = "transparent";
    nav.style.backdropFilter = "none";
    nav.style.padding = "";
    nav.style.border-radius ="10px";
  }
});


// ===============================
// SCROLL REVEAL (melhor performance)
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
  el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



// ===============================
// HERO IMAGE PARALLAX (DESKTOP ONLY)
// ===============================
const heroImg = document.querySelector(".hero-img");

if (heroImg && window.innerWidth > 768) {
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    heroImg.style.transform =
      `translate(-50%, calc(-50% + ${scrollPosition * 0.12}px))`;
  });
}



// ===============================
// BUTTON FADE-IN ON LOAD
// ===============================
window.addEventListener("load", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn, index) => {
    btn.style.opacity = "0";
    btn.style.transform = "translateY(20px)";
    btn.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    setTimeout(() => {
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    }, 300 + index * 150);
  });
});



// ===============================
// CARD HOVER GLOW EFFECT (desktop only)
// ===============================
if (window.innerWidth > 768) {

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(240,122,165,0.18),
        rgba(255,255,255,0.03))
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.background = "";
    });

  });

}
