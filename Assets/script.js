// console.log("hi Hi HI") //* testing to see if everything works. Yes it does

const question = document.getElementById("question-prompt");
const answers = Array.from(document.getElementsByClassName("answer-choices"));
// console.log(answers); Not working as intended...does not show data-set numbers or number within array. Tried adding the same id to all 4 buttons, but that also did not work







// pseudo code:

// 3 steps:
// initialize game, play game, end of game


// initialize game:
// In main body/outer container: I want a timer (should this give you a time limit that works with WHOLE QUIZ.
// I want a win/loss tracker


// play game:
// I want a box with 4 possible questions, each encased in their own box that you can click which will submit that as the answer.

// There should be a hover effect and a before/after that changes colors when clicked. Think about using the keydown method.

// All questions should appear in a random order using the Math.random() method

// The larger box should have:

// I want a button that says START GAME that should be hidden after pressing

// I want a button that says NEXT QUESTION that should be hidden UNTIL starting game.


// end of game:
// when game finishes an alert stating ALL DONE should appear along your final score and a prompt for you to input your initials. final score and initials should be kept using the localStorage method.

// I want a button that says CLEAR HIGH SCORES
// I want my timer to stop counting

// I want a button the START GAME button to also appear here to iniitalize another new game. that means, go back to SHOW.

// I want my timer to reset