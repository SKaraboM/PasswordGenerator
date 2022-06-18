const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")


function generatePassword(){
    let passwordString1 = "";
    let passwordString2 = "";
    
    for(let i = 0; i < 15; i++){
        let rand = Math.floor(Math.random() * characters.length)
        let rand2 = Math.floor(Math.random() * characters.length)
        passwordString1 += characters[rand];
        passwordString2 += characters[rand2];
    }
    passwordEl1.innerHTML = passwordString1;
    passwordEl2.innerHTML = passwordString2;
}


