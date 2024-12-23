/*------------------------------------------FOR LOADING PAGE--------------------------------------------------*/
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


// NAVIGATION - TOGGGLE BURGER MENU
// Elemente auswählen
const burgerMenu = document.getElementById("burgerMenu");
const sideMenu = document.getElementById("sideMenu");
const blueLine = document.querySelector(".blueline");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    sideMenu.classList.toggle("active");
    
    // Blueline ein- oder ausblenden
    if (sideMenu.classList.contains("active")) {
        blueLine.classList.add("hidden");
    } else {
        blueLine.classList.remove("hidden");
    }
});

// Kein Event-Listener auf den Links nötig, wenn sie richtig verlinkt sind


/*------------------------------------------FOR INDEX PAGE--------------------------------------------------*/
//POWER BUTTON (buttons and images)
const buttonImage = document.getElementById('power_btn');
const targetImage = document.getElementById('head_animation');
const buttonLatestwork = document.getElementById('showLatestwork_btn');
const buttonContact = document.getElementById('showContact_btn');

/*-----Window button-----*/
//for white button
buttonImage.addEventListener('click', () => {
    if (targetImage.style.display === 'none' || targetImage.style.display === '') {
        targetImage.style.display = 'block';
    } else {
        targetImage.style.display = 'none';
    }
});
//for blue button
buttonImage.addEventListener('click', () => {
  if (buttonLatestwork.style.display === 'none' || buttonLatestwork.style.display === '') {
    buttonLatestwork.style.display = 'block';
  } else {
    buttonLatestwork.style.display = 'none';
  }
});
//for red button
buttonImage.addEventListener('click', () => {
  if (buttonContact.style.display === 'none' || buttonContact.style.display === '') {
    buttonContact.style.display = 'block';
  } else {
    buttonContact.style.display = 'none';
  }
});
/*-----Modal Blue-----*/
//open window for latest work --> modal
const openModalBtn = document.getElementById('showLatestwork_btn');
const closeModalBtn = document.getElementById('closeModalBtnBlue');
const modal = document.getElementById('modalBlue');

//open modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Modal sichtbar machen
});
//close modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Modal ausblenden
});
//close window outside of modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

/*-----Modal Red-----*/
//open window for contact --> modal
const openModalBtn2 = document.getElementById('showContact_btn');
const closeModalBtn2 = document.getElementById('closeModalBtnRed');
const modal2 = document.getElementById('modalRed');

//opne modal
openModalBtn2.addEventListener('click', () => {
    modal2.style.display = 'flex'; // Modal sichtbar machen
});

//close modal
closeModalBtn2.addEventListener('click', () => {
    modal2.style.display = 'none'; // Modal ausblenden
});

//close window outside of modal
window.addEventListener('click', (e) => {
    if (e.target === modal2) {
        modal2.style.display = 'none';
    }
});