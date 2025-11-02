 

  links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: "smooth"
            });
        }
    });
});
/**
window.addEventListener("DOMContentLoaded", function() {
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent normal form submission
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      alert("Thank you! Your message has been sent.");
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  });
});
});*/
window.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent normal form submission

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          // Show success alert
          showAlert("Thank you! Your message has been sent.");
          form.reset(); // Reset the form
        } else {
          // Show error alert
          showAlert("Oops! Something went wrong.");
        }
      })
      .catch(() => {
        // Show error alert if fetch fails
        showAlert("Oops! Something went wrong.");
      });
  });

  // Function to show and hide alerts
  function showAlert(message) {
    const alertElement = document.querySelector(".alert");
    alertElement.textContent = message;

    // Display the alert
    alertElement.style.display = "block";

    // Remove alert after 2 seconds
    setTimeout(() => {
      alertElement.style.display = "none";
    }, 2000);
  }
});