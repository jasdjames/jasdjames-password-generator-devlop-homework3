var passwordTypes = ["uppercase","lowercase","number","special"];
var passwordSelection = [];
var passwordUppercase
var passwordLowercase
var passwordNumber
var paswordSpecial 
var password = []
var 

// var userPassword
 // // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
return;
}


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







var passwordLength = prompt("How many characters would you like your password have?")
passwordLength =parseInt(passwordLength)

if (passwordLength > 7 && passwordLength< 129){
  console.log(passwordLength) ; 
}
else {
  alert("Your selection must a number between 8 and 128");
}


// Does not work as expected 
// // debugger
// for (var i = 0; i < passwordTypes.length; i++) {
//   passwordTypes += prompt("If you would like to include "  + passwordTypes[i] + " characters in your password type :" + passwordTypes[i] );
//   passwordTypes = passwordTypes.toLowerCase();
//   passwordSelection.push(passwordTypes);
  
// }
// for (var j = 0; i < passwordTypes.length; j++) {
// console.log(passwordSelection);
// }




var passwordUppercase = prompt("If you would like to include uppercase characters in your password type: uppercase. If not type: z ");
passwordUppercase = passwordUppercase.toLowerCase();
// most users will at least get the first letter of the spelling correct 
passwordUppercase = passwordUppercase.charAt (0);
passwordSelection.push(passwordUppercase);

var passwordLowercase = prompt("If you would like to include lowercase characters in your password type: lowercase. If not type: y ");
passwordLowercase = passwordLowercase.toLowerCase();
passwordLowercase = passwordLowercase.charAt (0);
passwordSelection.push(passwordLowercase);

var passwordNumber = prompt("If you would like to include numbers in your password type: number. If not type:  x");
passwordNumber = passwordNumber.toLowerCase();
passwordNumber = passwordNumber.charAt (0);
passwordSelection.push(passwordNumber);

var passwordSpecial = prompt("If you would like to include uppercase characters in your password type: special. If not type: w");
passwordSpecial = passwordSpecial.toLowerCase();
passwordSpecial = passwordSpecial.charAt (0);
passwordSelection.push(passwordSpecial);

alert("Uppercase is u / Lowercase is l/ Number is n/ Special Charter is s  &  You selected " + passwordSelection );









// for (var i = 0; i < 10; i++) {


if (passwordSelection.includes ("u","l","n","s") ) {
  var userPassword =parseInt(userPassword);
  var userPassword = [0];
  // userPassword =parseInt(userPassword);
  for (var i = 0; i < passwordLength; i++) {
 
  userPassword = Math.floor(Math.random() *93) +33;
console.log (userPassword);

   if (passwordSelection.includes ("z")) {
console.log ("z")
       
   }

password.push(userPassword);
  console.log (password);

  password.slice(0, passwordLength); 
  }
}

// var generatePassword - push? / join? 
//   generatePassword.join('');
  
  
  alert ("Your password is " + password);


