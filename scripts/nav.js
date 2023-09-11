// Initialize a variable to track whether the mobile menu is active or not.
let isActive = false;

// Define a function to toggle the mobile menu.
function toggle() {
  // Check if the mobile menu is currently active.
  if (isActive) {
    // If it's active, remove the 'active' class from the elements to hide the menu.
    document.querySelector(".hamburger").className = "hamburger";
    document.querySelector(".shadow").className = "shadow";
    document.querySelector(".mobile-nav").className = "mobile-nav";
    // Set the isActive flag to false to indicate that the menu is now inactive.
    isActive = false;
  } else {
    // If it's not active, add the 'active' class to the elements to show the menu.
    document.querySelector(".hamburger").className = "hamburger active";
    document.querySelector(".shadow").className = "shadow active";
    document.querySelector(".mobile-nav").className = "mobile-nav active";
    // Set the isActive flag to true to indicate that the menu is now active.
    isActive = true;
  }
}
