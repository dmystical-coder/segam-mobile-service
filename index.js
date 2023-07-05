const ham = document.querySelector(".ham");
const mobileNav = document.querySelector(".toggle");

const handleToggler = () => {
  mobileNav.classList.toggle("hidden");
  mobileNav.classList.toggle("flex");
};

ham.addEventListener("click", handleToggler);
mobileNav.addEventListener("click", handleToggler);

// hero carousel
const buttons = document.querySelectorAll("[data-carousel-btn]");
const nextBtn = document.querySelector('[data-carousel-button="next"]');
const slideContainer = document.querySelector("[data-carousel] [data-slides]");
let initialX = null;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const offset = btn.dataset.carouselButton === "next" ? 1 : -1;
    const slides = btn
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

setInterval(() => {
  nextBtn.click();
}, 3000);

slideContainer.addEventListener("touchstart", (e) => {
  initialX = e.touches[0].clientX;
});

slideContainer.addEventListener("touchend", (e) => {
  const finalX = e.changedTouches[0].clientX;
  const deltaX = finalX - initialX;

  let prevBtn, nextBtn;

  prevBtn = document.querySelector('[data-carousel-button="prev"]');
  nextBtn = document.querySelector('[data-carousel-button="next"]');

  if (deltaX > 0) {
    prevBtn.click();
  } else if (deltaX < 0) {
    nextBtn.click();
  }
});

// product carousel
const images = document.getElementsByClassName("productItem");
let imageIndex = 0;
const numberOfImages = images.length;

function showImages() {
  let i;
  for (i = 0; i < numberOfImages; i++) {
    images[i].style.display = "none";
  }
  imageIndex++;
  if (imageIndex > numberOfImages) {
    imageIndex = 1;
  }

  images[imageIndex - 1].style.display = "block";

  setTimeout(showImages, 2000); // Change image every 2 seconds
}

showImages();
