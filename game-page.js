var Questions = [

    {
        question: "First Question ",
        answers: ["assignment to varieble", "compare between the objects", "doesnt have any meaning ", "all wrong"],
        correctAnswer: 0
    },
    {
        question: "Second Question",
        answers: ["********", "!!!!!!!!!!!!s", ")))))))))))) ", "^^^^^^"],
        correctAnswer: 1
    },
    {
        question: "Third Question ",
        answers: ["###########", "?????????????????", "Z>Z>Z>Z>Z>> ", "aLLSSKKS}}}"],
        correctAnswer: 3
    }
];


var userScore = 0;
var numQuestion = 0;
var gameSeconds = 30;
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
var arrayHistoryGame;




document.querySelector(".container-score").classList.add("hide");
containerForm.classList.add("hide");

btnStartGame.addEventListener("click", function () {

    startGameQuiz();

});

btnHighIdScore.addEventListener("click", function () {

    document.querySelector("header").classList.add("hide");
    document.querySelector(".card").style.display = "none";
    document.querySelector(".startGame").classList.add("hide");
    document.querySelector(".container-score").classList.remove("hide");
    timerRun.classList.add("hide");
    btnHighIdScore.classList.add("hide");


});

function startGameQuiz() {

    btnStartGame.classList.add("hide");
    document.querySelector("header").style.display = "none";
    document.querySelector(".card").style.display = "none";
    document.querySelector(".container-score").classList.add("hide");
    renderID();
    startIntervel();

}
function renderID() {


    changeTheHTML(numQuestion);

    var newId;
    var arr = [option1, option2, option3, option4];

    for (var i = 0; i < 4; i++) {



        arr[i].setAttribute("data-id", i);



        arr[i].addEventListener("click", function () {

            var checkI = this.getAttribute("data-id");
            newId = parseInt(checkI);
            horizon.style.display = "block";
            console.log("ahahhahahaha");
            if (numQuestion < Questions.length) {

                if (Questions[numQuestion].correctAnswer === newId) {

                    paragraph.textContent = "Correct";
                    userScore += 10;
                    console.log(userScore);
                } else {

                    gameSeconds -= 5;
                    paragraph.textContent = "Wrong";
                }

                numQuestion++;
                changeTheHTML(numQuestion);
                console.log(newId);
            }

        });


    }

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
            horizon.style.display = "none";
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
            // var before = containerForm.classList;
            // console.log('before', before);
            containerForm.setAttribute("class", "container-form");
            // var after = containerForm.classList;
            // console.log('after ' + after);
            // containerForm.className = "container-score display";

            // var classes = containerForm.classList;
            // classes.add('display');

            question.style.display = "none";
            document.querySelector("#items").style.display = "none";
            scoreDisplya.textContent = "Your final score is " + userScore;
            timerRun.textContent = "Time";
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
    console.log(arrayHistoryGame);
}

if (!Array.isArray(arrayHistoryGame)) {

    arrayHistoryGame = [];
    console.log(arrayHistoryGame.length);
} else {
    console.log("IM HERERERERERER");
    arrayHistoryGame = JSON.parse(window.localStorage.getItem("toDo"));
}


















