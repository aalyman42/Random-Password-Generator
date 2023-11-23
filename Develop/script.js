// Assignment code here
var lowercaseText = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseText = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var symbols = [
  "[",
  "]",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  ".",
  ",",
  "?",
  ">",
  "<",
  ";",
  ":",
  "/",
  "`",
  "~",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var option0 = [];
var acceptableLength = prompt("Please enter the amount of desired characters:");
if (acceptableLength > 7 && acceptableLength < 129) {
  if (confirm("Would you like lowercase letters?")) {
    var option1 = option0.concat(lowercaseText);
  } else {
    option1 = option0;
  }
  if (confirm("Would you like uppercase letters?")) {
    var option2 = option1.concat(uppercaseText);
  } else {
    var option2 = option1;
  }
  if (confirm("Would you like symbols?")) {
    var option3 = option2.concat(symbols);
  } else {
    var option3 = option2;
  }
  if (confirm("Would you like numbers?")) {
    var option4 = option3.concat(numbers);
  } else {
    var option4 = option3;
  }
  console.log(option4);
} else {
  alert("Please create a password between 8 and 128 characters.");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
