//1. Input #1- morse this makes english the output, or it will be english

//2. Or it will be english letters which makes the morse the output
//3. Validate hte input (is this valid morse? is this valid english)
//4. Validate the input (empty inputs, what else)
//5. We need to translate this input to the output language

//6. Array 0-25 values = each letter
//7. Deduce the letters from the array position

// Option #1 - store two arrays of 26 values, find the index of one, and you can then find the other
// Option #2 have an object of keyvalues, letters are keys, morse are values
// Option #3 ASCII lookup
// Option #4 switch case, two switch cases of 26 cases

//8. Display this translate on the page

// Test lots of valid inputs
import { expect } from "@jest/globals";
import { translateMorseToEnglish, translateEnglishToMorse } from "./translator";

it("Should translate a to .-", () => {
  const result = translateEnglishToMorse("a");
  expect(result).toBe(".-");
});

// Test lots of invalid inputs

it("should translate invalid to this is not an input"),
  () => {
    const result = translateEnglishToMorse("invalid");
    expect(result).toBe("this is not a valid input");
  };
// Test null/empty string inputs
it("should translate empty input to please enter an input"),
  () => {
    const result = translateEnglishToMorse(" ");
    expect(result).toBe("Please enter an input");
  };
