// LOADING PAGE
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


// NAVIGATION - TOGGGLE BURGER MENU
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


// BUTTONS - POWER BUTTON
// Button und Bild-Elemente abrufen
const buttonImage = document.getElementById('showImageBtn');
const targetImage = document.getElementById('image');

buttonImage.addEventListener('click', () => {
    if (targetImage.style.display === 'none' || targetImage.style.display === '') {
        targetImage.style.display = 'block';
    } else {
        targetImage.style.display = 'none';
    }
});