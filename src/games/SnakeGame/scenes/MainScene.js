import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    console.log('MainScene, init')

    super({ key: 'MainScene' })
  }

  create() {
    console.log('MainScene, create')
    // this.game.registry.get('vue').setSceneInitialized(true)
    this.add.rectangle(100, 100, 100, 100, 0xffffff, 1)
  }
}