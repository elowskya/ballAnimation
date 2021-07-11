//make ball targetable for JS
const ball = document.getElementById('ball');

let velocityX = 0;//number data type
let flag = true; //start program to automatically run from left to right

const setPosition = () => {
    if (flag) {
        velocityX += 20;
        ball.style.left = velocityX + "px"; //string data type
        if (velocityX >= window.innerWidth - 58) {
            flag = false;
        }}

    else {
        ball.style.left = velocityX + "px";
        velocityX -= 20;
        if (ball.style.left === "0px") {
            flag = true;
        }
    }
} 

setInterval(setPosition, 350);