const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#timeLeft');
const message = document.querySelector('#message');
const timeGame = document.querySelector('#timeGame');
let score = document.querySelector('#result');
let timerId;
var randomPosition;
var timer;
let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare(){
    square.forEach(className => {
        className.classList.remove('mole')
    })
    randomPosition = square[Math.floor(Math.random()*9)];
    randomPosition.classList.add('mole');

    hitPosition=randomPosition.id;
}

square.forEach(card => {
    card.addEventListener('mouseup', ()=>{
        if(card.id ===hitPosition && currentTime !==0){
            result++
            score.textContent=result;
        }
    }
    )
})

function moveMole(){
    timerId = null;
    timerId = setInterval(randomSquare, 1000);

}

moveMole();


function countDown(){
       currentTime--
       timeLeft.textContent=currentTime;

    if(currentTime===0){
        clearInterval(timer);
        clearInterval(timerId)
        message.textContent=`Your final score is ${result}.`
    }
}

function onReset(){
    window.location.reload();
}


timer = setInterval (countDown, 1000);

