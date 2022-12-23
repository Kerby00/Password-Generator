// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.click();
var passlength;
var lowercase;
var uppercase;
var numeric;
var special;

var use
var numbersval = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerval = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperval = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialval = ["!", "@", "#", "$", "%", "&", "*", "?"];

function prompts() {
// This asks the user how much character length is disired, if not inbetween 8 and 128 it wont move on
while (true) {
 passlength = window.prompt("Prefered password length, between 8 and 128 characters")
  if (passlength > 7 && passlength < 129) {
    console.log(passlength); break;
  }
}
// asks the user if theyd like to include lowercase letters in password
while (true) {
   lowercase = window.prompt("Include lowercase characters in password? Yes or No?")
  if (lowercase.toLowerCase() == "yes" || lowercase.toLowerCase() == "no") {
    console.log(lowercase); break;
  }
}
//asks user if theyd like uppercase letters in  password
while (true) {
   uppercase = window.prompt("Include UpperCase characters in password? Yes or No?")
  if (uppercase.toLowerCase() == "yes" || uppercase.toLowerCase() == "no") {
    console.log(uppercase); break;
  }
}
//asks user if theyd like numers in password
while (true) {
   numeric = window.prompt("Include Numbers in password? Yes or No?")
  if (numeric.toLowerCase() == "yes" || numeric.toLowerCase() == "no") {
    console.log(numeric); break;
  }
}
// asks user if theyd like special characters in password
while (true) {
   special = window.prompt("Include Special characters in password? Yes or No?")
  if (special.toLowerCase() == "yes" || special.toLowerCase() == "no") {
    console.log(special); break;
  }
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}
function generatePassword() {
var userinput = [];
  if (special.toLowerCase() == "yes") {
    userinput = userinput.concat(specialval);
  }
  if (numeric.toLowerCase() == "yes") {
    userinput = userinput.concat(numbersval);
  }
  if (lowercase.toLowerCase() == "yes") {
    userinput = userinput.concat (lowerval);
  }
  if (uppercase.toLowerCase() == "yes") {
    userinput = userinput.concat(upperval);
  }
  var genpass = ""
  for (var i = 0; i < passlength; i++){
  genpass += userinput [Math.floor(Math.random()*userinput.length)]
  }
  console.log(userinput);
  return genpass
}

// Add event listener to generate button
generateBtn.addEventListener("click", prompts);
generateBtn.addEventListener("click", writePassword);




