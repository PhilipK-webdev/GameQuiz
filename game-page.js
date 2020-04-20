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
var containerScore = document.querySelector(".container-score");
var scoreDisplya = document.querySelector("#score-display");
var buttonBtn = document.querySelector("#button-btn");
var textInput = document.querySelector("#textInput");
var register = document.querySelector("#register");
var btnStartGame = document.querySelector("#btnStartGame");
var btnHomePage = document.querySelector("#submitBackPage");
var btnHighIdScore = document.querySelector("#btnHighIdScore");;
var items = document.querySelector("#items");
var title = document.querySelector("#title");
var arrayHistoryGame;
var flagBtnPress;
























btnStartGame.addEventListener("click", function () {

    startGameQuiz();

});

btnHighIdScore.addEventListener("click", function () {

    console.log("inside of btn high id score");
    flagBtnPress = true;
    checkStyleElements(flagBtnPress);

    containerScore.classList.remove("hide");

    // document.querySelector("header").classList.add("hide");
    // document.querySelector(".card").classList.add("hide");
    // document.querySelector(".startGame").classList.add("hide");
    // console.log(x);
    // if (x === "title ") {

    //     document.querySelector(".title").classList.add("hide");

    //     if (y === "nav-bar") {

    //         document.querySelector(".nav-bar").classList.add("hide");
    //         if (containerScore.className === "container-score hide") {
    //             containerScore.classList.remove("hide");
    //         } else {

    //             containerForm.classList.add("hide");
    //         }
    //     } else {

    //         document.querySelector(".nav-bar").classList.remove("hide");
    //     }

    // } else {

    //     document.querySelector(".title").classList.remove("hide");
    // }

    // // timerRun.classList.add("hide");
    // btnHighIdScore.classList.add("hide");


});


function checkStyleElements(flagBtnPress) {



    var z = document.querySelector(".title").getAttribute("class");
    console.log(z);
    var x = containerScore.getAttribute("class");
    var y = document.querySelector(".nav-bar").getAttribute("class");

    // console.log(containerForm.getAttribute("class"));

    console.log(btnHighIdScore.getAttribute("class"));
    console.log(btnHomePage.getAttribute("class"));

    if (flagBtnPress) {

        console.log(flagBtnPress);
        if (z === "title") {
            console.log("20202020020202020");
            document.querySelector(".title").classList.add("hide");
            console.log(z + " after change");
        }
        // if (z === "title hide ") {

        //     document.querySelector(".title").classList.remove("hide");
        // }

        if (y === "nav-bar") {

            document.querySelector(".nav-bar").classList.add("hide");
            console.log(y + " after change");
        } else {

            document.querySelector(".nav-bar").classList.remove("hide");
            console.log(y + " after change");
        }

    } else {

        console.log(flagBtnPress);
        document.querySelector(".title").classList.remove("hide");
        document.querySelector(".nav-bar").classList.remove("hide");
        containerScore.classList.add("hide");


    }

















}




btnHomePage.addEventListener("click", function () {
    console.log("inside of btn home page");
    flagBtnPress = false;
    checkStyleElements(flagBtnPress);
    // document.querySelector(".nav-bar").style.display = "flex";
    // document.querySelector("header").style.display = "block";
    // document.querySelector(".card").style.display = "flex";
    // btnStartGame.classList.remove("hide");
    // document.querySelector(".container-score").classList.add("hide");

    // var x = document.querySelector(".title").getAttribute("class");
    // var y = document.querySelector(".nav-bar").getAttribute("class");
    // // document.querySelector("header").classList.add("hide");
    // // document.querySelector(".card").classList.add("hide");
    // // document.querySelector(".startGame").classList.add("hide");
    // console.log(x);
    // if (x === "title ") {

    //     document.querySelector(".title").classList.add("hide");
    //     console.log(y);
    //     if (y === "nav-bar") {

    //         document.querySelector(".nav-bar").classList.add("hide");
    //     }

    // } else {

    //     document.querySelector(".title").classList.remove("hide");
    //     document.querySelector(".nav-bar").classList.remove("hide");
    //     btnHighIdScore.classList.remove("hide");
    //     containerForm.classList.add("hide");
    //     if (containerScore.className === "container-score hide") {
    //         containerScore.classList.remove("hide");
    //     } else {

    //         containerScore.classList.add("hide");
    //     }



    // }

    // // timerRun.classList.add("hide");



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
        arr[i].addEventListener("click", temp, true);
    }
}
// arr[i].removeEventListener("click", temp, true);


// checkI = this.getAttribute("data-id");
// newId = parseInt(checkI);


// horizon.classList.remove("hide");
// if (numQuestion < Questions.length) {

//     console.log(newId);

//     if (Questions[numQuestion].correctAnswer === newId) {

//         paragraph.textContent = "Correct";
//         userScore += 10;
//     } else {

//         gameSeconds -= 5;
//         paragraph.textContent = "Wrong";
//     }
//     numQuestion++;
//     changeTheHTML(numQuestion);

// }










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

console.log(temp);





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

    if (containerForm.className === "container-form") {
        containerForm.classList.add("hide");
    }
    document.querySelector(".container-score").setAttribute("class", "container-score");
    document.querySelector("nav").style.display = "none";

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






function classChange() {

    if (containerForm.className === "container-form hide") {

        containerForm.classList.remove("hide");
    }
    question.classList.add("hide");
    items.classList.add("hide");
    numQuestion = 0;
    userScore = 0;
    gameSeconds = 60;


}












