const navbarToggle = document.querySelector(".navbar-toggle");
const contentMenu = document.querySelector(".content-menu");
const navMenu = document.querySelector(".nav-menu");
const NavToggle = document.querySelector(".toggled");
const desktopHeader = document.querySelector(".desktop-header");

//Navigation Icon Toggle

navbarToggle.addEventListener("click", () => {
  // Add a click event listener to the `navbarToggle` element. When the element is clicked, the function inside the arrow function will be executed.

  if (contentMenu.classList.contains("open")) {
    // If the `contentMenu` element contains the "open" class, execute the following code:

    contentMenu.classList.remove("open");
    // Remove the "open" class from the `contentMenu` element.

    contentMenu.classList.add("close");
    // Add the "close" class to the `contentMenu` element.

    NavToggle.classList.add("toggled");
    // Add the "toggled" class to the `NavToggle` element.

  } else {
    // If the `contentMenu` element does not contain the "open" class, execute the following code:

    contentMenu.classList.add("open");
    // Add the "open" class to the `contentMenu` element.

    contentMenu.classList.remove("close");
    // Remove the "close" class from the `contentMenu` element.

    NavToggle.classList.remove("toggled");
    // Remove the "toggled" class from the `NavToggle` element.

  }
});


//Navigation Bar on scroll logic
let lastScroll = 0;
// Initialize a variable called `lastScroll` to 0. This variable will be used to keep track of the last scroll position.

window.addEventListener('scroll', () => {
  // Add an event listener to the window object, which listens for the 'scroll' event. When this event occurs, the function inside the arrow function will be executed.

  const currentScroll = window.pageYOffset;
  // Get the current scroll position using the `pageYOffset` property of the `window` object, and assign it to the `currentScroll` variable.

  if (currentScroll <= 0) {
    desktopHeader.classList.remove("scroll-up");
  }
  // If the current scroll position is at the top of the page (i.e., less than or equal to 0), remove the "scroll-up" class from the `desktopHeader` element.

  if (currentScroll > lastScroll && !desktopHeader.classList.contains("scroll-down")) {
    desktopHeader.classList.remove("scroll-up");
    desktopHeader.classList.add("scroll-down");
  }
  // If the current scroll position is greater than the last scroll position AND the `desktopHeader` element does not contain the "scroll-down" class, remove the "scroll-up" class and add the "scroll-down" class to the `desktopHeader` element.

  if (currentScroll < lastScroll && desktopHeader.classList.contains("scroll-down")) {
    desktopHeader.classList.remove("scroll-down");
    desktopHeader.classList.add("scroll-up");
  }
  // If the current scroll position is less than the last scroll position AND the `desktopHeader` element contains the "scroll-down" class, remove the "scroll-down" class and add the "scroll-up" class to the `desktopHeader` element.

  lastScroll = currentScroll;
  // Update the `lastScroll` variable with the current scroll position, so it can be used as the last scroll position in the next `scroll` event.
});

// navlink highlighting
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    // Remove the "active" class from all nav links
    navLinks.forEach(link => {
      link.classList.remove("active");
    });

    // Add the "active" class to the clicked nav link
    navLink.classList.add("active");
  });
});
