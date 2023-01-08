// Add an event listener to the link to copy the text to the clipboard when clicked
const copyLink = document.getElementById("copy-link");

copyLink.addEventListener("click", (event) => {
  // Prevent the default link behavior
  event.preventDefault();

  // Get the text to copy from the data-clipboard-text attribute
  const textToCopy = copyLink.getAttribute("data-clipboard-text");

  // Create a temporary textarea element
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = textToCopy;
  document.body.appendChild(tempTextarea);

  // Select the text in the textarea
  tempTextarea.select();

  // Copy the text to the clipboard
  document.execCommand("copy");

  // Remove the textarea element
  document.body.removeChild(tempTextarea);

  // Update the link text to show that the text has been copied
  copyLink.textContent = "copied!";
});

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");

    // adds the menu (hamburger) icon
    toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
  } else {
    menu.classList.add("active");

    // adds the close (x) icon
    toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
  }
}
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".item");
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}
/* Event Listeners */
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
    item.addEventListener("keypress", toggleItem, false);
  }
}
/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  if (menu.querySelector(".submenu-active")) {
    let isClickInside = menu
      .querySelector(".submenu-active")
      .contains(e.target);
    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}
/* Event listener */
document.addEventListener("click", closeSubmenu, false);
