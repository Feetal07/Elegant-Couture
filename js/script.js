// Countdown to April 1, 2026
const eventDate = new Date("April 1, 2026 00:00:00").getTime();
const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerHTML = days + " days left";

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "Event started!";
  }
}, 1000);

// Contact form validation
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function(e) {
    const name = document.querySelector("input[name='name']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const message = document.querySelector("textarea[name='message']").value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill in all required fields before submitting.");
    }
  });
}

// Homepage hero text fade-in (slower)
const heroText = document.querySelector(".hero h1");
const heroSub = document.querySelector(".hero p");

if (heroText && heroSub) {
  // Start hidden
  heroText.style.opacity = 0;
  heroSub.style.opacity = 0;

  // Fade in after page load
  window.addEventListener("load", () => {
    setTimeout(() => {
      heroText.style.transition = "opacity 3s";
      heroText.style.opacity = 1;
    }, 2000); // wait 2 seconds before heading appears

    setTimeout(() => {
      heroSub.style.transition = "opacity 3s";
      heroSub.style.opacity = 1;
    }, 4000); // wait 4 seconds before sub-text appears
  });
}
