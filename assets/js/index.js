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
    if (slideIndex > numberOfSlides) {slideIndex = 1;}    

    slides[slideIndex-1].style.display = "block";  
    
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
