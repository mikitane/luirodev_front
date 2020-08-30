export default class Snake {
  constructor() {
    this.parts = [];
    this.addPart({ x: 5, y: 5 });
  }

  addPart(coordinates) {
    this.parts.push(coordinates);
  }

  eat() {

  }
}
