// ==== ELEMENTEN SELECTEREN (DOM) =====
// document.querySelector zoekt in de html het element met dat id
// Daarna kan het element aangepast worden met JavaScript
const myAudio = document.querySelector("#myAudio"); // element voor muziek
const startButton = document.querySelector("#startButton"); // knop om te starten
const startScreen = document.querySelector("#startScreen"); // startscherm
const gameContent = document.querySelector("#gameContent"); // spelscherm

// Character clothing images
const pants = document.querySelector("#pants");
const shirt = document.querySelector("#shirt");

// Pants buttons
const pants1Button = document.querySelector("#pants1Button");
const pants2Button = document.querySelector("#pants2Button");
const noPantsButton = document.querySelector("#noPantsButton");

// Shirt buttons
const shirt1Button = document.querySelector("#shirt1Button");
const shirt2Button = document.querySelector("#shirt2Button");
const noShirtButton = document.querySelector("#noShirtButton");

// status van het spel:
// boolean = true/false, hiermee wordt voorkomen dat het spel meerdere keren runt.
let gameStarted = false;

// ====== FUNCTIONS ======

// Make clothing appear
function showClothing(clothingItem, imagePath) {
  clothingItem.src = imagePath; // src = pad naar afbeelding
  clothingItem.classList.remove("hidden"); // classlist = lijst met CSS classes
}

// Hide clothing
// class hidden toevoegen (CSS regelt dat het verdwijnt)
function hideClothing(clothingItem) {
  clothingItem.classList.add("hidden");
}

// Spel starten:
// - check: alleen uitvoeren als het nog niet gestart is
// - audio afspelen
// - startscherm verbergen, game scherm tonen
function startGame() {
  if (!gameStarted) {
    // ! betekent "niet"
    gameStarted = true; // status omzetten naar "gestart"

    myAudio.play(); // start muziek

    startScreen.classList.add("hidden"); // startscherm weg
    gameContent.classList.remove("hidden"); // game content zichtbaar
  }
}

// ====== EVENT LISTENERS ======
// als event gebeurt, voer code uit

// Start button
// bij klik --> startGame uitvoeren
startButton.addEventListener("click", startGame);

// ---- Pants ----
// bij klik broek afbeelding instellen en zichtbaar maken
pants1Button.addEventListener("click", function () {
  showClothing(pants, "images/pants1.png");
});

pants2Button.addEventListener("click", function () {
  showClothing(pants, "images/pants2.png");
});

// bij klik broek verbergen
noPantsButton.addEventListener("click", function () {
  hideClothing(pants);
});

// ---- Shirts ----
// bij klik shirt afbeelding instellen en zichtbaar maken
shirt1Button.addEventListener("click", function () {
  showClothing(shirt, "images/tshirt1.png");
});

shirt2Button.addEventListener("click", function () {
  showClothing(shirt, "images/tshirt2.png");
});

// bij klik shirt verbergen
noShirtButton.addEventListener("click", function () {
  hideClothing(shirt);
});
