let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let rect = document.getElementsByClassName("rect");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < rect.length; i++) {
      rect[i].className = rect[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  rect[slideIndex-1].className += " active";
}


// HAMBURGER MENU
function hamburgerMenu() {
  var link = document.getElementById("mobile-links");
  if (link.style.display === "block") {
    link.style.display = "none";
  } else {
    link.style.display = "block";
  }
}