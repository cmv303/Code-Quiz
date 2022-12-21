console.log("hi Hi HI") //tests to see if everything works. Yes it does

const startGame = document.querySelectorAll(".start-btn")

const question = document.getElementById("question-prompt");
const currentQuestion
//? is this necesssary, or is const question enough? //
const rndQueston

const answers = Array.from(document.querySelectorAll(".ans-btn"));
console.log(answers); //checks to make sure it's working
const correctAnswer
const incorrectAnswer
//? is this necessary, or is const answers enough? or, should i change const answers to const possibleAnswers ? //

const timer = document.querySelectorAll(".timer") //countsdown from 1 minute at start of game
const timerReset //resets if Play Again is activated
//*this will be declared within function //
const tracker = document.querySelectorAll(".tracker") //keeps track of # of wins and losses
const highScore = document.querySelectorAll(".high-score") //keeps track of User's high score


// INITIALIZING GAME //
function(startGame) { 
    //function to activate game.
    }


addEventListener(visibility)
//* for hiding buttons on click //
//* for showing buttons on click //
//?Should this be a keydown method instead? //

alert("Quiz complete!": timerReset) //make sure code is good
prompt("Please enters your initials": highScore) //make sure code is good





function(playingGame) {
    //function for things to happen while playing
}
//? Is this necessary? was thinking that if this function were here, then all question and answer if/else statements could be included in this function //

function(playAgain) {
    //function to play again and reset timer
}

//? Can this go in playingGame?? //
function(highScore) { 
    //keeps record high score
}

//? Is this a function, or more of an addEvent and/or localstorage situation? Maybe ONE function(endGame) could suffice//
function(tracker) { 
    //keeps record of wins and losses
}

//? Is this a function, or more of an addEvent and/or localstorage situation? Maybe ONE function(endGame) could suffice//





// pseudo code:

// 3 steps:
// initialize game, play game, end of game


// initialize game:
// CS
// I want a start button that begins

// JS
// Timer Countdown to start

// JS
// First Question to appear


// play game:
// CSS
// ✅I want a box with 4 possible answers, each encased in their own box that you can 

// JS
// click which will submit that as the answer.

// CSS
// ✅I want a button that says START GAME that should 

// JS
// be hidden after pressing

// CSS
// ✅I want a button that says NEXT QUESTION that should

// JS
// be hidden UNTIL starting game.

// CSS
// ✅There should be a hover effect

// CSS
// and a before and after that changes colors

// JS
// when clicked. Think about using the keydown method.

// JS
// All questions should appear in a random order using the Math.random() method


// end of game:
// JS
// an alert stating ALL DONE should appear

// JS
// and prompt you to input your initials. (final score and initials should be kept using the localStorage method.)

// JS
// I want my timer to stop counting

// CSS
// I want a win/loss tracker

// JS
// that keeps score

// CSS
// ✅I want a button (CSS) that Play Again? that 

// JS
// if clicked Will cause my timer to reset