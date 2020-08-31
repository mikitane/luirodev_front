import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  BLOCK_SIZE_PX,
  SNAKE_COLOR,
  MOVEMENT,
} from '@/games/SnakeGame/consts';

import { coordinatesToPx } from '@/games/SnakeGame/helpers';

export default class Snake {
  constructor(scene, gameArea) {
    this.scene = scene;
    this.gameArea = gameArea;
    this.moveDirection = MOVEMENT.RIGHT;
    this.parts = [];

    this.initializeParts();
  }

  initializeParts = () => {
    this.addPart({
      x: Math.ceil(BOARD_WIDTH / 2),
      y: Math.ceil(BOARD_HEIGHT / 2),
    });

    this.addPart({
      x: Math.ceil(BOARD_WIDTH / 2 - 1),
      y: Math.ceil(BOARD_HEIGHT / 2),
    });

    this.addPart({
      x: Math.ceil(BOARD_WIDTH / 2 - 2),
      y: Math.ceil(BOARD_HEIGHT / 2),
    });
  }

  addPart = ({ x, y }) => {
    const coordinatesInPx = coordinatesToPx({ x, y });

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

  getCurrentCoordinates = () => {
    return this.parts.map((part) => part.coordinates);
  };

  getHeadCoordinates = () => {
    return this.parts[0].coordinates;
  };

  getLastPartCoordinates = () => {
    return this.parts[this.parts.length - 1].coordinates;
  };

  calculateNewCoordinates = (moveDirection) => {
    this.moveDirection = moveDirection || this.moveDirection;
    let newCoordinates = [];
    let prevPart;

    for (let part of this.parts) {
      // Body of the snake
      if (prevPart) {
        newCoordinates.push({
          x: prevPart.coordinates.x,
          y: prevPart.coordinates.y,
        });
        prevPart = part;
        continue;
      }

      // Head of the snake
      let headCoordinates = { x: part.coordinates.x, y: part.coordinates.y };

      const coordinateChanges = {
        [MOVEMENT.UP]: ['y', -1],
        [MOVEMENT.RIGHT]: ['x', 1],
        [MOVEMENT.DOWN]: ['y', 1],
        [MOVEMENT.LEFT]: ['x', -1],
      };

      const coordinateChange = coordinateChanges[this.moveDirection];
      headCoordinates[coordinateChange[0]] += coordinateChange[1];

      newCoordinates.push(headCoordinates);

      prevPart = part;
    }

    return newCoordinates;
  };

  move = (newCoordinates, shouldGrow) => {
    const lastPartCoordinates = this.getLastPartCoordinates();

    for (let index in newCoordinates) {
      const coordinates = newCoordinates[index];

      const part = this.parts[index];
      part.coordinates = coordinates;

      const coordinatesInPx = coordinatesToPx({
        x: coordinates.x,
        y: coordinates.y,
      });

      part.rect.setPosition(coordinatesInPx.x, coordinatesInPx.y);
    }

    if (shouldGrow) {
      this.addPart(lastPartCoordinates);
    }
  };

  validateLocation = (location) => {
    const headCoordinates = location[0];

    if (
      headCoordinates.x < 1 ||
      headCoordinates.x > BOARD_WIDTH ||
      headCoordinates.y < 1 ||
      headCoordinates.y > BOARD_HEIGHT
    )
      return false;

    for (let index in location) {
      if (parseInt(index) === 0) continue;

      const coordinates = location[index];

      if (
        headCoordinates.x === coordinates.x &&
        headCoordinates.y === coordinates.y
      ) {
        return false;
      }
    }

    return true;
  };
}
