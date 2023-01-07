//global variables
//!I hear it's better not to have global variables, but to have them in the functions themselves. How do local variables work with querySelectors?
const startButtonClicked = document.querySelector("#start-btn");
const timerEl = document.getElementsByClassName(".timer");
const nextBtn = document.querySelector("#nxt-btn");
const restartBtn = document.querySelector("#replay-btn");
const quizQuestions = "Commonly used data types do NOT include ____."; //!should I link this via className, or better to write all the questions here as an array?

//starts Game
function initializeGame(event) {
  //! when startButton is pressed then a countdownTimer starts backwards from 60 seconds and question is loaded--do I need a function for "startButton" under this initializeGame function??) Also, what about putting load question as it's own function (outside initializeGame), and how would doing so affect the above question about startButton etc?
  event.preventDefault();
  startButtonClicked.innerHTML = "Pressed!";
  console.log("Countdown!");
  return initializeGame; //Should this be returned after the countDownTimer function?
}

function countDownTimer(event) { //!Doesn't work! See console log
  // decreases countdown timer by 1 if it meets following conditions
  event.preventDefault();
  let timer = 60;
  let timeInterval = setInterval(startGame);
  {
    if (timer > 1) {
      timerEl.textContent = timer + "seconds remaining";
      timer--;
    } else if (timer === 1) {
      //changes 'seconds' to 'second' in the singular
      timerEl.textContent = timer + "second remaining";
      timer--;
    } else {
      //doesn't let timer go below zero
      timerEl.textContent = "";
    }
  }

  function clearCountDown() { //!still don't know if this works
    clearInterval(timeInterval);
    return clearCountDown;
  }

  //Loads Next Question
function Questions() { //!Doesn't work!
    quizQuestions
  return quizQuestions;
}
// console.log(Questions())
}

startButtonClicked.addEventListener("click", startGame);
startButtonClicked.addEventListener("click", countDownTimer);
