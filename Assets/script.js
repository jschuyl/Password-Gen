// Assignment Code
console.log(this)
var generateBtn = document.querySelector("#generate");
// characters that are available to use
var char = "abcdefghijklmnopqrstuvwxyz"
var charCAPS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specials = "!@#$%^&*()_+,.<>/? "
var passwordLength = 128; // only works with an int here, for now
var passArray = [char, charCAPS, numbers, specials];
console.log(passArray)
// check for user wants
var useChar = true;
var useCAPS = true;
var useNum = true;
var useSpec = true;


function generatePassword() {
  let newPass = "";
  // these "picky" series let you change things in the code through prompts
  let pickyLength = prompt("How many characters 8-128?");
 
  let pickyChar = prompt("Lowercase letters y/n?");
  if (pickyChar != null) {
    if (pickyChar === "y") {
      useChar = true
    } if (pickyChar === "n"){
      useChar = false
    } 
  }

  let pickyCAPS = prompt("Uppercase letters y/n?");
  if (pickyCAPS != null) {
    if (pickyCAPS === "y") {
      useCAPS = true
    } if (pickyCAPS === "n"){
      useCAPS = false
    }
  }

  let pickyNum = prompt("Numbers y/n?");
  if (pickyNum != null) {
    if (pickyNum === "y") {
      useNum = true
    } if (pickyNum === "n"){
      useNum = false
    }
  }

  let pickySpec = prompt("special characters !@#$%^&*( )_+,.<>/? y/n?");
  if (pickySpec != null) {
    if (pickySpec === "y") {
      useSpec = true
    } if (pickySpec === "n"){
      useSpec = false
    }
  }
  // these check the booleans to see what can be used for the generated password, pushes option to array if true
  if (useChar) {
    passArray.push(char)
  }
  if (useCAPS) {
    passArray.push(charCAPS)
  }
  if (useNum) {
    passArray.push(numbers)
  }
  if (useSpec) {
    passArray.push(specials)
  }
  // loops generatePassword for however long the password is 
  if (pickyLength >= 8 && pickyLength <= 128) {
  for (let i = 0; i < passwordLength; i++) {
    // this says give me a value between zero and three, or zero and however many options we are using
      var arrayNumber = Math.floor(Math.random() * passArray.length);
      // applies which options we chose
      var whatOptions = passArray[arrayNumber];
      // creates a random number that falls on the array, plus one to get to 26 if necessary
      var password = Math.floor(Math.random() * whatOptions.length + 1);
      // displays the random value chosen in passArray until the loop finishes
      newPass = newPass + whatOptions.charAt(password); // can also be written as newPass += whatOptions (cont.)
  }
} else {
   if (pickyLength != null) {
    if (pickyLength < 8) {
      newPass = "too few characters"
    } if (pickyLength > 128) {
      newPass = "too many characters"
    } else passwordLength = pickyLength
  }
}
  return newPass;
}

console.log(password)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
