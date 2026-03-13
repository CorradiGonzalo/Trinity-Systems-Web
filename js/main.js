document.addEventListener("DOMContentLoaded", () => {
  const mobileSite = document.querySelector(".mobile-site");
  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const bottomItems = document.querySelectorAll(".mobile-bottom-nav a");

  if (menuButton && mobileMenu && mobileSite) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      mobileSite.classList.toggle("menu-open", !isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        mobileSite.classList.remove("menu-open");
      });
    });
  }

  bottomItems.forEach((item) => {
    item.addEventListener("click", () => {
      bottomItems.forEach((link) => link.classList.remove("is-active"));
      item.classList.add("is-active");
    });
  });
});
