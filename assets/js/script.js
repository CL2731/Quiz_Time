var questions = [
    {
        title: "Which one of these are not a 'sidekick' (good or evil) in a disney film?1",
        choices: ["Pascal", "Undertow", "Gurgi", "Abu"],
        answer: "Gurgi"
    },
    {
        title: "Which one of these are not a 'sidekick' (good or evil) in a disney film?2",
        choices: ["Pascal", "Undertow", "Gurgi", "Abu"],
        answer: "Gurgi"
    },
    {
        title: "Which one of these are not a 'sidekick' (good or evil) in a disney film?2",
        choices: ["Pascal", "Undertow", "Gurgi", "Abu"],
        answer: "Gurgi"
    }
]

var currentQuesIndex = 0;
var timerId
var time = questions.length * 5;
var questionElement = document.getElementById("questions")
var choicesElement = document.getElementById("choices")
var timerElement = document.getElementById("time")
var submitBtn = document.getElementById("submit")
var startBtn = document.getElementById("start")
var feedBack = document.getElementById("feedback")
var initialsElememnt = document.getElementById("initials")

function startQuiz(){
    var startscreen = document.getElementById("startscreen")
    startscreen.setAttribute("class", "hide")
    questionElement.removeAttribute("class")
    timerId = setInterval(clockTick, 1000)
    timerElement.textContent = time
    getQuestion();
}

function getQuestion(){
    var currentQuestion = questions[currentQuesIndex];
    var titleElement = document.getElementById("question-title");
    titleElement.textContent = currentQuestion.title;
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(function (choice, i){
        var choicenode = document.createElement("button")
        choicenode.setAttribute("class", "choice")
        choicenode.setAttribute("value", choice)
        choicenode.textContent = i + 1 + "." + choice;
        choicenode.onclick = questionClick;
        choicesElement.appendChild(choicenode)
    })
}

function questionClick(){
    if(this.value !== questions[currentQuesIndex].answer){
        time-= 15;
        if(time < 0){
            time = 0;
        }
        timerElement.textContent = time;
        feedBack.textContent = "You ran out of time."
    } else {
        feedBack.textContent = "Congrates!"
    }
    feedBack.setAttribute("class", "feedback");
    setTimeout(function(){
        feedBack.setAttribute("class", "feedback hide")
    }, 1000);
    currentQuesIndex++; 
    if(currentQuesIndex === questions.length){
        quizEnd();
    } else{
        getQuestion();
    }
}

function quizEnd(){
    clearInterval(timerId);
    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");
    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;
    questionElement.setAttribute("class", "hide");
}
function clockTick(){
    clearInterval(timerId);
    time--;
    timerElement.textContent = time;
    if(time <= 0){
        quizEnd();
    }
}

function highScore(){
    var initials = initialsElememnt.value.trim();
    if(initials !== ""){
        var highScore = JSON.parse(window.localStorage.getItem("highscore")) || [];
        var newScore = {score: time, initials: initials};
        highScore.push(newScore);
        window.localStorage.setItem("highscore", JSON.stringify(highScore))
        window.location.href = "highscore.html";
    } 
}

function checkForEntry(event){
    if(event.key === "Enter"){
        highScore();
    }
}

submitBtn.onclick = highScore;
startBtn.onclick = startQuiz;
initialsElememnt.onkeyup = checkForEntry;
