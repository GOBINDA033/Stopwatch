 let [hours, minutes, seconds] = [0, 0, 0];
  let display = document.getElementById("display");
  let timer = null;

  function updateDisplay() {
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');
    display.textContent = `${h}:${m}:${s}`;
  }

  function stopwatch() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateDisplay();
  }

  function start() {
    if (timer !== null) return;
    timer = setInterval(stopwatch, 1000);
  }

  function stop() {
    clearInterval(timer);
    timer = null;
  }

  function reset() {
    stop();
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
  }
