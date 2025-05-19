
let button = document.querySelector('button');
let body = document.querySelector('body');
let colors = ['blue', 'red', 'orange', 'green', 'yellow'];
function clr() {
    let index = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[index];
}
button.addEventListener("click", clr);