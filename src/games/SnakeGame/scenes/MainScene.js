import Phaser from 'phaser';
import Snake from '@/games/SnakeGame/game-objects/Snake';
import {
  BORDER_COLOR,
  BORDER_WIDTH_PX,
  BOARD_WIDTH_PX,
  BOARD_HEIGHT_PX,
  SNAKE_MOVES_PER_SECOND,
  // MOVEMENT,
} from '@/games/SnakeGame/consts';
import { MOVEMENT } from '../consts';
import FoodService from '../game-objects/FoodService';

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

    this.foodService = new FoodService(this, gameArea);
    this.foodService.addFood(this.snake.getCurrentCoordinates());
  }

  update(time) {
    let currentTime = time;

    if (time instanceof Date) {
      currentTime = time.getTime();
    }

    if (
      !this.latestUpdate ||
      currentTime - this.latestUpdate > 1000 / SNAKE_MOVES_PER_SECOND
    ) {
      const newSnakeCoordinates = this.snake.calculateNewCoordinates(
        this.nextMoveDirection
      );

      if (!this.snake.validateLocation(newSnakeCoordinates)) {
        this.gameOver();
        return;
      }

      const headCoordinates = newSnakeCoordinates[0];
      const foodLocation = this.foodService.foodLocation;

      const snakeOnFood =
        foodLocation &&
        foodLocation.x === headCoordinates.x &&
        foodLocation.y === headCoordinates.y;

      this.snake.move(newSnakeCoordinates, snakeOnFood);

      if (snakeOnFood) {
        this.foodService.addFood(this.snake.getCurrentCoordinates());
      }

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

  gameOver = () => {
    this.scene.stop('MainScene');
    this.scene.start('GameOverScene');
  };
}
