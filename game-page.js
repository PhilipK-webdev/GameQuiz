// var hostNameUrl = window.location.href;
var Questions = [

    {
        question: "The meaning of the sign = is: ",
        answers: ["assignment to varieble", "compare between the objects", "doesnt have any meaning ", "all wrong"],
        correctAnswer: 0
    },
    {
        question: "dasdasd--------------------",
        answers: ["assignment to varieble", "compare between the objects", "doesnt have any meaning ", "all wrong"],
        correctAnswer: 1
    },
    {
        question: "fsdsdfdsf ",
        answers: ["assignment to varieble", "compare between the objects", "doesnt have any meaning ", "all wrong"],
        correctAnswer: 2
    }
];

var objectQuestion = new Object();


var numQuestion = 0;
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

    var arrayOfOptions = [firstOption, secondOption, thirdOption, lastOption];

    changeTheHTML(numQuestion);

    console.log(Questions[numQuestion].correctAnswer);
    console.log(firstOption.textContent);



    for (var i = 0; i < 3; i++) {

        arrayOfOptions[i].addEventListener("click", function (event) {

            var id = event.target.id;
            var answerIndex;
            if (id === "option1") {

                answerIndex = 0;
            } else if (id === "option2") {

                answerIndex = 1;

            } else if (id === "option3") {

                answerIndex = 2;
            } else {

                answerIndex = 3;
            }

            if (Questions[numQuestion].correctAnswer === answerIndex) {

                console.log("correct");
            }

            numQuestion++;
            changeTheHTML(numQuestion);
        });


    }

}

function changeTheHTML(numQuestion) {

    if (numQuestion < 3) {

        question.textContent = Questions[numQuestion].question;
        firstOption.textContent = Questions[numQuestion].answers[0];
        secondOption.textContent = Questions[numQuestion].answers[1];
        thirdOption.textContent = Questions[numQuestion].answers[2];
        lastOption.textContent = Questions[numQuestion].answers[3];
    }

}

function init() {



    startIntervel();

    startTheGameQuiz();



}