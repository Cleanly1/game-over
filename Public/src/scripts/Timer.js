function counter(maxTime) {
  var i = maxTime;
  time = maxTime;
  seconds = setInterval(
    function () {
      i--;
      time = i;
    },
    1000,
    i
  );
}

class Timer {
  constructor(maxTime) {
    this.time = maxTime;
    this.maxTime = maxTime;
    this.score = 0;
    this.scorePerBubble = 1.23857;
    this.end = false;
    this.highScore = getItem("highScore") === null ? 0 : getItem("highScore");
  }

  draw() {
    this.time = time;
    push();
    fill(0, 0, 0);
    stroke(51);
    textSize(20);
    text(`Time Left: ${this.time}`, 5, 20);
    text(`Score: ${this.score}`, 5, 40);
    text(`High Score: ${this.highScore}`, 5, 60);
    pop();
  }

  start() {
    counter(this.maxTime);
  }

  countScore() {
    this.score += this.time * this.scorePerBubble;
  }

  stop() {
    clearInterval(seconds);
    gameStart = false;
    return this.score;
  }

  gameOver() {
    clearInterval(seconds);
    gameStart = false;
  }
}
