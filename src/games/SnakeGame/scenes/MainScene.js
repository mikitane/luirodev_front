import Phaser from 'phaser';
import Snake from '@/games/SnakeGame/game-objects/Snake';
import {
  BORDER_COLOR,
  BORDER_WIDTH_PX,
  BOARD_WIDTH_PX,
  BOARD_HEIGHT_PX,
  // MOVEMENT,
} from '@/games/SnakeGame/consts';
import { MOVEMENT } from '../consts';

// TODO: Proper re-initialization when playing again
export default class MainScene extends Phaser.Scene {
  create() {
    this.game.registry.get('vue-SnakeGame').showScreen(null);

    this.latestUpdate = null;
    const gameArea = this.createGameArea();
    this.drawBorder();
    this.setupKeyboard();

    this.nextMoveDirection = null;
    this.snake = new Snake(this, gameArea);
  }

  update(time) {
    let currentTime = time;

    if (time instanceof Date) {
      currentTime = time.getTime();
    }

    if (!this.latestUpdate || currentTime - this.latestUpdate > 500) {
      const snakeParts = this.snake.calculateNewCoordinates(this.nextMoveDirection);

      if (!this.validateSnakeLocation(snakeParts)) {
        this.gameOver();
        return
      }

      this.snake.move();
      this.nextMoveDirection = null;
      this.latestUpdate = currentTime;
    }
  }

  drawBorder = () => {
    const graphics = this.add.graphics();
    graphics.lineStyle(BORDER_WIDTH_PX, BORDER_COLOR, 1.0);
    graphics.strokeRect(
      BORDER_WIDTH_PX / 2,
      BORDER_WIDTH_PX / 2,
      BOARD_WIDTH_PX - BORDER_WIDTH_PX,
      BOARD_HEIGHT_PX - BORDER_WIDTH_PX
    );
  };

  createGameArea = () => {
    return this.add.container(BORDER_WIDTH_PX, BORDER_WIDTH_PX);
  };

  setupKeyboard = () => {
    this.input.keyboard.on('keydown', this.onKeyPressed, this);
  };

  onKeyPressed = (event) => {
    const keys = {
      ArrowUp: MOVEMENT.UP,
      ArrowRight: MOVEMENT.RIGHT,
      ArrowDown: MOVEMENT.DOWN,
      ArrowLeft: MOVEMENT.LEFT,
    };

    if (!(event.key in keys)) return;
    const moveDirection = keys[event.key];

    event.preventDefault();

    if (this.nextMoveDirection) return;

    if (
      [MOVEMENT.UP, MOVEMENT.DOWN].includes(moveDirection) &&
      [MOVEMENT.UP, MOVEMENT.DOWN].includes(this.snake.moveDirection)
    )
      return;

    if (
      [MOVEMENT.LEFT, MOVEMENT.RIGHT].includes(moveDirection) &&
      [MOVEMENT.LEFT, MOVEMENT.RIGHT].includes(this.snake.moveDirection)
    )
      return;

    this.nextMoveDirection = keys[event.key];
  };

  validateSnakeLocation = (snakeParts) => {
    const headCoordinates = snakeParts[0].coordinates;

    if (
      headCoordinates.x < 1 ||
      headCoordinates.x > 11 ||
      headCoordinates.y < 1 ||
      headCoordinates.y > 11
    ) return false;

    return true;
  };

  gameOver = () => {
    this.scene.stop('MainScene');
    this.scene.start('GameOverScene');
  }
}
