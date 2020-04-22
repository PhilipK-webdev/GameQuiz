var flagBtnPress;
var arrayHistoryGame;
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
var containerScore = document.querySelector(".container-score");
var scoreDisplya = document.querySelector("#score-display");
var btnSubmit = document.querySelector("#button-btn");
var textInput = document.querySelector("#textInput");
var register = document.querySelector("#register");
var btnStartGame = document.querySelector("#btnStartGame");
var btnHomePage = document.querySelector("#submitBackPage");
var btnHighIdScore = document.querySelector("#btnHighIdScore");
var btnClearHistory = document.querySelector("#submitClearHistory");
var items = document.querySelector("#items");
var horizon = document.querySelector("#horizon");
var paragraph = document.querySelector("#paragraph");

var Questions = [

    {
        question: "The Olympics are held every how many years?",
        answers: ["4 years", "5 years", "3 years", "2 years"],
        correctAnswer: 0
    },
    {
        question: "In American Football, a touchdown is worth how many points?",
        answers: ["7 points ", "6 points", "8 points ", "5 points"],
        correctAnswer: 1
    },
    {
        question: "How many players are on a baseball team? ",
        answers: ["8 players", "10 players", "11 players", "9 players"],
        correctAnswer: 3
    },
    {
        question: "What was Wilt Chamberlain’s record for most points in a single game? ",
        answers: ["98 points", "100 points", "99 points", "101 points"],
        correctAnswer: 1
    },
    {
        question: "How many seasons did Michael Jordan play with the Chicago Bulls before going back into the game with the Wizards?",
        answers: ["13 seasons", "12 seasons", "11 seasons", "14 seasons"],
        correctAnswer: 0
    },
    {
        question: "What is the only country to have played in every single soccer World Cup?",
        answers: ["Argentina", "Germany", "Brazil", "France"],
        correctAnswer: 2
    },
    {
        question: "How many personal fouls does a player get to be ejected from an NBA basketball game?",
        answers: ["4 personal fouls", "5 personal fouls", "7 personal fouls", "6 personal fouls"],
        correctAnswer: 3
    }

];

// window.onload = function () {
setArray();
function setArray() {
    arrayHistoryGame = JSON.parse(localStorage.getItem("names")); //get data from storage
    console.log(arrayHistoryGame);
    if (arrayHistoryGame == null) {
        arrayHistoryGame = []; //if data exist
        console.log(arrayHistoryGame);
    }
}
// arrayHistoryGame = JSON.parse(localStorage.getItem("names")); //get data from storage
// console.log(arrayHistoryGame);
// if (arrayHistoryGame == null) {
//     arrayHistoryGame = []; //if data exist
//     console.log(arrayHistoryGame);
// for (var i = 0; i < arrayHistoryGame.length; i++) {

//     var labelTag = document.createElement("li");
//     labelTag.textContent = arrayHistoryGame[i].name + " " + arrayHistoryGame[i].score;
//     labelTag.setAttribute("data-id", i);
//     register.appendChild(labelTag);
// }


// } else { //if nothing exist in storage

// }
// }

if (gameSeconds < 25) {

    alert("Not enouth time to play the game" + "\n set new Timer ");
    btnStartGame.disabled = true;
}

btnStartGame.addEventListener("click", function () {


    startGameQuiz();
});

function startGameQuiz() {

    document.querySelector(".title").classList.add("hide");
    if (question.className === "askQuestion hide") {
        question.classList.remove("hide");
        if (items.className === "items hide") {
            items.classList.remove("hide");
        }
    }
    document.querySelector("ul").classList.add("list-group");
    question.classList.add("list-group-item");
    option1.classList.add("list-group-item");
    option2.classList.add("list-group-item");
    option3.classList.add("list-group-item");
    option4.classList.add("list-group-item");
    option1.classList.add("list-group-item");
    option1.textContent = "";
    option2.textContent = "";
    option3.textContent = "";
    option4.textContent = "";
    question.textContent = "";
    horizon.classList.add("hide");
    paragraph.textContent = "";
    userScore = 0;
    btnHighIdScore.disabled = true;
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
        arr[i].addEventListener("click", temp, true);
    }
}

