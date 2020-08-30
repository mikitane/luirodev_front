import Phaser from 'phaser';
// import { first } from 'lodash';

export default class PlaceholderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PlaceholderScene', map: {scenePlugin: 'scene', registry: 'registry', game: 'game'} });
    this.firstUpdate = true;
  }

  create() {
    this.game.registry.get('vue').setSceneInitialized(true);

    console.log('Phaser normal');
    console.log(this.scene)
    console.log(this.game.scene.getScenes(true));
    // console.log(this.scene.getScene('PlaceholderScene'));

    // setTimeout(() => {
    //   console.log('Phaser setTimeout');
    //   console.log(this.scene.getScenes());
    //   console.log(this.scene.getScene('PlaceholderScene'));
    // }, 1000);
  }

  update() {
    // if (this.firstUpdate) {
    //   console.log('Phaser first update');
    //   console.log(this.scene.getScenes());
    //   console.log(this.scene.getScene('PlaceholderScene'));
    //   this.firstUpdate = false;
    // }
  }
}
