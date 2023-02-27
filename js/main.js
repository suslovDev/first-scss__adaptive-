(function () {
  const mainMenu = document.getElementById("main-menu");
  const burger = document.getElementById("burger");
  burger.addEventListener("click", () => {
    mainMenu.classList.toggle("show-menu");
    const currentBurgerSrc = burger.firstElementChild.getAttribute("src");
    const burgerSrc =
      currentBurgerSrc !== "./img/burger-close.png"
        ? "./img/burger-close.png"
        : "./img/burger.png";
    burger.firstElementChild.setAttribute("src", burgerSrc);
  });
})();
