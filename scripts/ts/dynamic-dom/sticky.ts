export function setupSticky() {
    // TODO: Copy and paste your sticky code in here!!
    // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("main-menu-container");

// Get the offset position of the navbar
if (header != null) {
    var sticky = header.offsetTop;
}
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky && header != null) {
      header.classList.add("sticky");
    } else if (header != null) {
      header.classList.remove("sticky");
    }
  }

 }