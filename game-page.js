// var hostNameUrl = window.location.href;
var Questions = [

    {
        question: "The meaning of the sign = is: ",
        answers: ["assignment to varieble", "compare between the objects", "doesnt have any meaning ", "all wrong"],
        correctAnswer: "compare between the objects"
    },
    {
        question: "The meaning of the sign = is: ",
        answers: ["assignment to varieble", "compare between the objects", "doesnt have any meaning ", "all wrong"],
        correctAnswer: "assignment to varieble"
    },
    {
        question: "The meaning of the sign = is: ",
        answers: ["assignment to varieble", "compare between the objects", "doesnt have any meaning ", "all wrong"],
        correctAnswer: "doesnt have any meaning"
    }
];


var gameSeconds = 15;
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

        if (gameSeconds <= 0) {

            clearInterval(gameToPlay);
            containerForm.setAttribute("class", "container-display");
            question.style.display = "none";
            items.style.display = "none";

        }

    }, 1000)
}

function startTheGameQuiz() {

    var howManyQuestion = Questions.length;
    var numQuestion = 0;
    var arrayOfOptions = [firstOption, secondOption, thirdOption, lastOption];
    var events = [];

    for (var i = 0; i < arrayOfOptions.length; i++) {

        events[i] = arrayOfOptions[i].addEventListener("click", function () {

            console.log("IM EVENT");

        });
    }


    // first Question.
    firstOption.textContent = Questions[0].answers[0];
    secondOption.textContent = Questions[0].answers[1];
    thirdOption.textContent = Questions[0].answers[2];
    lastOption.textContent = Questions[0].answers[3];

    for (var i = 0; i < 3; i++) {

        events[i].addEventListener("click", function () {

            console.log("h1");

        });
    }


}

function init() {



    startIntervel();

    startTheGameQuiz();



}