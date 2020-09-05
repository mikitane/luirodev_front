import Phaser from 'phaser';
import MainScene from "./MainScene";

export default class MainMenuScene extends Phaser.Scene {
  create() {
    console.log('MainMenuScene, create');
    this.game.registry.get('vue-SnakeGame').setCurrentScene('MainMenu');
  }

  startGame = () => {
    this.scene.add("MainScene", MainScene, true);
    this.scene.remove('MainMenuScene');
  };
}
