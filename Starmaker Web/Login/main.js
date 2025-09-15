const menuButton = document.querySelector(".main-container nav .menu-button");
const closeButton = document.querySelector(".mobile-menu-items .close-button");
const mainContainer = document.querySelector(".main-container");
function redirectTo(url) {
    window.location.href = url;
  }
menuButton.addEventListener("click", () => {
  mainContainer.classList.add("active");
});

closeButton.addEventListener("click", () => {
  mainContainer.classList.remove("active");
});

document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
 
