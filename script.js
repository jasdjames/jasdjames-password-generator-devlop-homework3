// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var passwordLength = prompt("How many characters would you like your password have?")
passwordLength =parseInt(passwordLength)

if (passwordLength > 7 && passwordLength< 129){
  console.log(passwordLength) ; 
}
else {
  alert("Your selection must a number between 8 and 128");
}
var passwordTypes = ["uppercase","lowercase","number","special"]
var passwordSelection = []
var passwordUppercase
var passwordLowercase
var passwordNumber
var paswordSpecial 


// for (var i =0; i < passwordTypes.length; i++) {
//   passwordTypes = prompt("If you would like to include " + passwordTypes[i] + " characters in your password type :" + passwordTypes[i++]);
//   passwordTypes = passwordTypes.toLowerCase();
//   passwordSelection.push(passwordTypes);
  
// }
// for (var j =0; j < 4; j++) {
// console.log(passwordSelection)
// }



var passwordUppercase = prompt("If you would like to include uppercase characters in your password type: uppercase. If not type: x ");
passwordUppercase = passwordUppercase.toLowerCase();
passwordSelection.push(passwordUppercase);

var passwordLowercase = prompt("If you would like to include lowercase characters in your password type: lowercase. If not type: x");
passwordLowercase = passwordLowercase.toLowerCase();
passwordSelection.push(passwordLowercase);

var passwordNumber = prompt("If you would like to include numbers in your password type: number. If not type: x");
passwordNumber = passwordNumber.toLowerCase();
passwordSelection.push(passwordNumber);

var passwordSpecial = prompt("If you would like to include uppercase characters in your password type: special. If not type: x");
passwordSpecial = passwordSpecial.toLowerCase();
passwordSelection.push(passwordSpecial);


