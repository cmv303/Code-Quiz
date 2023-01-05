//variables
const questions = [
  {
    question: "Commonly used data types do NOT include ____.",
    answers: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers",
    },
    correctAnswer: "c",
  },
  {
    question: "The condition in an if/else statement is enclosed with _____.",
    answers: {
      a: "quotes",
      b: "curly brackets",
      c: "parenthesis",
      d: "square brackets",
    },
    correctAnswer: "c",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: {
      a: "numbers and strings",
      b: "other arrays",
      c: "booleans",
      d: "all of the above",
    },
    correctAnswer: "d",
  },
  {
    queston:
      "String values must be enclosed within _____ when being assigned to variables.",
    answers: {
      a: "commas",
      b: "curly brackets",
      c: "quotes",
      d: "parenthesis",
    },
    correctAnswer: "c",
  },
];
const quizContainer = document.querySelectorAll(".quiz-container");
const startGame = document.querySelectorAll(".start-btn");

startGame(questions, quizContainer, resultsContainer, submitButton);

// INITIALIZING GAME //
function startGame(
  allQuestions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function currentQuestion(allQuestions, quizContainer) {
    let indQuestion = [];
    let answers;

    for (var i = 0; i < allQuestions.length; i++) {
      answers = [];
      for (options in allQuestions[i].answers) {
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            options +
            '">' +
            options +
            ": " +
            allQuestions[i].answers[options] +
            "</label>"
        );
      }
      indQuestion.push(
        '<section id="question-prompt">' +
          allQuestions[i].allQuestions +
          "</section>" +
          '<section id="answer-choices">' +
          answers.join("") +
          "</section>"
      );
    }
    quizContainer.innerHTML = indQuestion.join("");
  }
  function endGame(allQuestions, quizContainer, resultsContainer) {
    const possibleAnswers = quizContainer.querySelectorAll("#answer-choices");

    //tracker
    const userChoice = "";
    const wereTheyCorrect = 0;

    for (var i = 0; i < allQuestions.length; i++) {
      userChoice = (
        possibleAnswers[i].querySelector(
          "input[name=allQuestions" + i + "]:checked"
        ) || {}
      ).value;

      if (userChoice === allQuestions[i].correctAnswer) {
        wereTheyCorrect++;
      }

      resultsContainer.innerHTML =
        wereTheyCorrect + " out of " + allQuestions.length;
    }

    startGame(allQuestions, quizContainer);

    submitButton.onclick = function () {
      endGame(allQuestions, quizContainer, resultsContainer);
    };
  }

  //function for things to happen after finishing game
  // when startButton is pressed
  // then a countdownTimer starts backwards from 60 seconds

  // when startButton is pressed
  // then a random question with 4 multiple choice answ appear

  // when correctAnswer is Clicked
  // the answer button will turn green
  // AND
  // a new question will apear

  // If incorrectAnswer is Clicked
  // the answerButton will turn red
  // AND
  // time will continue to disappear but NO new question will be given

  // When all questions have been exhausted
  // then an Alert will inform you that the quiz is complete
  // AND
  // a prompt will ask user to input initials

  // When all the questions have been exhaused
  // then the countDown timer will remain at 0 seconds

  // const answers = Array.from(document.querySelectorAll(".ans-btn"));
  // console.log(answers); //checks to make sure it's working
  // //? is this necessary, or is const answers enough? or, should i change const answers to const possibleAnswers ? //
  // const countDown = document.querySelectorAll(".timer")
  // //countsdown from 1 minute at start of game
  // //resets if Play Again is activated
  // //*this will be declared within function //
  // const tracker = document.querySelectorAll(".tracker")
  // //keeps track of # of wins and losses
  // const highScore = document.querySelectorAll(".high-score")
  // //keeps track of User's high score
  // alert("Quiz complete!": timerReset)
  //make sure code is good
  // prompt("Please enters your initials": highScore)
  //make sure code is good

  // addEventListener(startButtonClicked)
  //!This needs to induce a countDown to begin//
  // addEventListener(visibilityOn)
  //* for showing buttons on click //
  //?Is this needed?????//
  // addEventListener(visibilityOff)
  //!This is to hide startButton on Click //
  //?Should this be a keydown method instead? //
  // addEventListener(correctAnswerClicked)
  //!This needs to turn the button green AND load next question//
  // addEventListener(incorrectAnswerClicked)
  //!This needs to turn the button red and NOT load next question but keep timer going//
}

//pertains to playingGame//

// function(highScore) {
//     //keeps record high score
//     //? Does this go in playAgain?? //
//     //? Is this a function, or more of an addEvent and/or localstorage situation? Maybe ONE function(endGame) could suffice//
// }

// function(playAgain) {
//     //function to play again and reset timer

//     addEventListener(playAgainClicked)
// //!This needs to restart the game and run all the timer functions again//
// }

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
