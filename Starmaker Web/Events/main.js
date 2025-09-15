const menuButton = document.querySelector(".main-container nav .menu-button");
const closeButton = document.querySelector(".mobile-menu-items .close-button");
const mainContainer = document.querySelector(".main-container");

menuButton.addEventListener("click", () => {
  mainContainer.classList.add("active");
});

closeButton.addEventListener("click", () => {
  mainContainer.classList.remove("active");
});

document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });


document.addEventListener('DOMContentLoaded', function () {
  const imageItems = document.querySelectorAll('.image-item');

  imageItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      const description = item.dataset.description;
      showImageDescription(description);
    });

    item.addEventListener('mouseleave', function () {
      hideImageDescription();
    });
  });

  function showImageDescription(description) {
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    document.body.appendChild(descriptionElement);
  }

  function hideImageDescription() {
    const descriptionElement = document.querySelector('p');
    if (descriptionElement) {
      descriptionElement.remove();
    }
  }
});
