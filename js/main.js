// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
      alert("Thank you! Your message has been sent successfully.");
      contactForm.reset();
    }, function(error) {
      alert("Oops... Something went wrong. Please try again.");
      console.log('FAILED...', error);
    });
});

// Optional: Focus and blinking cursor for message box
const messageBox = document.getElementById('message');
messageBox.addEventListener('focus', () => {
  messageBox.style.borderColor = '#1e90ff';
});
messageBox.addEventListener('blur', () => {
  messageBox.style.borderColor = '#ccc';
});
// Blog "Read More" toggle
// Blog "Read More / Read Less" toggle
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const content = card.querySelector(".card-content");

      content.classList.toggle("hidden");

      if (content.classList.contains("hidden")) {
        btn.textContent = "Read More";
      } else {
        btn.textContent = "Read Less";
      }
    });
  });
});
