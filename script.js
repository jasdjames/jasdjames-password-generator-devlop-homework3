var passwordTypes = ["uppercase", "lowercase", "number", "special"];
var passwordSelection = [];
var passwordUppercase
var passwordLowercase
var passwordNumber
var paswordSpecial
var password = []
var passwordAscUpp = ["65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"];
var passwordAscLow = ["97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122"];
var passwordAscNum = ["48", "49,", "50", "51", "52", "53", "54", "55", "56", "57"];
var passwordAscSpe = ["33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "58", "59", "60", "61", "62", "63", "64", "91", "92", "93", "94", "95", "96", "123", "124", "125", "126"];
// var userPassword
// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordSelection;
  return;
}


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);







var passwordLength = prompt("How many characters would you like your password have?")
passwordLength = parseInt(passwordLength)

if (passwordLength > 7 && passwordLength < 129) {
  console.log(passwordLength);
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
passwordUppercase = passwordUppercase.charAt(0);
passwordSelection.push(passwordUppercase);

var passwordLowercase = prompt("If you would like to include lowercase characters in your password type: lowercase. If not type: y ");
passwordLowercase = passwordLowercase.toLowerCase();
passwordLowercase = passwordLowercase.charAt(0);
passwordSelection.push(passwordLowercase);

var passwordNumber = prompt("If you would like to include numbers in your password type: number. If not type:  x");
passwordNumber = passwordNumber.toLowerCase();
passwordNumber = passwordNumber.charAt(0);
passwordSelection.push(passwordNumber);

var passwordSpecial = prompt("If you would like to include uppercase characters in your password type: special. If not type: w");
passwordSpecial = passwordSpecial.toLowerCase();
passwordSpecial = passwordSpecial.charAt(0);
passwordSelection.push(passwordSpecial);

alert("Uppercase is u / Lowercase is l/ Number is n/ Special Charter is s  &  You selected " + passwordSelection);









// for (var i = 0; i < 10; i++) {





if (passwordSelection.includes("u", "l", "n", "s")) {
  var userPassword = parseInt(userPassword);
  var userPassword = [0];
  // userPassword =parseInt(userPassword);
  for (var i = 0; i < passwordLength; i++) {

    userPassword = Math.floor(Math.random() * 93) + 33;
    console.log(userPassword);
    password.push(userPassword);
    console.log(password);

    password.slice(0, passwordLength);
    // password= String.fromCharCode (password);

  }
//  Will Utterback helped me to create these functions - Math is not my strength 
function upperCase(){ 
  passwordSelection = String.fromCharCode(Math.floor(Math.random() * 26) +97);
  return password
}

function lowerCase(){ 
  passwordSelection = String.fromCharCode(Math.floor(Math.random() * 26) +65);
  return password
}

function numbers(){ 
  passwordSelection = String.fromCharCode(Math.floor(Math.random() * 10) +48);
  return password
}

function special(){ 
  passwordSelection = String.fromCharCode(Math.floor(Math.random() * passwordAscSpe.length))
  return password
}

}

// for (var i=0; i< passwordLength; i++) {

//   if (passwordSelection === password )







// if (passwordSelection.includes ("z")) {
// passwordSelection =parseInt(userPassword);
// // passwordSelection = parseInt(passwordAscUpp);
// userPassword = [0]
// for (var i = 0; i < passwordLength; i++)  {
//   userPassword = (Math.floor(Math.random() *93) +33) ; 
//   // WILL THIS LINE WORK?! 
//   // userPassword!= passwordAscUpp; 
//   if(!passwordAscUpp.includes(userPassword))

//   console.log (userPassword);

//   password.push(userPassword);
//   console.log (password);

//   password.slice(0, passwordLength); 
//   }




// var generatePassword - push? / join? 
//   generatePassword.join('');


alert("Your password is " + password);

generateBtn.addEventListener("click", writePassword);
