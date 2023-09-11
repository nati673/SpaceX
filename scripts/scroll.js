// Create a new IntersectionObserver and define a callback function to handle intersections.
const observer = new IntersectionObserver(
  function (entries) {
    // Iterate through the entries array.
    entries.forEach(function (section) {
      // Check if the section is currently intersecting the viewport.
      if (section.isIntersecting) {
        // If the section is intersecting, add the 'active' class to it.
        section.target.className = "active";
      }
    });
  },
  {
    // Define the threshold for when an intersection is considered.
    threshold: 0.8, // When 80% of the section is visible, trigger the intersection.
  }
);

// Select all 'section' elements on the page and observe them using the IntersectionObserver.
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
