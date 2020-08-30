import Phaser from 'phaser';
// import { first } from 'lodash';

export default class PlaceholderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PlaceholderScene', map: {scenePlugin: 'scene', registry: 'registry', game: 'game'} });
    this.firstUpdate = true;
  }

  create() {
    this.game.registry.get('vue').setPlaceholderSceneInitialized(true);

  }

}
