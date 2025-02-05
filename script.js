// Get the current page's path
const currentPath = window.location.pathname;

// Add event listeners and functions based on the current page
if (currentPath === "/") { //index.html
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted from index!");
  });
} else if (currentPath === "/about.html") {
  // Add code specific to about.html
  console.log("About page loaded");
  const aboutParagraph = document.getElementById("about-me");
  if (aboutParagraph) {
    aboutParagraph.textContent = "This text is dynamically added to the about page.";
  }
} else if (currentPath === "/projects.html") {
  // Add code specific to projects.html
  console.log("Projects page loaded");
  const projectsHeading = document.querySelector("#projects h2");
  if (projectsHeading) {
    projectsHeading.textContent = "My Awesome Projects!";
  }
} else {
  // Add default or fallback code
  console.log("Other page loaded");
}

