var beginBtn = document.querySelector("#begin");
var timeLeft = document.querySelector("#timeleft");
var questionplace = document.querySelector("#questions")
var time
var secondsleft = 60;
var quesArray = [{question:"Which one of these are not a 'sidekick' (good or evil) in a disney film?", choices: ["Pascal", "Undertow", "Gurgi", "Abu"], answer:"Gurgi"}, {question:"Which one of these horses are not form a disney film?", choices:["Cleo", "Angus", "Buck", "Maximus"], answer:"Cleo"}]
var x = 0;
console.log(beginBtn)
beginBtn.addEventListener("click", startgame);

function startgame(){
    time = setInterval(function countdown(){
        if (secondsleft > 0){
        secondsleft --;
        timeLeft.textContent= secondsleft
        } else {
            console.log("end game");
        } 
    }, 1000)
    console.log("game started");
    maingame()
}

function maingame(){
    console.log(quesArray [x]);
    questionplace.textContent = quesArray[x].question
        for (let i=0; i < quesArray[x].choices.length; i++){
            
        }
}
