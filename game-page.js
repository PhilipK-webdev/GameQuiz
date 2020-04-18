// var hostNameUrl = window.location.href;
var Questions = [

    {
        question: "First Question ",
        answers: ["assignment to varieble", "compare between the objects", "doesnt have any meaning ", "all wrong"],
        correctAnswer: 0
    },
    {
        question: "Second Question",
        answers: ["assignment to varieble", "compare between the objects", "doesnt have any meaning ", "all wrong"],
        correctAnswer: 1
    },
    {
        question: "Third Question ",
        answers: ["assignment to varieble", "compare between the objects", "doesnt have any meaning ", "all wrong"],
        correctAnswer: 3
    }
];

console.log(Questions.length + "the object length");


var numQuestion = 0;

var userScore = 0;
var gameSeconds = 90;
var classFlag = true;
var answerIndex = 0;
var firstOption = document.querySelector("#option1");
var secondOption = document.querySelector("#option2");
var thirdOption = document.querySelector("#option3");
var lastOption = document.querySelector("#option4");
var timerRun = document.querySelector("#timer-run");
var question = document.querySelector("#question");
var containerForm = document.querySelector(".container");
var items = document.querySelector("#items");


init();


















function startIntervel() {


    var gameToPlay = setInterval(function () {

        gameSeconds--;
        timerRun.textContent = "Time: " + gameSeconds;

        if (gameSeconds < 0 || numQuestion > Questions.length - 1) {

            clearInterval(gameToPlay);
            containerForm.setAttribute("class", "container-display");
            question.style.display = "none";
            items.style.display = "none";
            timerRun.textContent = "Time";

        }

    }, 1000)
}

function startTheGameQuiz() {


    var arrayOfOptions = [firstOption, secondOption, thirdOption, lastOption];

    changeTheHTML(numQuestion);

    for (var i = 0; i < 4; i++) {

        arrayOfOptions[i].addEventListener("click", function (event) {


            var id = event.target.id;

            if (id === "option1") {

                answerIndex = 0;
            } else if (id === "option2") {

                answerIndex = 1;

            } else if (id === "option3") {

                answerIndex = 2;
            } else {
                answerIndex = 3;
            }

            if (numQuestion < Questions.length) {

                if (Questions[numQuestion].correctAnswer === answerIndex) {

                    userScore += 10;
                    console.log(userScore);
                    classFlag = true;


                } else {

                    gameSeconds -= 5;
                    classFlag = false;

                }


            }

            // changeStyle(numQuestion);
            numQuestion++;
            changeTheHTML(numQuestion);

        });
    }
}

function changeTheHTML(numQuestion) {

    if (numQuestion <= Questions.length - 1) {

        question.textContent = Questions[numQuestion].question;
        firstOption.textContent = Questions[numQuestion].answers[0];
        secondOption.textContent = Questions[numQuestion].answers[1];
        thirdOption.textContent = Questions[numQuestion].answers[2];
        lastOption.textContent = Questions[numQuestion].answers[3];


    }
}

// function changeStyle(numQuestion) {

// }

function init() {



    startIntervel();

    startTheGameQuiz();



}