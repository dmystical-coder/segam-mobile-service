const slides = document.getElementsByClassName("carousel-item");

let slideIndex = 0;
const numberOfSlides = slides.length;

showSlides();

function showSlides() {
  let i;
  for (i = 0; i < numberOfSlides; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > numberOfSlides) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


document.addEventListener('onload', controlPlay());

function controlPlay() {
  let audio = document.getElementById("myAudio");
  audio.currentTime = 0;
  audio.play();
  console.log(audio.currentTime); // this is to check the currentTime in the console log

  setInterval(function () {
    if (audio.currentTime > 15) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, 1000);
}
