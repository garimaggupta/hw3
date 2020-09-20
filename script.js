///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

function generatePassword() {

  //Initialize password criteria arrays
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = upperCase.toLowerCase();
  var numbers = "1234567890";
  var specialChars = "!@#$%&*,~+"
  var myPassword = "";

  // User input for password length
  var passwordLen = prompt("Please choose password length between 8 and 128")

  /* Check if user entered password length between 8 and 128 and is entering a valid number. 
  / If above condition is not satisfied, then alert the user and ask them to reenter correct value */
  while (isNaN(passwordLen) || passwordLen < 8 || passwordLen > 128) {
    passwordLen = prompt("You entered an invalid value. Please choose password length between 8 and 128")
  } // end password length check while loop

  // Prompt user to enter the password criteria they would like to include in the random generated password
  var isUpperCase = confirm("Would you like to include uppercase characters in your password");
  var isLowerCase = confirm("Would you like to include lowercase characters in your password");
  var isNumbers = confirm("Would you like to include numbers (0-9) in your password");
  var isSpecialChars = confirm("Would you like to include special characters in your password");

  /* If user does not select any criteria, alert them and present the password criteria options again
     until they choose at least one of the options */
  while (isUpperCase === false && isLowerCase === false && isNumbers === false && isSpecialChars === false) {
    alert("You need to choose at least one character set. Please try again")
    var isUpperCase = confirm("Would you like to include uppercase characters in your password");
    var isLowerCase = confirm("Would you like to include lowercase characters in your password");
    var isNumbers = confirm("Would you like to include numbers (0-9) in your password");
    var isSpecialChars = confirm("Would you like to include special characters in your password");
  } //end password criteria check while loop

  // Log user input of console for debugging purposes
  console.log("**************************************************************")
  console.log("password Length: " + passwordLen);
  console.log("isUpperCase: " + isUpperCase);
  console.log("isLowerCase: " + isLowerCase);
  console.log("isNumber: " + isNumbers);
  console.log("isSpecialChars: " + isSpecialChars);

  /* Loop below generates the password based on user input criteria and records the password 
     in myPassword string. This loop utilizes the Math.random() function to pick characters
     randomly from different password criteria strings = Upper and Lower Case, Numbers and Special Chars */
  var i = 0;
  while (i < passwordLen) {

    if (isUpperCase && i < passwordLen) {
      myPassword += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
      i++;
    }

    if (isLowerCase && i < passwordLen) {
      myPassword += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      i++;
    }

    if (isNumbers && i < passwordLen) {
      myPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
      i++;
    }

    if (isSpecialChars && i < passwordLen) {
      myPassword += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
      i++;
    }
  } // end intermediate password generator while loop

  // Log intermediate password to console for debugging purposes
  console.log("My password 1st iteration " + myPassword);
  console.log("Length of my password is " + myPassword.length);

  /* Above generated password still follows a pattern in password string 
     UpperCase -> LowerCase -> Numbers -> Special Characters. 
     So we use additional loop below to further randomize the password string generated above */
  var passwordArray = myPassword.split("");
  var tempIndex = 0;

  for (i = 0; i < passwordArray.length; i++) {
    tempChar = passwordArray[i];
    tempIndex = Math.floor(Math.random() * passwordArray.length);
    passwordArray[tempIndex] = tempChar;
  } // end intermediate password generator for loop

  myPassword = passwordArray.join('');

  // Log final password to console for debugging purposes
  console.log("My password 2nd iteration " + myPassword);
  console.log("**************************************************************")

  return myPassword;
} // end generatePassword()

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} //end writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
