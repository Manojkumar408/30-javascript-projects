const inputBox = document.querySelector(".input-box");
let length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_+-=?{}[]\|";
const allchars = upperCase + lowerCase + number + symbol;

function genrator() {

    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    inputBox.value = password;

}
 function copyPassword(){
    inputBox.select();
    document.execCommand("copy");

 }