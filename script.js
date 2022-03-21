const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

const textArray = ["Product Designer", "UX Designer", "Rookie Dev", "World Citizen"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 200; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    // if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    // cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    // if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    // cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

var gallery1 = document.querySelector(".gallery1");
var gallery2 = document.querySelector(".gallery2");
var btn1 = document.querySelector(".btn1")
var btn2 = document.querySelector(".btn2")

function showGallery1() {
  console.log(gallery1);
  gallery1.style.display="grid";  
  gallery2.style.display="none"
  btn1.style.color= "rgb(255, 255, 0)"
  btn2.style.color= "white"
}
function showGallery2() {
  gallery1.style.display="none";
  gallery2.style.display="grid"; 
  btn1.style.color= "white"
  btn2.style.color= "rgb(255, 255, 0)"   
}

showGallery1()