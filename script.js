"use strict";

const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const btn = document.querySelector("button");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  btn.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function setRandomGradient() {
  let randomColorHex1 = "#";
  let randomColorHex2 = "#";
  const chars = "abcdef0123456789";

  for (let i = 0; i < 6; i++) {
    randomColorHex1 += chars.charAt(Math.floor(Math.random() * chars.length));
    randomColorHex2 += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  color1.value = randomColorHex1;
  color2.value = randomColorHex2;
  setGradient();
}

function initValueInput() {
  color1.setAttribute("value", "#ff0000");
  color2.setAttribute("value", "#ffff00");

  setGradient();
}

// default gradient initialization
initValueInput();

// Event listeners
btn.addEventListener("click", setRandomGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
