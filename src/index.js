

const loader = document.getElementById("preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);
});