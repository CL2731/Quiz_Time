var questions = [
    {
        title: "Which one of these are not a 'sidekick' (good or evil) in a disney film?",
        choices: ["Pascal", "Undertow", "Gurgi", "Abu"],
        answer: "Gurgi"
    },
    {
        title: "Which one of these are not a 'sidekick' (good or evil) in a disney film?",
        choices: ["Pascal", "Undertow", "Gurgi", "Abu"],
        answer: "Gurgi"
    },
]

var currentQuesIndex = 0;
var timerId
var time = questions.length * 5;
var questionelement = document.getElementById("questions")
var choiceselement = document.getElementById("choices")
var timerelement = document.getElementById("time")
var submitbtn = document.getElementById("submit")
var startbtn = document.getElementById("start")
var feedback = document.getElementById("feedback")
var initialsElememnt = document.getElementById("initials")

function startquiz(){
    var startscreen = document.getElementById("startscreen")
    startscreen.setAttribute("class", "hide")
    questionelement.removeAttribute("class")
    timerId = setInterval(clockTick, 1000)
    timerelement.textContent = time
    getQuestion();
}

function getQuestion(){
    var currentQuestion = questions[currentQuesIndex];
    var titleElement = document.getElementById("question-title");
    titleElement.textContent = currentQuestion.title;
    choiceselement.innerHTML = "";
    currentQuestion.choices.forEach(function (choice, i){
        var choicenode = document.createElement("button")
        choicenode.setAttribute("class", "choice")
        choicenode.setAttribute("value", choice)
        choicenode.textContent = i + 1 + "." + choice;
        choicenode.onclick = questionclick;
        choiceselement.appendChild(choicenode)
    })
}

// function startgame() {
//     time = setInterval(function countdown() {
//         if (secondsleft > 0) {
//             secondsleft--;
//             timeLeft.textContent = secondsleft
//         } else {
//             console.log("end game");
//         }
//     }, 1000)
//     console.log("game started");
//     maingame()
// }

// function maingame() {
//     console.log(quesArray[x]);
//     questionplace.textContent = quesArray[x].question
//     for (let i = 0; i < quesArray[x].choices.length; i++) {

//     }
// }
