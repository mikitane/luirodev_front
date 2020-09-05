import { BLOCK_SIZE_PX, DIRECTIONS } from '@/games/SnakeGame/consts';

export const coordinatesToPx = ({ x, y }) => {
  // -1 to make block coordinates start from 1
  return {
    x: (x - 1) * BLOCK_SIZE_PX + (BLOCK_SIZE_PX  / 2),
    y: (y - 1) * BLOCK_SIZE_PX + (BLOCK_SIZE_PX  / 2),
  };
};

export const directionToAngle = (direction) =>
  ({
    [DIRECTIONS.UP]: 0,
    [DIRECTIONS.RIGHT]: 90,
    [DIRECTIONS.DOWN]: 180,
    [DIRECTIONS.LEFT]: -90,
  }[direction]);

export const getImgUrl = (url) => {
    return require("@/assets/" + url);
  }