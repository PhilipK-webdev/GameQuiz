var Questions = [

    {
        question: "First Question ",
        answers: ["assignment to varieble", "compare between the objects", "doesnt have any meaning ", "all wrong"],
        correctAnswer: 0
    },
    {
        question: "Second Question",
        answers: ["2222222222", "2222222222222222s", "22222222222222222 ", "22222222222"],
        correctAnswer: 1
    },
    {
        question: "Third Question ",
        answers: ["333333333", "3333333333333", "33333333333", "333333333333333"],
        correctAnswer: 3
    }
];

var arr = [];
var userScore = 0;
var numQuestion = 0;
var gameSeconds = 60;
var question = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var timerRun = document.querySelector("#timer-run");
var containerForm = document.querySelector(".container-form");
var scoreDisplya = document.querySelector("#score-display");
var buttonBtn = document.querySelector("#button-btn");
var textInput = document.querySelector("#textInput");
var register = document.querySelector("#register");
var btnStartGame = document.querySelector("#btnStartGame");
var submitBackPage = document.querySelector("#submitBackPage");
var btnHighIdScore = document.querySelector("#btnHighIdScore");
var submitBackPage = document.querySelector("#submitBackPage");
var items = document.querySelector("#items");
var title = document.querySelector("#title");
var arrayHistoryGame;




document.querySelector(".container-score").classList.add("hide");
containerForm.classList.add("hide");

btnStartGame.addEventListener("click", function () {

    startGameQuiz();

});

btnHighIdScore.addEventListener("click", function () {

    document.querySelector("header").classList.add("hide");
    document.querySelector(".card").classList.add("hide");
    document.querySelector(".startGame").classList.add("hide");
    document.querySelector(".container-score").classList.remove("hide");
    timerRun.classList.add("hide");
    btnHighIdScore.classList.add("hide");


});

function startGameQuiz() {

    var temp;
    btnStartGame.classList.add("hide");
    document.querySelector("header").classList.add("hide");
    document.querySelector(".card").classList.add("hide");
    document.querySelector(".container-score").classList.add("hide");
    if (items.className === "items hide") {

        console.log(items.className);
        items.classList.remove("hide");
    }

    temp = question.className;
    if (temp === "askQuestion hide") {


        question.classList.remove("hide");
    }

    renderID();
    startIntervel();

}
function renderID() {

    changeTheHTML(numQuestion);
    var newId = 0;
    var checkI = 0;
    arr = [option1, option2, option3, option4];

    for (var i = 0; i < 4; i++) {

        arr[i].setAttribute("data-id", i);
        console.log(i)

        arr[i].addEventListener("click", function temp() {

            console.log(arr);
            checkI = this.getAttribute("data-id");
            newId = parseInt(checkI);
            horizon.classList.remove("hide");
            if (numQuestion < Questions.length) {

                console.log(newId);

                if (Questions[numQuestion].correctAnswer === newId) {

                    paragraph.textContent = "Correct";
                    userScore += 10;
                } else {

                    gameSeconds -= 5;
                    paragraph.textContent = "Wrong";
                }
                numQuestion++;
                changeTheHTML(numQuestion);

            }
            this.removeEventListener("click", temp, true);

        }, true);

    }
    console.log(arr);
}







function changeTheHTML(numQuestion) {

    var horizon = document.querySelector("#horizon");
    var paragraph = document.querySelector("#paragraph");

    setTimeout(function () {


        if (numQuestion <= Questions.length - 1) {

            question.textContent = Questions[numQuestion].question;
            option1.textContent = Questions[numQuestion].answers[0];
            option2.textContent = Questions[numQuestion].answers[1];
            option3.textContent = Questions[numQuestion].answers[2];
            option4.textContent = Questions[numQuestion].answers[3];
            horizon.classList.add("hide");
            paragraph.textContent = "";

        }

    }, 500);

}

function startIntervel() {


    var gameToPlay = setInterval(function () {

        gameSeconds--;
        timerRun.textContent = "Time: " + gameSeconds;

        if (gameSeconds <= 0 || numQuestion > Questions.length - 1) {

            clearInterval(gameToPlay);
            scoreDisplya.textContent = "Your final score is " + userScore;
            timerRun.textContent = "Time";
            classChange();
        }

    }, 1000)
}

buttonBtn.addEventListener("click", function (event) {


    event.preventDefault();
    arrayHistoryGame.push(textInput.value);
    textInput.value = "";
    window.localStorage.setItem("names", JSON.stringify(arrayHistoryGame));
    showHighScore();
    renderPlayerNames();

});

function showHighScore() {

    document.querySelector(".container-score").setAttribute("class", "container-score");
    document.querySelector("nav").style.display = "none";
    containerForm.classList.add("hide");
}

function renderPlayerNames() {

    var arrayNames = JSON.parse(window.localStorage.getItem("names"));
    for (var i = 0; i < arrayNames.length; i++) {

        var labelTag = document.createElement("lable");
        labelTag.textContent = arrayNames[i];
        labelTag.setAttribute("data-id", i);
        register.appendChild(labelTag);
    }

}

if (!Array.isArray(arrayHistoryGame)) {

    arrayHistoryGame = [];
} else {
    console.log("IM HERERERERERER");
    arrayHistoryGame = JSON.parse(window.localStorage.getItem("toDo"));
}

submitBackPage.addEventListener("click", function () {

    document.querySelector(".nav-bar").style.display = "flex";
    document.querySelector("header").style.display = "block";
    document.querySelector(".card").style.display = "flex";
    btnStartGame.classList.remove("hide");
    document.querySelector(".container-score").classList.add("hide");


});




function classChange() {

    containerForm.setAttribute("class", "container-form");
    question.classList.add("hide");
    items.classList.add("hide");
    numQuestion = 0;
    userScore = 0;
    gameSeconds = 60;




}












