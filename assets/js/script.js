const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

let interval;
let timeLeft = 2700;  // 45 minutes in seconds


// Update the timer display
function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  minutesEl.textContent = minutes.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');
}


// Start the timer
function startTimer() {
  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(interval);
      alert('Time is up!');
    }
  }, 1000);
}


// Stop the timer
function stopTimer() {
  clearInterval(interval);
}

// Reset the timer
function resetTimer() {
  clearInterval(interval);
  timeLeft = 2700;
  updateTimer();
}

// Add event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
