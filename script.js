// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // close mobile menu if open
    if (document.body.classList.contains('mobile-menu-open')) toggleMobileMenu();
  });
});

// Contact form submission (demo)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
  });
}

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => toggleMobileMenu());
}

function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;

  if (document.body.classList.contains('mobile-menu-open')) {
    // close
    document.body.classList.remove('mobile-menu-open');
    navLinks.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  } else {
    // open
    document.body.classList.add('mobile-menu-open');
    navLinks.classList.add('nav-open');
    menuToggle.setAttribute('aria-expanded', 'true');
  }
}


const form = document.querySelector('.contact-form');

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

 

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert('Message sent successfully!');
      form.reset(); // clears the form
    } else {
      alert('Oops! Something went wrong.');
    }
  });
});
