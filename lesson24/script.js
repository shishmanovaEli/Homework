var zone = document.getElementById('click-zone');
var scoreEle = document.getElementById('scoreEle');
var timerEle = document.getElementById('timerEle');
var startBtn = document.getElementById('startBtn');
var score = 0;
var gameLength = 5000;
var time = 0;
var timer;
var isGameRunning = false;
zone.addEventListener('click', (event) => {
    if (isGameRunning) {
        score++;
        scoreEle.innerText = score;
    }
});

startBtn.addEventListener('click', (event) => {
    isGameRunning = true;
    score = 0;
    scoreEle.innerText = score;
    time = (gameLength / 1000);
    timer = setInterval(() => {
        time -= 0.1;
        updateTimerEle(time);
    }, 100)
    setTimeout(gameEnd, gameLength);
});

function gameEnd() {
    isGameRunning = false;
    var CPS = score / (gameLength / 1000);
    scoreEle.innerText = `${score} (${CPS.toFixed(2)}CPS)`;
    if (score < 10) {
        slow();
    }
    if (score >= 10 && score < 20) {
        normal();
    }
    if (score > 20) {
        fast();
    }
}

function slow() {
    console.log('%cslow', 'color:red;');
    alert("You are Turtle! ");
}

function normal() {
    console.log('%cnormal', 'color:blue;');
    alert("You are a Octopus!");
}

function fast() {
    console.log('%cfast', 'color:green;');
    alert("You are Jaguar! ");
}

function updateTimerEle(value) {

    if (value <= 0) {
        clearInterval(timer);
    } else {
        document.getElementById('timerEle').innerText = value.toFixed(2) + 's';
    }
}