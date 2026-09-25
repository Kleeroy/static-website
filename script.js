
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = checkTime(today.getMinutes());
  let s = checkTime(today.getSeconds());
  document.getElementById('txt').innerHTML = pad(h) + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i; }
  return i;
}

function pad(i) {
  return i < 10 ? "0" + i : i;
}


const countDownDate = new Date("Jan 1, 2027 00:00:00").getTime();

const countdownTimer = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    String(days).padStart(2, "0") + "d " +
    String(hours).padStart(2, "0") + "h " +
    String(minutes).padStart(2, "0") + "m " +
    String(seconds).padStart(2, "0") + "s";

  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("demo").innerHTML = "OPERATION LAUNCHED";
  }
}, 1000);


function abortSequence() {
  const msg = document.getElementById("abortMsg");
  const btn = document.getElementById("abortBtn");

  btn.disabled = true;
  let secondsLeft = 3;
  msg.innerHTML = "ABORT CONFIRMED — terminal will close in " + secondsLeft + "...";

  const countdown = setInterval(function () {
    secondsLeft--;
    if (secondsLeft > 0) {
      msg.innerHTML = "ABORT CONFIRMED — terminal will close in " + secondsLeft + "...";
    } else {
      clearInterval(countdown);
      msg.innerHTML = "TERMINAL CLOSING...";
      // window.close() only works on tabs/windows opened by script;
      // most browsers block it on a normal tab, so we show a fallback.
      window.close();
      setTimeout(function () {
        msg.innerHTML = "TERMINAL CLOSING... (your browser blocked auto-close — you can close this tab manually)";
        btn.disabled = false;
      }, 400);
    }
  }, 1000);
}


function toggleMode() {
  const isLight = document.body.classList.toggle("light-mode");
  const button = document.getElementById("modeToggle");
  button.textContent = isLight ? "NIGHT MODE" : "DAY MODE";
}
