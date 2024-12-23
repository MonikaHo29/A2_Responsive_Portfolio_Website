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

const offScreenMenu = document.querySelector(".off_screen_menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


// BUTTONS - POWER BUTTON
// Button und Bild-Elemente abrufen
const buttonImage = document.getElementById('power_btn');
const targetImage = document.getElementById('head_animation');
const buttonLatestwork = document.getElementById('showLatestwork_btn');
const buttonContact = document.getElementById('showContact_btn');


buttonImage.addEventListener('click', () => {
    if (targetImage.style.display === 'none' || targetImage.style.display === '') {
        targetImage.style.display = 'block';
    } else {
        targetImage.style.display = 'none';
    }
});
buttonImage.addEventListener('click', () => {
  if (buttonLatestwork.style.display === 'none' || buttonLatestwork.style.display === '') {
    buttonLatestwork.style.display = 'block';
  } else {
    buttonLatestwork.style.display = 'none';
  }
});
buttonImage.addEventListener('click', () => {
  if (buttonContact.style.display === 'none' || buttonContact.style.display === '') {
    buttonContact.style.display = 'block';
  } else {
    buttonContact.style.display = 'none';
  }
});


// Elemente abrufen
const openModalBtn = document.getElementById('showLatestwork_btn');
const closeModalBtn = document.getElementById('closeModalBtnBlue');
const modal = document.getElementById('modalBlue');

// Modal öffnen
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Modal sichtbar machen
});

// Modal schließen
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Modal ausblenden
});

// Schließen bei Klick außerhalb des Modals
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});



// Elemente abrufen
const openModalBtn2 = document.getElementById('showContact_btn');
const closeModalBtn2 = document.getElementById('closeModalBtnRed');
const modal2 = document.getElementById('modalRed');

// Modal öffnen
openModalBtn2.addEventListener('click', () => {
    modal2.style.display = 'flex'; // Modal sichtbar machen
});

// Modal schließen
closeModalBtn2.addEventListener('click', () => {
    modal2.style.display = 'none'; // Modal ausblenden
});

// Schließen bei Klick außerhalb des Modals
window.addEventListener('click', (e) => {
    if (e.target === modal2) {
        modal2.style.display = 'none';
    }
});