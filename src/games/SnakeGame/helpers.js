import { BLOCK_SIZE_PX } from '@/games/SnakeGame/consts';

export const coordinatesToPx = ({ x, y }) => {
  // -1 to make block coordinates start from
  return {
    x: (x - 1) * BLOCK_SIZE_PX,
    y: (y - 1) * BLOCK_SIZE_PX,
  };
};
