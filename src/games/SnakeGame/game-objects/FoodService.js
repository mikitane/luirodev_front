import { range, sample } from 'lodash';
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  BLOCK_SIZE_PX,
} from '@/games/SnakeGame/consts';
import { coordinatesToPx, getImgUrl } from '@/games/SnakeGame/helpers';

export default class FoodService {
  static preloadAssets(scene) {
    scene.load.image('Cherry', getImgUrl('Cherry.png'));
  }

  constructor(scene, gameArea) {
    this.scene = scene;
    this.gameArea = gameArea;
    this.foodLocation = null;
    this.foodRect = null;
  }

  // TODO: Complexity O(n^2), could be lower?
  addFood = (snakeLocation) => {
    this.foodLocation = this.calculatePossibleFoodLocation(snakeLocation)
    this.draw();
  };

  draw = () => {
    if (this.foodRect) this.foodRect.destroy();

    const coordinatesPx = coordinatesToPx({
      x: this.foodLocation.x,
      y: this.foodLocation.y,
    });

    this.foodRect = this.scene.add
      .image(coordinatesPx.x, coordinatesPx.y, 'Cherry')
      .setDisplaySize(BLOCK_SIZE_PX, BLOCK_SIZE_PX);

    this.gameArea.add(this.foodRect);
  };

  calculatePossibleFoodLocation = (snakeLocation) => {
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

    if (!possibleLocations.length) return null;

    return sample(possibleLocations);
  }
}
