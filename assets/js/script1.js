function highScores(){
    var highScores = JSON.parse(window.localStorage.getItem("highScore")) || [];
    highScores.sort(function(a, b){
        return b.score-a.score;
    });
    highScores.forEach(function(score){
        let litag = document.createElement("li");
        litag.textContent = score.initials + "-" + score.score;
        let olTag = document.getElementById("#highscore");
        olTag.appendChild(litag);
    });
}

function clearScore(){
    window.localStorage.removeItem("highscore");
    window.location.reload();
}

document.getElementById("clear").onclick = clearScore;

highScores();