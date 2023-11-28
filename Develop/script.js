// Assignment code //
//DECLARING GLOBAL VARIABLE ARRAYS//
var letters = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var lowercaseText = letters.split(" ");
var upper = letters.toUpperCase();
var uppercaseText = upper.split(" ");
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
var optionCombo = [];

//FUNCTION DECLARATION FOR VARIABLE generatePassword//
function generatePassword() {
  //CHECKING IF PASSWORD FITS REQUIRED SIZE//
  var acceptableLength = prompt(
    "Please enter the amount of desired characters:"
  );
  if (acceptableLength > 7 && acceptableLength < 129) {
    //CHOOSING WHICH VARIABLE ARRAYS THE USER ALLOWS TO CONCATINATE INTO POSSIBLE VALUES//
    //CHOOSING IF LOWERCASE VALUES ARE ALLOWED//
    if (confirm("Would you like lowercase letters?")) {
      var option1 = option0.concat(lowercaseText);
      //USER DECLINES LOWERCASE VALUES//
    } else {
      var option1 = option0;
    }
    //CHOOSING IF UPPERCASE VALUES ARE ALLOWED//
    if (confirm("Would you like uppercase letters?")) {
      var option2 = option1.concat(uppercaseText);
      //USER DECLINES UPPERCASE VALUES//
    } else {
      var option2 = option1;
    }
    //CHOOSING IF SYMBOLS VALUES ARE ALLOWED//
    if (confirm("Would you like symbols?")) {
      var option3 = option2.concat(symbols);
      //USER DECLINES SYMBOL VALUES//
    } else {
      var option3 = option2;
    }
    //CHOOSING IF NUMBER VALUES ARE ALLOWED//
    if (confirm("Would you like numbers?")) {
      var option4 = option3.concat(numbers);
      //USER DECLINES NUMBER VALUES//
    } else {
      var option4 = option3;
    }
    //CHOOSING RANDOM VALUES FROM COMBINED LIST//
    let n = 0;
    while (n < acceptableLength) {
      n++;
      //ADDING RANDOMLY CHOSEN VALUES TO A SINGLE ARRAY//
      optionCombo.unshift(option4[Math.floor(option4.length * Math.random())]);
    }
    //CONVERTING ARRAY OF RANDOM VALUES TO STRING//
    squeezePassword = optionCombo.toString();
    //REMOVING "," FROM STRING//
    yourPassword = squeezePassword.replaceAll(",", "");
    //GENERATE PASSWORD//
    return yourPassword;
  }
  //ALERT IF PASSWORD IS TOO LARGE OR SMALL//
  else {
    alert("Please create a password between 8 and 128 characters.");
  }
}

//Source Code courtesy of https://github.com/coding-boot-camp/friendly-parakeet//
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
