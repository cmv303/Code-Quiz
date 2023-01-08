//global variables
const startButtonClicked = document.querySelector("#start-btn");
const timerEl = document.querySelector(".timer");
const nextBtn = document.querySelector("#nxt-btn");
const restartBtn = document.querySelector("#replay-btn");
const questionsContainerEL = document.querySelectorAll("#quiz-shell");
const choicesEL = document.getElementById("answerChoices");
let timeInterval;
let timer = 59;
let currentQuestionIndex = 0;
let questions = [
  {
    question: "Commonly used data types do NOT include ____.",
    answerChoices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed with _____.",
    answerChoices: [
      "parenthesis",
      "curly brackets",
      "quotes",
      "square brackets",
    ],
    correctAnswer: "parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answerChoices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    answerChoices: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes",
  },
];


function initializeTimer() {
//kicks off game by starting countdown timer once start button is pressed
  timeInterval = setInterval(countDownTimer, 1000);
  fetchNewQuestion();

  function countDownTimer() {
    // decreases countdown timer by 1 if it meets following conditions
    if (timer > 1) {
      timerEl.textContent = timer + " seconds remaining";
      timer--;
    } else if (timer === 1) {
      //changes 'seconds' to 'second' in the singular
      timerEl.textContent = timer + " second remaining";
      timer--;
      clearCountDown();
    }
  }
  function clearCountDown() {
    // return clearCountDown;
    clearInterval(timeInterval);
    if ((timerEl.textContent = "")) {
    }
  }
}

//fetches new questions
function fetchNewQuestion(choiceSelected) {
  currentQuestionIndex++;
  let currentQuestion = questions[currentQuestionIndex];
  let questionEl = document.getElementById("question");
  questionEl.innerText = currentQuestion.question; //! something is wrong with this 'question' property.
  choicesEL.innerHTML = "";
  for (let i = 0; i < currentQuestion.answerChoices.length; i++) {
    let choiceSelected = currentQuestion.answerChoices[i];
    console.log(questionEl.innerText);
    //turns all answer choices to buttons
    let choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choiceSelected");
    choiceBtn.setAttribute("value", choiceSelected);
    choiceBtn.textContent = choiceSelected;
    choicesEL.appendChild(choiceBtn);
    choiceBtn.addEventListener("click", evaluateAnswer);
  }

  function evaluateAnswer() {
    // evaluates whether answer is correct;
    if (fetchNewQuestion.correctAnswer == choiceSelected) {
      fetchNewQuestion(currentQuestion, "Correct"); //!"correct" does not show up
    } else {
        question.innerText = "incorrect"; //!this isn't correct but I want to note that this at least pops up as "a third question"....hmmm...All comes down to the "question" property being off...

      //!how do I make the timer reduce by 10seconds as penalty?
    }
  }
}

// function restartGame(){
// }

//ScoreKeeper
startButtonClicked.addEventListener("click", initializeTimer);
