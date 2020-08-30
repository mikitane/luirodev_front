import Phaser from 'phaser';
// import { first } from 'lodash';

export default class PlaceholderScene extends Phaser.Scene {
  constructor() {
    console.log('PlaceholderScene, init')

    super({ key: 'PlaceholderScene', map: {scenePlugin: 'scene', registry: 'registry', game: 'game', add: 'add'} });
    this.firstUpdate = true;
  }

  create() {
    console.log('PlaceholderScene, create')
    //this.game.registry.get('vue').setPlaceholderSceneInitialized(true);
    this.add.rectangle(100, 100, 100, 100, 0xffff00, 1)

  }

}
