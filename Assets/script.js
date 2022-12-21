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
//JS 
// In main body I want a timer that should give you a time limit for whole game.
// I want a win/loss tracker


// play game:
// CSS
// I want a box with 4 possible answers, each encased in their own box that you can click which will submit that as the answer.

// CSS
// I want a button that says START GAME that should be hidden after pressing

// CSS
// I want a button that says NEXT QUESTION that should be hidden UNTIL starting game.

// CSS
// There should be a hover effect and a before/after that changes colors when clicked. Think about using the keydown method.

// JS
// All questions should appear in a random order using the Math.random() method


// end of game:
// CSS AND JS
// I want a button (CSS) that says CLEAR HIGH SCORES (JS)

// CSS OR JS (UNSURE)
// I want the START GAME button to also appear here to iniitalize another new game. that means, go back to SHOW.

// JS
// when game finishes an alert stating ALL DONE should appear along your final score and a prompt for you to input your initials. final score and initials should be kept using the localStorage method.

// JSS
// I want my timer to stop counting

// JS
// I want my timer to reset