(function () {
  const menuBtn = document.querySelector(".mobile-menu");

  const toggleMenu = () => {
    menuBtn.classList.toggle("active");
  };

  menuBtn.addEventListener("click", toggleMenu);
})();
