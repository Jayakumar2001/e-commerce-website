
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');

  hamburger.addEventListener('click', function () {
      navList.classList.toggle('open');
  });
});



const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  const closePopupHandler = () => {
    popup.classList.add("hide-popup");
    closePopup.removeEventListener("click", closePopupHandler);
  };

  closePopup.addEventListener("click", closePopupHandler);

  // Check if the popup has been shown before
  const popupShown = localStorage.getItem("popupShown");

  // If not, show the popup
  if (!popupShown) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        popup.classList.remove("hide-popup");
        // Set a flag in localStorage indicating that the popup has been shown
        localStorage.setItem("popupShown", "true");
      }, 1000);
    });
  }
}
