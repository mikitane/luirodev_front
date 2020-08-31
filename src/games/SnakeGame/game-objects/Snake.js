import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  BLOCK_SIZE_PX,
  SNAKE_COLOR,
  MOVEMENT,
} from '@/games/SnakeGame/consts';

export default class Snake {
  constructor(scene, gameArea) {
    this.scene = scene;
    this.gameArea = gameArea;
    this.moveDirection = MOVEMENT.RIGHT;
    this.parts = [];

    this.addPart({
      x: Math.ceil(BOARD_WIDTH / 2),
      y: Math.ceil(BOARD_HEIGHT / 2),
    });
  }

  addPart = ({ x, y }) => {
    const coordinatesInPx = this.coordinatesToPx({ x, y });

    const rect = this.scene.add
      .rectangle(
        coordinatesInPx.x,
        coordinatesInPx.y,
        BLOCK_SIZE_PX,
        BLOCK_SIZE_PX,
        SNAKE_COLOR,
        1
      )
      .setOrigin(0);

    this.gameArea.add(rect);
    this.parts.push({ coordinates: { x, y }, rect });
  };

  calculateNewCoordinates = (moveDirection) => {
    this.moveDirection = moveDirection || this.moveDirection;
    let prevPart;

    for (let part of this.parts) {
      // Body of the snake
      if (prevPart) {
        const nextX = prevPart.coordinates.x;
        const nextY = prevPart.coordinates.y;

        part.x = nextX;
        part.y = nextY;

        prevPart = part;
        continue;
      }

      let nextCoordinates;

      // Head of the snake
      if (this.moveDirection === MOVEMENT.UP) {
        nextCoordinates = { x: part.coordinates.x, y: part.coordinates.y - 1 };
      } else if (this.moveDirection === MOVEMENT.RIGHT) {
        nextCoordinates = { x: part.coordinates.x + 1, y: part.coordinates.y };
      } else if (this.moveDirection === MOVEMENT.DOWN) {
        nextCoordinates = { x: part.coordinates.x, y: part.coordinates.y + 1 };
      } else if (this.moveDirection === MOVEMENT.LEFT) {
        nextCoordinates = { x: part.coordinates.x - 1, y: part.coordinates.y };
      }

      part.coordinates = nextCoordinates;
    }

    return this.parts;
  };

  move = () => {
    for (let part of this.parts) {
      const coordinatesInPx = this.coordinatesToPx({
        x: part.coordinates.x,
        y: part.coordinates.y,
      });
      part.rect.setPosition(coordinatesInPx.x, coordinatesInPx.y);
    }
  };

  coordinatesToPx = ({ x, y }) => {
    // -1 to make block coordinates start from
    return {
      x: (x - 1) * BLOCK_SIZE_PX,
      y: (y - 1) * BLOCK_SIZE_PX,
    };
  };
}
