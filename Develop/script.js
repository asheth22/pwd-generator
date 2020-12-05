//Declaring global variables

var generateBtn = document.querySelector("#generate");
var lCase = ["a","b","c","d","e", "f","g","h","i","j","k","l","o","m","n","p","q","r", "s","t","u","v","w", "x","y","z"];
var uCase = ["A","B","C","D","E","F","G","H","I","J","K","L","O","M","N","P","R", "S","T","U","V","W","X","Y","Z"];
var num   = ["1","2","3","4","5","6","7","8","9"];
var sChar = ['@','%','+','/', "'", '!', '#', '$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var inclc = incuc = incnum = incsp = false;
var pwdLen = 0;
var password = [];
var userpwd;
var instance = 0;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  /* instance++; */
  console.log("instance: ", instance);
  inclc = incuc = incnum = incsp = false;
  pwdLen = 0;
  return;
}

// function to generate the password based on user criteria

function generatePassword() {
  var choices = pwdoptions();
  var pwdchars = [];
  if (choices.inclc) {
    pwdchars = pwdchars.concat(lCase);
  }
  if (choices.incuc) {
    pwdchars = pwdchars.concat(uCase);
  }
  if (choices.incnum) {
    pwdchars = pwdchars.concat(num);
  }
  if (choices.incsp) {
    pwdchars = pwdchars.concat(sChar);
  }
  console.log("Password character set based on user choices: ", pwdchars)

  for (i=0; i<choices.pwdLen; i++) {
    password[i] = randgen(pwdchars);
     if (i===0) {
        userpwd = password[i];
      }
      else {userpwd = userpwd + password[i]}; 
  }
  
  console.log("Generated password is: ", userpwd);
  return userpwd;
}

/*  funtion to prompt user for choices */
    function pwdoptions() {
      while (pwdLen < 8 || pwdLen > 128) {
        pwdLen = parseInt(prompt("What should be the length of the password please specify a number between 8 and 128"))
        if (isNaN(pwdLen) || pwdLen < 8 || pwdLen > 128) {
          alert("Password length must be a number between 8 and 128");              
        } 
      }  
      console.log(inclc, incuc, incnum, incsp);
      while (inclc === false && incuc === false && incnum === false && incsp === false) {
          alert("Select at least one of the four criteria for password")
          inclc = confirm("Do you want to include lower case characters?");
          incuc = confirm("Do you want to include upper case characters?");
          incnum = confirm("Do you want to include numbers?");
          incsp = confirm("Do you want to include specialcharacters?");
          console.log(pwdLen, inclc, incuc, incnum, incsp);  
          var pwdchoices = {pwdLen:pwdLen, inclc:inclc, incuc:incuc, incnum:incnum, incsp:incsp}; 
          
      }
      console.log("pwdchoices ", pwdchoices)
      return pwdchoices;
  }

//  function to generate random charatters for password

function randgen(array) {
  var randindex = Math.floor(Math.random()* array.length);
  var randchar = array[randindex];
  return randchar;
}



