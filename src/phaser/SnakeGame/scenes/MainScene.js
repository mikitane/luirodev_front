import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    console.log('MainScene create')
    console.log(this.game.registry.get('vue'))
    this.game.registry.get('vue').setSceneInitialized(true)
    this.add.rectangle(100, 100, 100, 100, 0xffffff, 1)
  }
}