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
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var underline1 = document.querySelector(".underline1");
var underline2 = document.querySelector(".underline2");

function showGallery1() {
  
  gallery1.style.display="grid";  
  gallery2.style.display="none";
  underline1.style.width="100%";
  underline2.style.width="0";
}
function showGallery2() {
  gallery1.style.display="none";
  gallery2.style.display="grid";
  underline1.style.width="0"; 
  underline2.style.width="100%";  
}

showGallery1()


var toggleSwitch = document.querySelector(".theme");
var iconColors = document.querySelectorAll(".icon-colors");
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  document.body.classList.toggle("light-theme");
  iconColors.forEach(item => {
    item.classList.toggle("icon-colors");
  });
  // console.log(toggleSwitch);
});

