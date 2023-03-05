const stopwatchNode = document.querySelector(".stopwatch")
const startBtnNode = document.querySelector(".startBtn")
const stopBtnNode = document.querySelector(".stopBtn")
const resetBtnNode = document.querySelector(".resetBtn")

let counter = 0;
let timerID;

startBtnNode.addEventListener("click", function() {
    timerID = setInterval(function() {
        counter++
        stopwatchNode.innerHTML = counter
    }, 1000)
})

stopBtnNode.addEventListener("click", function() {
    clearInterval(timerID)
})

resetBtnNode.addEventListener("click", function() {
    counter = 0;
    stopwatchNode.innerHTML = counter
})