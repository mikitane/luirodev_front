import { range, sample } from 'lodash';
import { BOARD_HEIGHT, BOARD_WIDTH, FOOD_COLOR, BLOCK_SIZE_PX } from '@/games/SnakeGame/consts';
import { coordinatesToPx } from '@/games/SnakeGame/helpers';

export default class FoodService {
  constructor(scene, gameArea) {
    this.scene = scene;
    this.gameArea = gameArea;
    this.foodLocation = null;
    this.foodRect = null;
  }

  // TODO: Complexity O(n^2), could be lower?
  addFood = (snakeLocation) => {
    if (this.foodRect) {
      this.foodRect.destroy();
    }

    this.foodLocation = null;

    const snakeLocationMap = {};

    for (let { x, y } of snakeLocation) {
      if (!(x in snakeLocationMap)) {
        snakeLocationMap[x] = new Set();
      }

      snakeLocationMap[x].add(y);
    }

    const possibleLocations = [];

    for (let x of range(1, BOARD_WIDTH + 1)) {
      for (let y of range(1, BOARD_HEIGHT + 1)) {
        if (x in snakeLocationMap && snakeLocationMap[x].has(y)) {
          continue;
        }

        possibleLocations.push({ x, y });
      }
    }

    if (!possibleLocations.length) return;

    this.foodLocation = sample(possibleLocations);
    const coordinatesInPx = coordinatesToPx(this.foodLocation);

    this.foodRect = this.scene.add
      .rectangle(
        coordinatesInPx.x,
        coordinatesInPx.y,
        BLOCK_SIZE_PX,
        BLOCK_SIZE_PX,
        FOOD_COLOR,
        1
      )
      .setOrigin(0);

    this.gameArea.add(this.foodRect);
  };
}
