import Phaser from 'phaser';
import Snake from '@/games/SnakeGame/game-objects/Snake';
import {
  BACKGROUND_COLOR,
  BORDER_COLOR,
  BORDER_WIDTH_PX,
  BOARD_WIDTH_PX,
  BOARD_HEIGHT_PX,
  SNAKE_MOVES_PER_SECOND,
  DIRECTIONS,
} from '@/games/SnakeGame/consts';
import GameOverScene from './GameOverScene';
import FoodService from '../game-objects/FoodService';

// TODO: Proper re-initialization when playing again
export default class MainScene extends Phaser.Scene {
  preload() {
    Snake.preloadAssets(this);
    FoodService.preloadAssets(this);
  }

  create() {
    this.gamePaused = false;
    this.gameOver = false;

    this.game.registry.get('vue-SnakeGame').score = 0;
    this.game.registry.get('vue-SnakeGame').setCurrentScene('MainScene');

    this.latestUpdate = null;
    this.drawBackground();
    const gameArea = this.createGameArea();
    this.drawBorder();
    this.setupKeyboard();

    this.nextMoveDirection = null;
    this.snake = new Snake(this, gameArea);

    this.foodService = new FoodService(this, gameArea);
    this.foodService.addFood(this.snake.parts);
  }

  update(time) {
    if (this.gamePaused || this.gameOver) return;

    let currentTime = time;

    if (time instanceof Date) {
      currentTime = time.getTime();
    }

    if (
      !this.latestUpdate ||
      currentTime - this.latestUpdate > 1000 / SNAKE_MOVES_PER_SECOND
    ) {
      console.log(this.nextMoveDirection);
      const newSnakeParts = this.snake.calculateNewParts(
        this.nextMoveDirection
      );

      if (!this.snake.validateLocation(newSnakeParts)) {
        this.handleGameOver();
        return;
      }

      const headPart = newSnakeParts[0];
      const foodLocation = this.foodService.foodLocation;

      const snakeOnFood =
        foodLocation &&
        foodLocation.x === headPart.x &&
        foodLocation.y === headPart.y;

      this.snake.move(newSnakeParts, snakeOnFood);

      if (snakeOnFood) {
        this.game.registry.get('vue-SnakeGame').score += 100;
        this.foodService.addFood(this.snake.parts);
      }

      this.nextMoveDirection = null;
      this.latestUpdate = currentTime;
    }
  }

  drawBackground = () => {
    this.add
      .rectangle(0, 0, BOARD_WIDTH_PX, BOARD_HEIGHT_PX, BACKGROUND_COLOR, 1)
      .setOrigin(0);
  };

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
    console.log(event.key);
    if (this.handleEsc(event)) return;
    if (this.handleArrows(event)) return;
  };

  handleEsc = (event) => {
    if (event.key !== 'Escape') return false;
    event.preventDefault();
    this.gamePaused = !this.gamePaused;

    return true;
  };

  handleArrows = (event) => {
    const keys = {
      ArrowUp: DIRECTIONS.UP,
      ArrowRight: DIRECTIONS.RIGHT,
      ArrowDown: DIRECTIONS.DOWN,
      ArrowLeft: DIRECTIONS.LEFT,
    };

    if (!(event.key in keys)) return false;
    if (this.gamePaused) return true;

    const moveDirection = keys[event.key];

    event.preventDefault();

    this.changeMoveDirection(moveDirection)
  };

  changeMoveDirection = (moveDirection) => {
    // this.nextMoveDirection is set to null on every update.
    // This logic makes sure that user can't change moveDirection
    // before next update.
    if (this.nextMoveDirection) return true;

    if (
      [DIRECTIONS.UP, DIRECTIONS.DOWN].includes(moveDirection) &&
      [DIRECTIONS.UP, DIRECTIONS.DOWN].includes(this.snake.moveDirection)
    )
      return true;

    if (
      [DIRECTIONS.LEFT, DIRECTIONS.RIGHT].includes(moveDirection) &&
      [DIRECTIONS.LEFT, DIRECTIONS.RIGHT].includes(this.snake.moveDirection)
    )
      return true;

    this.nextMoveDirection = moveDirection;

    return true;
  };

  handleGameOver = () => {
    this.gameOver = true;
    this.scene.add('GameOverScene', GameOverScene, true);
    this.scene.remove('MainScene');
  };
}
