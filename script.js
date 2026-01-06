// ===== SCROLL REVEAL ANIMATION =====
const animatedElements = document.querySelectorAll(
  ".section, .service-card, .price-card"
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  animatedElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===== BUTTON RIPPLE EFFECT (IT SHUKUH) =====
document.querySelectorAll(".btn-primary, .contact-form button").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    ripple.style.left = e.clientX - rect.left + "px";
    ripple.style.top = e.clientY - rect.top + "px";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// ===== CONTACT FORM (DEMO LOGIC) =====
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector("input[name='name']").value;

    alert(
      "Rahmat, " +
        name +
        "! \nXabaringiz qabul qilindi.\nTez orada siz bilan bog‘lanamiz."
    );

    this.reset();
  });
}
// ===== TEAM CYBER PULSE =====
document.querySelectorAll("#team .service-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "all 0.3s ease";
  });
});
// ===== MATRIX CYBER RAIN =====
const canvas = document.getElementById("matrix");
if (canvas) {
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector(".hero").offsetHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = [];

  for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height;
  }

  function drawMatrix() {
    ctx.fillStyle = "rgba(11, 28, 45, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#4da3ff";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(
        Math.floor(Math.random() * letters.length)
      );
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 50);
}
// ===== CONTACT FORM → TELEGRAM LEAD =====
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const phone = contactForm.phone.value.trim();
    const message = contactForm.message.value.trim();

    const text = `
🆕 YANGI MIJOZ
━━━━━━━━━━━━━━
👤 Ism: ${name}
📞 Telefon: ${phone}
💬 Xabar:
${message}
    `;

    fetch("https://api.telegram.org/botTOKEN/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "@itoutsourcing_uz_bot",
        text: text
      })
    })
    .then(res => {
      if (!res.ok) throw new Error();
      alert("✅ Xabaringiz yuborildi! Tez orada bog‘lanamiz.");
      contactForm.reset();
    })
    .catch(() => {
      alert("❌ Xatolik yuz berdi. Keyinroq urinib ko‘ring.");
    });
  });
}

// ===== MAP INTERACTION =====
const region = document.querySelector(".region");
const regionName = document.getElementById("regionName");

if (region && regionName) {
  region.addEventListener("click", () => {
    regionName.textContent = region.dataset.name;
  });
}
// ===== PHONE MASK =====
const phoneInput = document.getElementById("phone");

if (phoneInput) {
  phoneInput.addEventListener("input", () => {
    let x = phoneInput.value.replace(/\D/g, "").slice(0, 12);

    if (x.startsWith("998")) {
      x = x.slice(3);
    }

    let formatted = "+998";

    if (x.length > 0) formatted += " " + x.substring(0, 2);
    if (x.length > 2) formatted += " " + x.substring(2, 5);
    if (x.length > 5) formatted += " " + x.substring(5, 7);
    if (x.length > 7) formatted += " " + x.substring(7, 9);

    phoneInput.value = formatted;
  });
}
// ===== MOUSE FOLLOW GLOW =====
const glow = document.getElementById("mouseGlow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
// ===== PARALLAX SCROLL =====
document.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach(section => {
    const speed = 0.15;
    const offset = window.scrollY - section.offsetTop;
    section.style.backgroundPositionY = offset * speed + "px";
  });
});
// ===== DARK / LIGHT MODE =====
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});
