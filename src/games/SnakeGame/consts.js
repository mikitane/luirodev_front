export const BOARD_HEIGHT = 11; // Set to odd number
export const BOARD_WIDTH = 11; // Set to odd number

export const BLOCK_SIZE_PX = 40;
export const SNAKE_COLOR = 0x58d182;
export const BORDER_COLOR = 0xffffff;
export const BORDER_WIDTH_PX = 6;

export const MOVEMENT = {
  UP: 'UP',
  RIGHT: 'RIGHT',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
};

export const BOARD_HEIGHT_PX =
  BOARD_HEIGHT * BLOCK_SIZE_PX + 2 * BORDER_WIDTH_PX;
export const BOARD_WIDTH_PX = BOARD_WIDTH * BLOCK_SIZE_PX + 2 * BORDER_WIDTH_PX;
