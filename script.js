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
  console.log(true) ; 
}
else {
  alert("Your selection must be between 8 and 128 characters");
}