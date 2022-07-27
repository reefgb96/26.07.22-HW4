"use strict";

//---- Task 1 ----\\

let randNum;
let beteen70To80;

const genRandNumFn = () => {
  randNum = Math.round(Math.random() * 100);
  console.log("Random Num: ", randNum);
};
genRandNumFn();

randNum < 70
  ? console.log("Too small!")
  : randNum < 80
  ? console.log("netween 70 to 80: ", (beteen70To80 = randNum))
  : console.log("Too big!");

//---- Task 2 ----\\

let pow = 5 ** 5;
pow % 2 === 0 ? console.log("5**8 is Even") : console.log("5**8 is Odd");

//---- Task 3 ----\\

let pow2 = 8 ** 9;
pow2 % 2 === 0 ? console.log("8**9 is Even") : console.log("8**9 is Odd");

//---- Task 4 ----\\

let str = "Learn as if you will live forever, live like you will die tomorrow.";

str.includes("if") ? console.log("true") : console.log("false");

//---- Task 5 ----\\

let geniusArr = ["Albert Einstein", "Mahatma Gandhi", "Walter Anderson"];

for (let item of geniusArr) {
  item.startsWith("Walter")
    ? console.log("True: ", item)
    : console.log("False: ", item);
}

//---- Task 6 ----\\

let walterStr =
  'Walter Hartwell "Walt" White Sr., also known by his drug-lord alias Heisenberg, is the protagonist of the American crime drama television series Breaking Bad. The character is portrayed by Bryan Cranston.';

let newWalterStr = walterStr.replace("Bryan", "Walter");
let newWalterStr2 = newWalterStr.replace("Walter", "Bryan");

console.log("Original String: ", walterStr);
console.log("Changed String: ", newWalterStr2);

//---- Task 7 (Optional) ----\\

const input1 = document.querySelector("#inp1");
const input2 = document.querySelector("#inp2");
const input3 = document.querySelector("#inp3");
const input4 = document.querySelector("#inp4");
const calcBtn = document.querySelector("#calcBtn");
const resCol = document.querySelector("#resCol");
const resRow = document.querySelector("#resRow");
const textBox = document.querySelector("#textBox");
const saveBtn = document.querySelector("#saveBtn");
const replaceBtn = document.querySelector("#replaceBtn");
let powRes;

calcBtn.addEventListener("click", () => {
  powRes = input1.value ** input2.value;
  resCol.innerHTML = `The result of ${input1.value} ** ${input2.value} = ${powRes}`;
});

//---- Task 8-A+B (Optional) ----\\

let savedText = [];
let firstWord;

saveBtn.addEventListener("click", () => {
  savedText = textBox.value.split(" ");
  firstWord = [...savedText];
  console.log("text area: ", [savedText]);
  console.log("array: ", firstWord[0]);
});

//---- Task 8-C+D (Optional) ----\\

replaceBtn.addEventListener("click", () => {
  let textToString = savedText.toString().replaceAll(",", " ");
  console.log(" to str: ", textToString);
  let replacedStr = textToString.replaceAll(`${input3.value}`, input4.value);
  let replacedStrAfterFirstWord = replacedStr.split(" ");
  replacedStrAfterFirstWord[0] = "hi";
  console.log("to array: ", ...replacedStrAfterFirstWord);
  console.log("Replaced string: ", replacedStr);
});
