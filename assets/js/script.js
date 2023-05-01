let startEl = document.getElementById("start")
let stopEl = document.getElementById("stop")
let resetEl = document.getElementById("reset")
let timerEl = document.getElementById("timer")



function startTimer(){
    console.log("start");
}

function stopTimer(){
    console.log("stop");
}

function resetTimer(){
    console.log("reset");
}




startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)
resetEl.addEventListener("click", resetTimer)