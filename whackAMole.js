const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
let timeLeft = document.querySelector('#timeLeft');
let score = document.querySelector('#result');
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

square.forEach(id => {
    id.addEventListener('mouseup', ()=>{
        if(id.id ===hitPosition && currentTime !==0){
            result++
            score.textContent=result;
        }
    }
    )
})

function moveMole(){
    var timerId = null;
    timerId = setInterval (randomSquare, 1000);
    if(timeLeft===0){
        clearInterval(timerId);
    }
}

moveMole();

function countDown(){
  
       currentTime--
       timeLeft.textContent=currentTime;

    if(currentTime===0){
        currentTime=0;
        square.forEach(className => {
            className.classList.remove('mole')
        })
        clearInterval(timer);
       // alert('GameOver ! your final score is '+result+ '.');
        
    }
}

function onReset(){
    window.location.reload();
}


timer = setInterval (countDown, 1000);

