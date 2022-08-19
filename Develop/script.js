// Assignment Code
console.log(this)
var generateBtn = document.querySelector("#generate");
// characters that are available to use
var char = "abcdefghijklmnopqrstuvwxyz"
var charCAPS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specials = "!@#$%^&*()_+,.<>/? "
var passwordLength = "";
var passArray = [char, charCAPS, numbers, specials];


function generatePassword() {
  let newPass = ""
  for (let i = 0; i < passwordLength; i++) {
     var password = Math.floor(Math.random()*char.passwordLength + 1);
      newPass += char.charAt(password)
  }
  return newPass
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
