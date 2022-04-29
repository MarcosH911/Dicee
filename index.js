"use strict";

const dicesImg = document.querySelectorAll("img");
const title = document.querySelector("h1");

const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

dicesImg[0].src = `images/dice${randomNumber1}.png`;
dicesImg[1].src = `images/dice${randomNumber2}.png`;

if (randomNumber1 === randomNumber2) title.textContent = "Draw!";
if (randomNumber1 > randomNumber2) title.textContent = "🚩 Player 1 wins!";
if (randomNumber1 < randomNumber2) title.textContent = "Player 2 wins! 🚩";
