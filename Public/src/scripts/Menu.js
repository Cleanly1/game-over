class Menu {
  constructor() {
    this.menuX = width / 2;
    this.menuY = height / 3 + 50;
  }

  drawMain() {
    push();
    textAlign(CENTER);
    fill(0, 0, 0);
    stroke(51);
    textSize(36);
    text(`Bubble Not So Trouble`, this.menuX, this.menuY - 100);
    textSize(24);
    if (menuPos === 1) {
      triangle(
        this.menuX - 100,
        this.menuY,
        this.menuX - 100,
        this.menuY - 20,
        this.menuX - 62,
        this.menuY - 10
      );
    }
    text(`Start Game`, this.menuX, this.menuY);
    if (menuPos === 2) {
      triangle(
        this.menuX - 114,
        this.menuY + 25,
        this.menuX - 114,
        this.menuY + 5,
        this.menuX - 76,
        this.menuY + 15
      );
    }
    text(`Choose Level`, this.menuX, this.menuY + 24);
    if (menuPos === 3) {
      triangle(
        this.menuX - 85,
        this.menuY + 30,
        this.menuX - 85,
        this.menuY + 50,
        this.menuX - 46,
        this.menuY + 40
      );
      textSize(12);
      text(`(Not Active)`, this.menuX, this.menuY + 62);
    }
    textSize(24);
    text(`Settings`, this.menuX, this.menuY + 48);

    pop();
  }

  drawLevels() {
    push();
    textAlign(CENTER);
    fill(0, 0, 0);
    stroke(51);
    textSize(36);
    text(`Choose a Level`, this.menuX, this.menuY - 100);
    textSize(24);
    if (levelsMenuPos === 1) {
      triangle(
        this.menuX - 90,
        this.menuY,
        this.menuX - 90,
        this.menuY - 20,
        this.menuX - 52,
        this.menuY - 10
      );
    }
    text(`Level 1`, this.menuX, this.menuY);
    if (levelsMenuPos === 2) {
      triangle(
        this.menuX - 90,
        this.menuY + 25,
        this.menuX - 90,
        this.menuY + 5,
        this.menuX - 52,
        this.menuY + 15
      );
    }
    text(`Level 2`, this.menuX, this.menuY + 24);

    pop();
  }
  drawHelp() {
    push();
    textAlign(CENTER);
    fill(0, 0, 0);
    stroke(51);
    textSize(36);
    text(`Welcome!`, this.menuX, this.menuY - 100);
    textSize(14);
    text(
      `This game is inspired by Bubble Trouble.

    - Press enter to start game, or use the down key to choose level.

    - Move player with right and left keys.

    - Shoot arrows with spacebar.

    - To level up you have to shoot all bubbles until there is no left.

    - This game has only two levels so when the second level is done you have won the game.

    - When you start a new game you will se your highscore in the score table in the top left corner.

    Have fun!`,
      this.menuX,
      this.menuY - 50
    );
    text(
      `
    I understand the game!
    (Press Enter to continue)
    `,
      this.menuX,
      this.menuY + 220
    );
    pop();
  }
}
