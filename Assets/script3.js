//outer variables
let startButton = document.querySelector('#start-btn');
let countDownTimer = 60;
const NEXTBUTTON = document.querySelector('#nxt-btn');
const REPLAYBUTTON = document.querySelector('#replay-btn');
const QUESTIONS = "Commonly used data types do NOT include ____.";


//starts Game
function startGame(event) {
// when startButton is pressed
// then a countdownTimer starts backwards from 60 seconds
        event.preventDefault();
        startButton.innerHTML = "Pressed!";
        console.log("Countdown!");

    function countDownTimer(){}

    }
    startGame





//Loads Next Question
function Questions() {
   
    return FIRSTQUESTION
}
// console.log(Questions())

startButton.addEventListener("click", startGame);
startButton.addEventListener("click", countDownTimer);