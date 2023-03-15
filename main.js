const colors = ["#FF3324", "#F360BA", "rgba(133,122,200)", "#f15025", "#F37E60", "#0C5729", "#AABBAA"];

const btn = document.getElementById("btn");
const color = document.querySelector('.color');
const titles = document.querySelector('.titles');
const nro = 1;

// titles.style.color = "#F360BA";


btn.addEventListener('click', function () {
    //obtiene un numero random 0 - 3 colors[0]
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    // titles.style.color = colors.length=3;

});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

let i = 0;
while (i <= colors.length){
    i++;
    titles.style.color = colors[i];
    console.log(`${i}`)
}

/* let textos = ["10","20","30"]

let numeros = textos.map(function(texto) {
    return Number(texto);
}) */



