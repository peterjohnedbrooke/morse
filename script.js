// Put your event handlers in here

// import {
//   translateMorseToEnglish,
//   translateEnglishToMorse,
// } from "./translator.js";

const translateButton = document.getElementById("translate__btn");
const inputElement = document.querySelector("#input__box");
const outputElement = document.querySelector("#output__box");
const eraseButton = document.getElementById("erase__btn");
// const languageSelectorEnglish = (document.getElementById("language").value =
//   "english");
// const languageSelectorMorse = (document.getElementById("language").value =
//   "english");
const languageSelector = document.getElementById("language");
const imageToTranslate = document.getElementById("image1");
const imageForTranslate = document.getElementById("image2");

eraseButton.addEventListener("click", () => {
  inputElement.value = "";
  outputElement.innerHTML = "";
});
languageSelector.addEventListener("change", () => {
  if (languageSelector.value === "1") {
    imageToTranslate.style.backgroundImage =
      "url('./images/1200px-Flag_of_the_United_Kingdom.svg.webp')";
    imageForTranslate.style.backgroundImage =
      "url('./images/97a66730c699e837c2baa6321e792b98.jpg')";
    inputElement.addEventListener("input", (event) => {
      let output = null;
      switch (event.data) {
        case "a":
          output = ".-";
          break;
        case "b":
          output = "-...";
          break;
        case "c":
          output = "-.-.";
          break;
        case "d":
          output = "-..";
          break;
        case "e":
          output = ".";
          break;
        case "f":
          output = "..-.";
          break;
        case "g":
          output = "--.";
          break;
        case "h":
          output = "....";
          break;
        case "i":
          output = "..";
          break;
        case "j":
          output = ".---";
          break;
        case "k":
          output = "-.-";
          break;
        case "l":
          output = ".-..";
          break;
        case "m":
          output = "--";
          break;
        case "n":
          output = "-.";
          break;
        case "o":
          output = "---";
          break;
        case "p":
          output = ".--.";
          break;
        case "q":
          output = "--.-";
          break;
        case "r":
          output = ".-.";
          break;
        case "s":
          output = "...";
          break;
        case "t":
          output = "-";
          break;
        case "u":
          output = "..-";
          break;
        case "v":
          output = "...-";
          break;
        case "w":
          output = ".--";
          break;
        case "x":
          output = "-..-";
          break;
        case "y":
          output = "-.--";
          break;
        case "z":
          output = "--..";
          break;
      }
      inputElement.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "Space":
            output = "/";
            break;
        }
      });
      console.log(output);
      translateButton.addEventListener("click", () => {
        input = event.target.innerHTML;
        outputElement.innerHTML += output + "/";
      });
    });
  } else if (languageSelector.value == "2") {
    imageForTranslate.style.backgroundImage =
      "url('./images/1200px-Flag_of_the_United_Kingdom.svg.webp')";
    imageToTranslate.style.backgroundImage =
      "url('./images/97a66730c699e837c2baa6321e792b98.jpg')";
    inputElement.addEventListener("input", (event) => {
      let output = " ";
      switch (event.data) {
        case ".-/":
          output = "a";
          break;
        case "-.../":
          output = "b";
          break;
        case "-.-./":
          output = "c";
          break;
        case "-../":
          output = "d";
          break;
        case "./":
          output = "e";
          break;
        case "..-./":
          output = "f";
          break;
        case "--./":
          output = "g";
          break;
        case "..../":
          output = "h";
          break;
        case "../":
          output = "i";
          break;
        case ".---/":
          output = "j";
          break;
        case "-.-/":
          output = "k";
          break;
        case ".-../":
          output = "l";
          break;
        case "--/":
          output = "m";
          break;
        case "-./":
          output = "n";
          break;
        case "---/":
          output = "o";
          break;
        case ".--./":
          output = "p";
          break;
        case "--.-/":
          output = "q";
          break;
        case ".-./":
          output = "r";
          break;
        case ".../":
          output = "s";
          break;
        case "-/":
          output = "t";
          break;
        case "..-/":
          output = "u";
          break;
        case "...-/":
          output = "v";
          break;
        case ".--/":
          output = "w";
          break;
        case "-..-/":
          output = "x";
          break;
        case "-.--/":
          output = "y";
          break;
        case "--../":
          output = "z";
          break;
      }

      console.log(output);
      translateButton.addEventListener("click", () => {
        let input = "";
        input = event.target.innerHTML;
        outputElement.innerHTML += output + " ";
      });
    });
  }
});
