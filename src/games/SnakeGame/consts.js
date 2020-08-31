export const BOARD_HEIGHT = 11;
export const BOARD_WIDTH = 11;

export const SNAKE_COLOR = 0x58d182;
export const FOOD_COLOR = 0xd16c58;
export const BORDER_COLOR = 0xffffff;

export const MOVEMENT = {
  UP: 'UP',
  RIGHT: 'RIGHT',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
};

export const SNAKE_MOVES_PER_SECOND = 6;

export const BLOCK_SIZE_PX = 40;
export const BORDER_WIDTH_PX = 6;

export const BOARD_HEIGHT_PX =
  BOARD_HEIGHT * BLOCK_SIZE_PX + 2 * BORDER_WIDTH_PX;
export const BOARD_WIDTH_PX = BOARD_WIDTH * BLOCK_SIZE_PX + 2 * BORDER_WIDTH_PX;
