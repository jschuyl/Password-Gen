// Assignment Code
console.log(this)
var generateBtn = document.querySelector("#generate");
// characters that are available to use
var char = "abcdefghijklmnopqrstuvwxyz"
var charCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specials = "!@#$%^&*()_+,.<>/? "
var passArray = [];
console.log(passArray)
// check for user wants

function generatePassword() {
  let newPass = ""

  let pickyLength = prompt("How many characters 8-128?")
  let useChar = confirm("Use lowercase letters?")
  let useCaps = confirm("Use capital letters?")
  let useNum = confirm("Use Numbers?")
  let useSpec = confirm("Use special characters?")
  if (useChar === true) {
    passArray.push(char)
  } if (useCaps === true)  {
    passArray.push(charCaps)
  } if (useNum === true) {
    passArray.push(numbers)
  } if (useSpec === true) {
    passArray.push(specials)
  } if (useChar === false, useCaps === false, useNum === false, useSpec === false) {
    alert("Please pick at least one option, I can't make something out of nothing");
    return;
  }
  console.log(useChar, useCaps, useNum, useSpec)

  if(pickyLength < 8) {
    alert("Please use at least 8 characters");
    return;
  } if(pickyLength > 128) {
    alert("Please use no more than 128 characters");
    return;
  } else {
    for (i = 0; i < pickyLength; i++) {
      // this says give me a value between zero and three, or zero and however many options we are using
      var arrayNumber = Math.floor(Math.random() * passArray.length);
      // randomly chooses which array object we use
      var whatOptions = passArray[arrayNumber];
      // chooses random value from object length
      var password = Math.floor(Math.random() * whatOptions.length);
      // adds character chosen to the previous character until loop ends
      newPass = newPass + whatOptions.charAt(password); // can also be written as newPass += whatOptions (cont.)
      }
      console.log(newPass)
      console.log(newPass.length)
    } 
    let passwordText = document.querySelector("#password");
    passwordText.value = newPass
  }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
