const images = document.getElementsByClassName("productItem");
let imageIndex = 0;
const numberOfImages = images.length;

showImages();

function showImages() {
    let i;
    for (i = 0; i < numberOfImages; i++) {
        images[i].style.display = "none";
    }
    imageIndex++;
    if (imageIndex > numberOfImages) { imageIndex = 1; }

    images[imageIndex - 1].style.display = "block";

    setTimeout(showImages, 2000); // Change image every 2 seconds
}