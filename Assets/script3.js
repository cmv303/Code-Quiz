//global variables
const startButtonClicked = document.querySelector("#start-btn");
const timerEl = document.querySelector(".timer");
const nextBtn = document.querySelector("#nxt-btn");
const restartBtn = document.querySelector("#replay-btn");
const questionsContainerEL = document.querySelectorAll("#quiz-shell");
const choicesEL = document.getElementById("answerChoices");
let timeInterval;
let timer = 59;
let currentQuestion;
let currentQuestionIndex = 0;
let questions = [
    {
        question: "Commonly used data types do NOT include ____.",
        answerChoices: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        answerChoices: ["parenthesis", "curly brackets", "quotes", "square brackets"],
        correctAnswer: "parenthesis",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answerChoices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above",
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answerChoices: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer: "quotes",
    },
];


//starts Game
function initializeTimer() {
    //kicks off game by starting countdown timer once start button is pressed
  timeInterval = setInterval(countDownTimer, 1000);
  // let startContainerEL = document.getElementsByClassName("start-container");
//   startContainerEL.setAttribute("class", "hide");
//   questionsContainerEL.removeAttribute("class");
   fetchNewQuestion();

    function countDownTimer() {
    // decreases countdown timer by 1 if it meets following conditions
        if (timer > 1) {
        timerEl.textContent = timer + "  seconds remaining";
        timer--;
        } else if (timer === 1) {
    //changes 'seconds' to 'second' in the singular
        timerEl.textContent = timer + "  second remaining";
        timer--;
        clearCountDown()
        }
    }
    function clearCountDown() {
    // return clearCountDown;
        clearInterval(timeInterval);
        if(timerEl.textContent = "") {
        }
  }
}

//not functioning properly from here below
  function  fetchNewQuestion(choice) {
    currentQuestion = questions[currentQuestionIndex];
    let questionEl = document.getElementById("question"); //!check document type. different things happen in console if different document types are selected. none of them bring up other questions though...
    questionEl.innerText = currentQuestion.question;
    console.log(questionEl)
    choicesEL.innerHTML = "";
    for(let i=0; i<currentQuestion.answerChoices.length; i++) {
    //!is there an easier way to do this for loop without creating these attributes below??
        let choiceSelected = currentQuestion.answerChoices[i]
        let choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choiceSelected");
        choiceBtn.setAttribute("value", choiceSelected);
        choiceBtn.textContent = choiceSelected;
        choicesEL.appendChild(choiceBtn);
    }
    }

// function evaluateAnswer(event) {
//     //tbd
//     if (correctAnswer==true) {
//         return fetchNewQuestion
//     }
//     else {
//         alert("try again");
//         //!how do I make the timer reduce by 10seconds as penalty?
//     }
// }

// function restartGame(){
// }
startButtonClicked.addEventListener("click", initializeTimer);
// answerChoicesClicked.addEventListener("click", evaluateAnswer);
