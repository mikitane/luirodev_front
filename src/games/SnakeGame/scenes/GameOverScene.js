import Phaser from 'phaser';
import MainScene from "./MainScene";

export default class GameOverScene extends Phaser.Scene {
  create() {
    this.game.registry.get('vue-SnakeGame').setCurrentScene('GameOver');
  }

  playAgain = () => {
    this.scene.add("MainScene", MainScene, true);
    this.scene.remove('GameOverScene');
  }
}
