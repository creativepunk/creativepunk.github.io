const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Product Designer",
  "UX Designer",
  "Rookie Dev",
  "World Citizen",
];
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
  } else {
    // cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    // if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    // cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 100);
  }
}



/*Gallery tabs*/

var gallery1 = document.querySelector(".gallery1");
var gallery2 = document.querySelector(".gallery2");
var gallery3 = document.querySelector(".gallery3");
var gallery4 = document.querySelector(".gallery4");

var underline1 = document.querySelector(".underline1");
var underline2 = document.querySelector(".underline2");
var underline3 = document.querySelector(".underline3");
var underline4 = document.querySelector(".underline4");

function showGallery1() {
  gallery1.style.display = "grid";
  gallery2.style.display = "none";
  gallery3.style.display = "none";
  gallery4.style.display = "none";
  underline1.style.width = "100%";
  underline2.style.width = "0%";
  underline3.style.width = "0%";
  underline4.style.width = "0%";
}
function showGallery2() {
  gallery1.style.display = "none";
  gallery2.style.display = "grid";
  gallery3.style.display = "none";
  gallery4.style.display = "none";
  underline1.style.width = "0%";
  underline2.style.width = "100%";
  underline3.style.width = "0%";
  underline4.style.width = "0%";
}
function showGallery3() {
  gallery1.style.display = "none";
  gallery2.style.display = "none";
  gallery3.style.display = "grid";
  gallery4.style.display = "none";
  underline1.style.width = "0%";
  underline2.style.width = "0%";
  underline3.style.width = "100%";
  underline4.style.width = "0%";
}
function showGallery4() {
  gallery1.style.display = "none";
  gallery2.style.display = "none";
  gallery3.style.display = "none";
  gallery4.style.display = "grid";
  underline1.style.width = "0%";
  underline2.style.width = "0%";
  underline3.style.width = "0%";
  underline4.style.width = "100%";
}

// showGallery1();



/*Theme toggle*/
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#chk');
var iconColors = document.querySelectorAll(".icon-colors");
var label = document.querySelector(".label");
var ball = document.querySelector(".ball");
const header = document.querySelector(".main-head");
const menuIcon = document.querySelector(".menu-icon");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('light-theme');
  // 2. Change icon colors
  iconColors.forEach((item) => {
    item.classList.remove("icon-colors");
  });
  // 3. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');

  //4. update toggle class
  label.classList.add("label-dark");
  ball.classList.add("ball-dark");

}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('light-theme');
  // 2. Change icon colors
  iconColors.forEach((item) => {
    item.classList.add("icon-colors");
  });
  // 3. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);

  label.classList.remove("label-dark");
  ball.classList.remove("ball-dark");

}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});


/*Mobile Menu Toggle*/

var menu = document.querySelector(".menu");
var cross = document.querySelector(".cross");
const menuBackground = document.querySelector(".menu-background");

menu.addEventListener('click', () => {
  console.log(menu);
  menuBackground.classList.remove("inactive");
})

cross.addEventListener('click', () => {
  menuBackground.classList.add("inactive");
})


