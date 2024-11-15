document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  alert("Thank you for your message! We'll get back to you soon.");
});
