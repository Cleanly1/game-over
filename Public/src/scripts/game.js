function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function start(){
  timer = new Timer(120, 10);
  timer.start()
  startTime = true;
  bubbles.push(new Bubble(width / 2, height / 3, 100, 5, 5, randomColor()));
}

function draw() {
  background(255);
  if (time == 0) {
    bubbles.pop();
    push();
		fill(0, 0, 0);
		stroke(51);
		textSize(20);
		text(`Game Over`, windowWidth / 2, windowHeight/ 2);
		pop();
  }
  
  // Draw bubbles
  for (let i = 0; i < bubbles.length; i++) {
    const bubble = bubbles[i];
    bubble.drawBubble();
    bubble.bubbleBounce();

    // Check for collisions between bubble and player
    if (
      bubble.y + bubble.diameter / 2 >= height - 50 &&
      bubble.x - bubble.diameter / 2 <= playerDirection + 50 &&
      bubble.x + bubble.diameter / 2 >= playerDirection
    ) {
      bubbles.pop(bubble);
      //THIS IS WHERE THE CODE FOR GAME OVER GOES
    }
  }

  //Draw arrow
  for (let i = 0; i < arrows.length; i++) {
    const arrow = arrows[i];

    arrow.shootArrow();
    if (arrow.vec.y <= 0) {
      arrows.pop(arrow);
    }

    //Check for collision between arrow and bubbles
    for (let i = 0; i < bubbles.length; i++) {
      const bubble = bubbles[i];
      if (
        arrow.base.x <= bubble.x + bubble.diameter / 2 &&
        arrow.base.x >= bubble.x - bubble.diameter / 2 &&
        Math.abs(arrow.vec.y) <= bubble.y + bubble.diameter / 2
      ) {
        arrows.pop(arrow);

        //Create two new bubbles
        if (bubble.diameter > 20) {
          const newDiameter = bubble.diameter / 2;
          const color = randomColor();
          bubbles.pop(bubble);
          bubbles.push(
            new Bubble(bubble.x, bubble.y, newDiameter, -5, -5, color)
          );
          bubbles.push(
            new Bubble(bubble.x, bubble.y, newDiameter, 5, 5, color)
          );
        } else {
          bubbles.pop(bubble);
        }
      }
    }
  }

  if (startTime === true) {
    timer.draw();
  }
  //Draw Player
  image(img, playerDirection, height - 50, 50, 50);

  // Read key presses to change player's direction
  if (keyIsDown(LEFT_ARROW)) {
    if (playerDirection - 10 < 0) {
      return;
    }
    playerDirection -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (playerDirection + 60 > windowWidth) {
      return;
    }
    playerDirection += 10;
  }
}

function end(timer){
  clearInterval(seconds);
}

// Read key presses to shoot arrows
function keyPressed() {
  if (keyCode === 32) {
    console.log(arrows.length);
    if (arrows.length > 0) {
      return;
    }
    let base = createVector(playerDirection + 25, height);
    let vec = createVector(height, height);
    arrows.push(new Arrow(base, vec));
    end(timer);
  }else if(key === "s"){
    start()
    bubbles.push(new Bubble(windowWidth / 2, Math.floor(windowHeight / 3), 50, 5, 5));
  }
}