var temp = function () {

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

}
function startIntervel() {


    var gameToPlay = setInterval(function () {

        gameSeconds--;
        timerRun.textContent = "Time: " + gameSeconds;

        if (gameSeconds <= 0 || numQuestion > Questions.length - 1) {

            clearInterval(gameToPlay);
            scoreDisplya.textContent = "Your final score is " + userScore;
            timerRun.textContent = "Timer";
            classChange();
        }

    }, 1000)
}

function changeTheHTML(numQuestion) {


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

function classChange() {

    if (containerForm.className === "container-form hide") {

        containerForm.classList.remove("hide");
    }
    question.classList.add("hide");
    question.classList.remove("list-group-item");
    items.classList.add("hide");
    numQuestion = 0;
    gameSeconds = 60;
}


btnHighIdScore.addEventListener("click", function () {

    flagBtnPress = true;
    checkStyleElements(flagBtnPress);
    containerScore.classList.remove("hide");

    if (window.localStorage.getItem("names")) {
        generateElement();
    }
});


function checkStyleElements(flagBtnPress) {

    var z = document.querySelector(".title").getAttribute("class");
    var x = containerScore.getAttribute("class");
    var y = document.querySelector(".nav-bar").getAttribute("class");

    if (flagBtnPress) {

        console.log(flagBtnPress);
        if (z === "title") {

            document.querySelector(".title").classList.add("hide");

        }

        if (y === "nav-bar") {

            document.querySelector(".nav-bar").classList.add("hide");
        }

    } else {


        document.querySelector(".title").classList.remove("hide");
        document.querySelector(".nav-bar").classList.remove("hide");
        containerForm.classList.add("hide");
        containerScore.classList.add("hide");
    }


}

btnHomePage.addEventListener("click", function () {
    flagBtnPress = false;
    checkStyleElements(flagBtnPress);
    btnHighIdScore.disabled = false;
});


btnSubmit.addEventListener("click", function (event) {

    event.preventDefault();
    var input;
    checkInput();
});

function checkInput() {

    input = textInput.value;

    if (input === "" || !isNaN(input) || input.length > 2 || input.length < 1) {
        console.log(input);
        alert("Wrong input, Try again");
        textInput.value = "";

    } else {

        showHighScore();
        renderPlayerNames(input, userScore);
    }
}

function showHighScore() {

    if (containerForm.className === "container-form") {
        containerForm.classList.add("hide");
    } else {

        containerForm.classList.add("hide");
    }
    if (containerScore.className === "container-score hide") {
        containerScore.classList.remove("hide");
    } else {
        containerScore.classList.add("hide");
    }

    var nav = document.querySelector(".nav-bar");

    if (nav.className === "nav-bar") {
        nav.classList.add("hide");
    } else {
        nav.classList.remove("hide");
    }

}

function renderPlayerNames(input, userScore) {

    var Player = {

        name: input.toUpperCase(),
        score: userScore
    };

    arrayHistoryGame.push(Player);
    textInput.value = "";
    window.localStorage.setItem("names", JSON.stringify(arrayHistoryGame));
    generateElement();
}

btnClearHistory.addEventListener("click", function () {

    window.localStorage.removeItem("names");
    arrayHistoryGame = [];
    while (register.firstChild) {
        register.removeChild(register.firstChild);
    }
});

function generateElement() {

    register.innerHTML = "";
    arrayNames = JSON.parse(window.localStorage.getItem("names"));

    arrayNames.sort(function (a, b) {
        return b.score - a.score;
    });
    console.log(arrayNames);
    for (var i = 0; i < arrayNames.length; i++) {

        var labelTag = document.createElement("li");
        labelTag.textContent = arrayNames[i].name + " " + arrayNames[i].score;
        labelTag.setAttribute("data-id", i);
        register.appendChild(labelTag);
    }
}








// register.innerHTML = "";
            // arrayNames = JSON.parse(window.localStorage.getItem("names"));
            // for (var i = 0; i < arrayNames.length; i++) {

            //     var labelTag = document.createElement("li");
            //     labelTag.textContent = arrayNames[i].name + " " + arrayNames[i].score;
            //     labelTag.setAttribute("data-id", i);
            //     register.appendChild(labelTag);
            // }

