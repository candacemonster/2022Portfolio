// hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.querySelector(".site-nav ul");

  mobileMenu.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});

// page under construction
function underConstructionAlert() {
  alert(
    "The Projects page is currently under construction. Please check back soon for updates!"
  );
}
