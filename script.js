// Assignment Code
var generateBtn = document.querySelector("#generate");

//write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Start function
function generatePassword(){
  var lowercase= "abcdefghijklmnopqrstuvxyz" 
  var uppercase= lowercase.toUpperCase()
  var numbers= "1234567890"
  var special= "!@#$^%&*"
  var characters= "" 
  while(characters=== ""){
    if(confirm("Include lowercase?")){
      characters+=lowercase
    }
    if(confirm("Include uppercase?")){
      characters+=uppercase
    }
    if(confirm("Include number?")){
      characters+=numbers
    }
    if(confirm("Include special characters?")){
      characters+=special
    }
  }
  var password= ""
  var numberofcharacters= 0
  //loop for random selector 
  while(numberofcharacters<8 || numberofcharacters>128){
    numberofcharacters=Number(confirm("number of characters? Choose 8 to 128"))
  }
  for(var i=0; i<numberofcharacters; i++){
    var index= Math.floor(Math.random()*characters.length)
    password += characters[index]
  }
  return password
}

generateBtn.addEventListener("click", writePassword);

