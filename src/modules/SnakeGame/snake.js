export default class Snake {
  constructor() {
    this.parts = [];
  }

  initialize = startCoord => {
    this.parts.push(startCoord);
  }
}