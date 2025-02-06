// Get the current page's path
const currentPath = window.location.pathname;

if (currentPath === "/index.html") {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
      alert("Form submitted!");
    });
}
