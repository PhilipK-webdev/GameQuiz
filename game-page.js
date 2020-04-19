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
var containerForm = document.querySelector(".container");
var scoreDisplya = document.querySelector("#score-display");






function startGameQuiz() {

    renderID();
    startIntervel();

}

startGameQuiz();







function startIntervel() {


    var gameToPlay = setInterval(function () {

        gameSeconds--;
        timerRun.textContent = "Time: " + gameSeconds;

        if (gameSeconds < 0 || numQuestion > Questions.length - 1) {

            clearInterval(gameToPlay);
            containerForm.setAttribute("class", "container-display");
            question.style.display = "none";
            items.style.display = "none";
            scoreDisplya.textContent = "Your final score is " + userScore;
            timerRun.textContent = "Time";

        }

    }, 1000)
}











function renderID() {


    changeTheHTML(numQuestion);

    var newId;
    var flag = true;

    for (var i = 0; i < 4; i++) {

        var arr = [option1, option2, option3, option4];

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