const images = document.querySelectorAll(".img[data-src]");

function loadImages() {
  images.forEach((image) => {
    if (!image.src) {
      image.src = image.getAttribute("data-src");
      image.onload = () => {
        image.classList.remove("loading");
      };
      image.classList.add("loading");
    }
  });
}
document.getElementById("loadImagesBtn").addEventListener("click", loadImages);
