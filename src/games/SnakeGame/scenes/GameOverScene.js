import Phaser from 'phaser';

export default class GameOverScene extends Phaser.Scene {
  create() {
    this.game.registry.get('vue-SnakeGame').showScreen('GameOver');
  }

  playAgain = () => {
    this.scene.stop('GameOverScene');
    this.scene.start('MainScene');
  }
}
