// Assignment Code
var generateBtn = document.querySelector("#generate");

// This asks the user how much character length is disired, if not inbetween 8 and 128 it wont move on
while (true) {
  var passlength = window.prompt("Prefered password length, between 8 and 128 characters")
  if (passlength > 7 && passlength < 129) {
    console.log(passlength); break;
  }
}
// asks the user if theyd like to include lowercase letters in password
while (true) {
  var lowercase = window.prompt("Include lowercase characters in password? Yes or No?")
  if (lowercase == "yes" || lowercase == "no") {
    console.log(lowercase); break;
  }
}
//asks user if theyd like uppercase letters in  password
while (true) {
  var Uppercase = window.prompt("Include UpperCase characters in password? Yes or No?")
  if (Uppercase == "yes" || Uppercase == "no") {
    console.log(Uppercase); break;
  }
}
//asks user if theyd like numers in password
while (true) {
  var Numeric = window.prompt("Include Numbers in password? Yes or No?")
  if (Numeric == "yes" || Numeric == "no") {
    console.log(Numeric); break;
  }
}
// asks user if theyd like special characters in password
while (true) {
  var special = window.prompt("Include Special characters in password? Yes or No?")
  if (special == "yes" || special == "no") {
    console.log(special); break;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

var passpref = [passlength, lowercase, Uppercase, Numeric, special]
console.log(passpref)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





