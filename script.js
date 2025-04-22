const slideshow = document.getElementById('slideshow');
const images = [
  'images/istockphoto-2158018292-612x612.jpg',
  'images/CH_BAD_ROMAN_NYC_ROUND_1_020323952A.jpg',
  'images/spaguetti.jpg'
];

let currentIndex = 0;

function showNextImage() {
  slideshow.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(showNextImage, 3000);
showNextImage(); 
