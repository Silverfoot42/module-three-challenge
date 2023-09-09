var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "1234567890";
  var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var generate = "";

  var length = prompt("Enter the length between 8 - 128 that you want for the password:");
  while (length < 8 || length > 128) {
    length = prompt("Please enter a number greater than 8 and less than 128:");
  }

  var lowercasePrompt = prompt("Would you like to include lower case letters? Type yes or no:");
  while (lowercasePrompt !== "yes" && lowercasePrompt !== "no") {
    lowercasePrompt = prompt("Please only enter yes or no:");
  }
  if (lowercasePrompt === "yes") {
    generate += lowercase;
  } 

  var uppercasePrompt = prompt("Would you like to include uppercase letters in your password? Type yes or no:")
  while (uppercasePrompt !== "yes" && uppercasePrompt !== "no") {
    uppercasePrompt = prompt("Please only enter yes or no:");
  }
  if (uppercasePrompt === "yes") {
    generate += uppercase;
  } 
 
  var numericPrompt = prompt("Would you like to include numbers in your password? Type yes or no:")
  while (numericPrompt !== "yes" && numericPrompt !== "no") {
    numericPrompt = prompt("Please only enter yes or no:");
  }
  if (numericPrompt === "yes") {
    generate += numeric;
  }
  
  var specialPrompt = prompt("Would you like to include special characters in your password? Type yes or no:")
  while (specialPrompt !== "yes" && specialPrompt !== "no") {
    specialPrompt = prompt("Please only enter yes or no:");
  }
  if (specialPrompt === "yes") {
    generate += special;
  }
 
  for (var x = 0; x < length; x++) {
    var character = Math.floor(Math.random() *generate.length + 1);
    password += generate.charAt(character);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);