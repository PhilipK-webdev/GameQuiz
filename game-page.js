// Declaration
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
var gameSeconds = 60;
var userScore = 0;
var numQuestion = 0;
var arrOptions = [];
var flagBtnPress;
var arrayHistoryGame;

// Object Of Questions.
var Questions = [

    {
        question: "What year Israel was recognize as a State?",
        answers: ["1948", "1947", "1949", "1946"],
        correctAnswer: 0
    },

    {
        question: "How many times has Israel won the Eurovision Song Contest?",
        answers: ["0 times", "5 times", "3 times", "2 times"],
        correctAnswer: 2
    },
    {
        question: "How far is Tel Aviv from Jerusalem?",
        answers: ["103 km ", "12 km", "45 km ", "54 km"],
        correctAnswer: 3
    },
    {
        question: "Which Israeli city is twinned with Durban, Los Angeles and Toronto?",
        answers: ["Tel-Aviv", "Eilat", "Holon", "Haifa"],
        correctAnswer: 1
    },
    {
        question: "How many kilometers of highway does Israel have? ",
        answers: ["130 km", "330 km", "440 km", "230 km"],
        correctAnswer: 3
    },
    {
        question: "What is the national bird of Israel?",
        answers: ["Black heron", "Northen gannet ", "Hoopoe", "Pygmy cormorant"],
        correctAnswer: 2
    },
    {
        question: "Who was the first Israeli in space?",
        answers: ["Ilan Ramon", "Ehud Barak", "Avigdor Khalani", "Yoni Netanyahu"],
        correctAnswer: 0
    },
    {
        question: "How many official beaches does Israel have?",
        answers: ["73", "8", "137", "37"],
        correctAnswer: 2
    }

];

setArray();
function setArray() {
    arrayHistoryGame = JSON.parse(localStorage.getItem("names")); //get data from storage
    if (arrayHistoryGame == null) {
        arrayHistoryGame = []; //if data exist
    }
}

if (gameSeconds < 25) {

    alert("Not enouth time to play the game" + "\n set new Timer ");
    btnStartGame.disabled = true;
}

// Button Start Game
btnStartGame.addEventListener("click", function () {


    startGameQuiz();
});

// Button Check The History Game
btnHighIdScore.addEventListener("click", function () {

    flagBtnPress = true;
    checkStyleElements(flagBtnPress);
    containerScore.classList.remove("hide");

    if (window.localStorage.getItem("names")) {
        generateElement();
    }
});

// Button Going Back To Home-Page
btnHomePage.addEventListener("click", function () {
    flagBtnPress = false;
    checkStyleElements(flagBtnPress);
    btnHighIdScore.disabled = false;
});
// Button Submit the Input from the User(Player).
btnSubmit.addEventListener("click", function (event) {

    event.preventDefault();

    checkInput();
});

// Button clean The History Game.
btnClearHistory.addEventListener("click", function () {

    window.localStorage.removeItem("names");
    arrayHistoryGame = [];
    while (register.firstChild) {
        register.removeChild(register.firstChild);
    }
});
// function begin the game - settings
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

// Adding EventListeners
function renderID() {

    changeTheHTML(numQuestion);
    arrOptions = [option1, option2, option3, option4];
    for (var i = 0; i < 4; i++) {

        arrOptions[i].setAttribute("data-id", i);
        arrOptions[i].addEventListener("click", renderQuestions, true);
    }
}

// renderQuestions function - Logic
var renderQuestions = function () {

    checkI = this.getAttribute("data-id");
    newId = parseInt(checkI);
    horizon.classList.remove("hide");

    if (numQuestion < Questions.length) {

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

// function of the Timer.
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
// function - change the questions during the game
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
// function - after the timer is 0 or the player answer the Questions, changing the Page.
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

// function - Changing the page before the game. between history content and introduction page
function checkStyleElements(flagBtnPress) {

    var getClassTitle = document.querySelector(".title").getAttribute("class");
    var getClassNavBar = document.querySelector(".nav-bar").getAttribute("class");
    if (flagBtnPress) {

        console.log(flagBtnPress);
        if (getClassTitle === "title") {

            document.querySelector(".title").classList.add("hide");

        }

        if (getClassNavBar === "nav-bar") {

            document.querySelector(".nav-bar").classList.add("hide");
        }

    } else {

        document.querySelector(".title").classList.remove("hide");
        document.querySelector(".nav-bar").classList.remove("hide");
        containerForm.classList.add("hide");
        containerScore.classList.add("hide");
    }
}
// function - cheking the input of the user after he finished the game.
function checkInput() {
    var input;
    input = textInput.value;
    // -----------------
    // Regex Expression
    var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
    var hasNumber = /\d/;
    // -----------------
    if (input === "" || hasNumber.test(input) || input.length > 2 || input.length < 1 || pattern.test(input)) {
        alert("Wrong input, Try again");
        textInput.value = "";

    } else {

        renderPlayerNames(input, userScore);
        showHighScore();
    }
}


// function - create Object Player , Local Storage.
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

// function - sort array of the names.Display on the Page.
function generateElement() {

    register.innerHTML = "";
    arrayNames = JSON.parse(window.localStorage.getItem("names"));

    arrayNames.sort(function (a, b) {
        return b.score - a.score;
    });
    for (var i = 0; i < arrayNames.length; i++) {

        var labelTag = document.createElement("li");
        labelTag.textContent = arrayNames[i].name + " " + arrayNames[i].score;
        labelTag.setAttribute("data-id", i);
        register.classList.add("text-dark");
        register.classList.add("bg-primary")
        register.appendChild(labelTag);
    }
}
// funtion- Changing the layout of the page.
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


