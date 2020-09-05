import { isEqual } from 'lodash';

import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  BLOCK_SIZE_PX,
  // SNAKE_COLOR,
  DIRECTIONS,
} from '@/games/SnakeGame/consts';

import {
  coordinatesToPx,
  directionToAngle,
  getImgUrl,
} from '@/games/SnakeGame/helpers';

export default class Snake {
  static preloadAssets(scene) {
    scene.load.image('SnakeBody', getImgUrl('SnakeBody.png'));
    scene.load.image('SnakeCurveBody', getImgUrl('SnakeCurveBody.png'));
    scene.load.image('SnakeHead', getImgUrl('SnakeHead.png'));
    scene.load.image('SnakeTail', getImgUrl('SnakeTail.png'));
  }

  constructor(scene, gameArea) {
    this.scene = scene;
    this.gameArea = gameArea;
    this.moveDirection = DIRECTIONS.RIGHT;
    this.parts = [];
    this.displayParts = [];

    this.initializeParts();
    this.draw();
  }

  initializeParts = () => {
    this.parts.push({
      x: Math.ceil(3),
      y: Math.ceil(1),
    });

    this.parts.push({
      x: Math.ceil(2),
      y: Math.ceil(1),
    });

    this.parts.push({
      x: Math.ceil(1),
      y: Math.ceil(1),
    });
  };

  draw = () => {
    this.displayParts.forEach((displayPart) => displayPart.destroy());
    this.displayParts = [];

    this.parts.forEach((part, index) => {
      const coordinatesPx = coordinatesToPx({ x: part.x, y: part.y });

      const prevPart = index === 0 ? null : this.parts[index - 1];
      const nextPart =
        index === this.parts.length - 1 ? null : this.parts[index + 1];

      const prevPartSide = this.getSideAgainstOtherPart(part, prevPart);
      const nextPartSide = this.getSideAgainstOtherPart(part, nextPart);

      const adjacentPartSides = new Set([prevPartSide, nextPartSide]);

      const bodyCombinations = [
        {
          combination: new Set([DIRECTIONS.UP, DIRECTIONS.DOWN]),
          rotation: DIRECTIONS.UP,
        },
        {
          combination: new Set([DIRECTIONS.RIGHT, DIRECTIONS.LEFT]),
          rotation: DIRECTIONS.RIGHT,
        },
      ];

      const curveBodyCombinations = [
        {
          combination: new Set([DIRECTIONS.UP, DIRECTIONS.RIGHT]),
          rotation: DIRECTIONS.UP,
        },
        {
          combination: new Set([DIRECTIONS.LEFT, DIRECTIONS.UP]),
          rotation: DIRECTIONS.LEFT,
        },
        {
          combination: new Set([DIRECTIONS.RIGHT, DIRECTIONS.DOWN]),
          rotation: DIRECTIONS.RIGHT,
        },
        {
          combination: new Set([DIRECTIONS.DOWN, DIRECTIONS.LEFT]),
          rotation: DIRECTIONS.DOWN,
        },
      ];

      const bodyCombination = bodyCombinations.find((c) =>
        isEqual(c.combination, adjacentPartSides)
      );
      const curveBodyCombination = curveBodyCombinations.find((c) =>
        isEqual(c.combination, adjacentPartSides)
      );

      let [image, rotation] = [];

      if (parseInt(index) === 0) {
        [image, rotation] = ['SnakeHead', this.moveDirection];
      } else if (bodyCombination) {
        [image, rotation] = ['SnakeBody', bodyCombination.rotation];
      } else if (curveBodyCombination) {
        [image, rotation] = ['SnakeCurveBody', curveBodyCombination.rotation];
      } else if (parseInt(index) === this.parts.length - 1) {
        [image, rotation] = ['SnakeTail', prevPartSide];
      } else {
        throw new Error('Can not find part to draw');
      }

      const displayPart = this.scene.add
        .image(coordinatesPx.x, coordinatesPx.y, image)
        .setDisplaySize(BLOCK_SIZE_PX, BLOCK_SIZE_PX)
        .setAngle(directionToAngle(rotation));

      this.gameArea.add(displayPart);
      this.displayParts.push(displayPart);
    });
  };

  getSideAgainstOtherPart = (part, otherPart) => {
    if (!part || !otherPart) return null;

    if (part.x > otherPart.x) return DIRECTIONS.LEFT;
    if (part.x < otherPart.x) return DIRECTIONS.RIGHT;
    if (part.y > otherPart.y) return DIRECTIONS.UP;
    if (part.y < otherPart.y) return DIRECTIONS.DOWN;

    throw Error('Failed to getSideAgainstOtherPart');
  };

  getHeadPart = () => {
    return this.parts[0];
  };

  getLastPart = () => {
    return this.parts[this.parts.length - 1];
  };

  calculateNewParts = (moveDirection) => {
    this.moveDirection = moveDirection || this.moveDirection;
    let newCoordinates = [];
    let prevPart;

    for (let part of this.parts) {
      // Body of the snake
      if (prevPart) {
        newCoordinates.push({
          x: prevPart.x,
          y: prevPart.y,
        });
        prevPart = part;
        continue;
      }

      // Head of the snake
      let headCoordinates = { x: part.x, y: part.y };

      const coordinateChanges = {
        [DIRECTIONS.UP]: ['y', -1],
        [DIRECTIONS.RIGHT]: ['x', 1],
        [DIRECTIONS.DOWN]: ['y', 1],
        [DIRECTIONS.LEFT]: ['x', -1],
      };

      const coordinateChange = coordinateChanges[this.moveDirection];
      headCoordinates[coordinateChange[0]] += coordinateChange[1];

      newCoordinates.push(headCoordinates);

      prevPart = part;
    }

    return newCoordinates;
  };

  move = (newCoordinates, shouldGrow) => {
    const lastPart = this.getLastPart();

    this.parts = newCoordinates;

    if (shouldGrow) {
      this.parts.push(lastPart);
    }

    this.draw();
  };

  validateLocation = (parts) => {
    const headPart = parts[0];

    if (
      headPart.x < 1 ||
      headPart.x > BOARD_WIDTH ||
      headPart.y < 1 ||
      headPart.y > BOARD_HEIGHT
    )
      return false;

    for (let index in parts) {
      if (parseInt(index) === 0) continue;

      const otherPart = parts[index];

      if (headPart.x === otherPart.x && headPart.y === otherPart.y) {
        return false;
      }
    }

    return true;
  };
}
