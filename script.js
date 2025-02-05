document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Add your form submission logic here (e.g., using fetch API to send data to a server)
    alert("Form submitted!");
  });
