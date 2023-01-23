//arrray
const colors = ["green" , "red" , "yellow" , "black", "blue" ];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" , function(){
    // get the random number 
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

