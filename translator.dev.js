"use strict";

// export const translateMorseToEnglish = (input) => {
//   //Stub
// };
// export const translateEnglishToMorse = (input) => {
//   //Stub
// };
// switch case method
var translateButton = document.getElementById("translate__btn"); // translateButton.addEventListener("click"(translateEnglishToMorse));
// const translateEnglishToMorse = (input) => {

var inputElement = document.getElementById("input__box");
var outputElement = document.getElementById("output__box");
inputElement.addEventListener("keydown", function (event) {
  switch (event.key) {
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
  } //   translateButton.addEventListener("click", () => {
  //     outputElement.innerHTML += output;
  //   });


  outputElement.innerHTML += output;
  console.log(output);
});