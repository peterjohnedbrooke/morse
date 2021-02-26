"use strict";

// Put your event handlers in here
// import {
//   translateMorseToEnglish,
//   translateEnglishToMorse,
// } from "./translator.js";
var translateButton = document.getElementById("translate__btn");
var inputElement = document.getElementById("input__box");
var outputElement = document.getElementById("output__box");
var eraseButton = document.getElementById("erase__btn"); // const languageSelectorEnglish = (document.getElementById("language").value =
//   "english");
// const languageSelectorMorse = (document.getElementById("language").value =
//   "english");

var languageSelector = document.getElementById("language");
languageSelector.addEventListener("change", function () {
  if (languageSelector.value === "1") {
    inputElement.addEventListener("input", function (event) {
      var output = "";

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

      inputElement.addEventListener("keydown", function (event) {
        switch (event.key) {
          case "Space":
            output = "/";
            break;
        }
      });
      console.log(output);
      translateButton.addEventListener("click", function () {
        input = event.target.innerHTML;
        outputElement.innerHTML += output + "/";
      });
    });
  } else if (languageSelector.value == "2") {
    inputElement.addEventListener("input", function (event) {
      var output = " ";

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
      translateButton.addEventListener("click", function () {
        var input = "";
        input = event.target.innerHTML;
        outputElement.innerHTML += output + " ";
      });
    });
  }
});
eraseButton.addEventListener("click", function () {
  inputElement.value = "";
  outputElement.innerHTML = "";
  output.innerHTML = "";
  input.innerHTML = "";
});