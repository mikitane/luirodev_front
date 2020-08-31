import Phaser from 'phaser';

export default class MainMenuScene extends Phaser.Scene {
  create() {
    console.log('MainMenuScene, create');
    this.game.registry.get('vue-SnakeGame').showScreen('MainMenu');
  }

  startGame = () => {
    this.scene.stop('MainMenuScene');
    this.scene.start('MainScene');
  };
}
