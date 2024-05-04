import "./style.css";

let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "j", "Q", "K"];
let symbols = ["♠", "♥", "♣ ", "♦"];
let colors = ["red", "black"];

let logoTop = document.getElementById("topLogo");
let middleNumber = document.getElementById("number");
let Logobot = document.getElementById("bottomLogo");

const randomValues = Math.floor(Math.random() * values.length);
const randomSymbols = Math.floor(Math.random() * symbols.length);

let color = "";
if (symbols[randomSymbols] === "♥" || symbols[randomSymbols] === "♦") {
  color = colors[0];
} else {
  color = colors[1];
}

logoTop.innerHTML = `<p class='${color}'>${symbols[randomSymbols]}</p>`;
middleNumber.innerHTML = `<p class='${color}'>${values[randomValues]}</p>`;
Logobot.innerHTML = `<p class='${color}'>${symbols[randomSymbols]}</p>`;
