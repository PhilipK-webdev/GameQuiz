// var hostanmeUrl = window.location.href;

var Questions = [

    {
        answer: ["a", "b", "c", "d"],
        question: "How are you tommoroy?",
        correctAnswer: 2
    },
    {
        answer: ["a", "b", "c", "d"],
        question: "How are you yesterday?",
        correctAnswer: 1
    },


    {
        answer: ["a", "b", "c", "d"],
        questio: "How are you today?",
        correctAnswer: 3
    }

];

var question = document.querySelector("#question");
var firstOption = document.querySelector("#option1");
var secondOption = document.querySelector("#option2");
var thirdOption = document.querySelector("#option3");
var lastOption = document.querySelector("#option4");

var containerForm = document.querySelector(".container");
var items = document.querySelector("#items");















var timerRun = document.querySelector("#timer-run");
var gameSeconds = 10;




var gameToPlay = setInterval(function () {

    gameSeconds--;
    timerRun.textContent = "Time: " + gameSeconds;

    if (gameSeconds === 0) {

        clearInterval(gameToPlay);
        containerForm.setAttribute("class", "container-display");
        question.style.display = "none";
        items.style.display = "none";

    }

}, 1000)





// var question = document.querySelector("#question");

// question.style.color = "blue";

// question.addEventListener("click", () => {

//     console.log("hello");

// })
