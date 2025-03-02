document.addEventListener("DOMContentLoaded", () => {
  const timerDisplay = document.getElementById("focus-timer");
  const startButton = document.getElementById("start-timer");

  let timer;
  let minutes = 25;
  let seconds = 0;
  let isRunning = false;
  const strings = [
    "The successful warrior is the average man, with laser-like focus.",
    "not being where you want to be, should be enough motivation.",
    "Everyone waits for the right time, when they really should've started a long time ago",
    "No success until you accept the pain of discipline.",
    "Nothing gets easier, you just get better.",
  ];

  function quotesFn() {
    const quotes = document.getElementById("quotes");

    const random = Math.floor(Math.random() * strings.length);
    quotes.innerText = strings[random];
  }

  window.addEventListener("DOMContentLoaded", quotesFn);

  function updateTimerDisplay() {
    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  function startTimer() {
    if (isRunning) return;

    isRunning = true;
    startButton.textContent = "Reset Timer";

    timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          timerDisplay.textContent = "Time's up!";
          startButton.textContent = "Start Focus Timer";
          isRunning = false;

          // Play notification sound
          const audio = new Audio(
            "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLHPM+N2TQwghWLD0756GGxImYKvt06J6KRIUNHWsybiSdTcNBwk0htzxzbKRbiIEBRIse+L5yJuCZDkVChIqcNXqvamQdkMrCgQaQ6jc3MWolnZCKAwIEzOFx+TBrpp8TzYTCRUmW5nGwrKifVQzEgwJECFTlNDVtqOGVjcVDQkTHUJ6ttfRro1hQB0QDA0XKFmQwMm8qoVYNhYNChAYL1uNvMPFtJJnRB0QCw0UJE6Ltr/HtZVrRiASDQwSIEuGuMLHtpZuRyITDgwRHkeDuMTJuJhwSSMUDwwQHEGAt8XKuplyTCUVEA0OGj5+t8fLu5p0TSYXEg0NGTx8t8jMvJt2TygZEw4NGDp6t8nNvZ14UCkaEw4MFzh5t8rPvp56UisbFA8MFjZ4t8vQv6B8VC0cFQ8MFjV2t8vQwKF+VS4dFRAMFTR2t8zRwaJ/VzAdFRAMFTN1t83RwqOAWDEfFhEMFDJ0t87Sw6WBWjIgFxIMFDFzt8/TxKaBWzMhGBMMFDFyt9DTxaeAXDQiGRQMEzBxt9HUxqiCXTUjGhUMEy9wt9LVx6mDXjYkGxUNEi5vt9PWyKqEXzckHBYNEi5ut9TXyauFYDglHBYNES1tt9XYyqyGYTkmHRcNEixst9bZy62HYjomHhcOESxrt9fay66IYzsnHxgOEStqt9jbzK+JZDwoIBkOESppt9nczrCKZT0pIRkPESlot9rdz7GLZj4qIhoPEShnt9vd0LKMZz8rIxsPECdmt9ze0bONaEAsJBwPECZlt93f0rSOaUEtJR0QDyVkt97g07WPakItJh4QDyRjt9/h1LWQa0MuJx8RDiNit+Di1baRbEQvKB8RDiJht+Hj1reSbUUwKSASECFgt+Lk17iTbkYxKiESECBft+Pl2LmUb0cyKyISECBet+Tm2bqVcEgzLCMTDx9dt+Xn2ruWcUk0LSMTDx5ct+bo27yXcko1LiQTDx1bt+fp3L2Yc0s2LyUUDxxat+jq3b6ZdEw3MCUUDxtZt+nr3r+adU04MSYUDxpYt+rs38CbdE45MicVDxlXt+vt4MGcdU86MygVDxlWt+zu4cKddk87NCkVDxhVt+3v4sOed087NSkWDxdUt+7w48SfeFA8NioWDxZTt+/x5MWgeVE9NysWDxVSt/Dy5cahelI+OCwXDxRRt/Hz5seie1M/OSwXDxNQt/L05siifFRAOi0XDxJPt/P158mjfVVBOy4XDxFOt/T258qkflZCPC8YDxBNt/X36MulfldDPS8YDw9Mt/b46culfldEPjAYDw5Lt/f56sumf1hFPzEZDw1Kt/j66synf1lGQDIZDwxJt/n7682ogFpHQTIZDwtIt/r87s6pgVtIQjMaDwpHt/v97s+qgVxJQzQaDwlGt/z+79CrgV1KRDUaDwhFt/3/8NGsg15LRTYbDwdEuP7/8dKtg19MRjcbDwZDuP//8tOuhGBNRzgbDwVCuP//89SvhGFOSDkbDwRBuP//9NWwhWJPSTocDwNAuP//9dawhWNQSjscDwI/uP//9teximRRSzwdDwE+uP//99iyimVSTD0dDwA9uP//+NmzimZTTT4dDv88uP//+dq0i2dUTj8eDv47uP//+tu1i2hVTz8eDv06uP//+9y2jGlWUD8eDvw5uP///N23jGpXUUAeDvs4uP///d64jWtYUkEeDvo3uP///t+5jWxZU0IeDvk2uP///+C6jm1aVEIeDvg1uP///+G7j25bVUMeDvc0uP///+K8j29cVkQeDvYzuP///+O9kHBdV0QeDvUyuP///+S+kXFeWEUeDvQxuP///+W/kXJfWUYeDvMwuP///+bAknNgWkceDvIvuP///+fBk3RhW0geDvEuuP///+jCk3ViXEkeDvAt",
          );
          audio.play();

          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }

      updateTimerDisplay();
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    isRunning = false;
    updateTimerDisplay();
    startButton.textContent = "Start Focus Timer";
  }

  startButton.addEventListener("click", () => {
    if (!isRunning) {
      startTimer();
    } else {
      resetTimer();
    }
  });

  // Initialize timer display
  updateTimerDisplay();
});
