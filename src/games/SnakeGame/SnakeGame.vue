<template>
  <div :class="$style.container">
    <div id="snake-game-container" :class="$style.snakeGameContainer">
      <!-- <MainMenu v-if="currentScreen === 'MainMenu'" @start-game="startGame" /> -->
    </div>
  </div>
</template>

<script>
import Phaser from "phaser";
import PlaceholderScene from "./scenes/PlaceholderScene";
import MainScene from "./scenes/MainScene";
// import MainMenu from "./components/MainMenu";

export default {
  props: ["title"],
  //components: { MainMenu },

  mounted() {
    // $nextTick makes sure that all Vue components are mounted
    // before the game is initialized.
    this.$nextTick(function () {
      this.initializeGame();

      // Scenes can use this component to call methods from Vue side.
      // This works with an assumption that first Scene is not initialized when
      // creating a new Game object. In Phaser version 3.24.1 this seems to be the case.
      this.game.registry.set("vue", this);
    });
  },

  data: function () {
    return {
      placeholderSceneInitialized: false,
      currentScreen: 'MainMenu',
    };
  },

  methods: {
    initializeGame() {
      const gameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: "snake-game-container",
        scale: {
          mode: Phaser.Scale.FIT,
        },
        physics: {
          default: "arcade",
          arcade: {
            gravity: { y: 1 },
          },
        },
        scene: [PlaceholderScene, MainScene], // TODO: Initialize Scenes in this.initializeGame
      };
      this.game = new Phaser.Game(gameConfig);
    },
    setPlaceholderSceneInitialized(value) {
      this.placeholderSceneInitialized = value;
    },
    startGame() {
      if (!this.placeholderSceneInitialized) return;
      console.log('startGame')
      this.game.scene.stop("PlaceholderScene");
      this.game.scene.start("MainScene");
      this.currentScreen = 'MainScene';
    },
  },
};
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 600px;
}

.header {
  margin-bottom: 16px;
}

.snakeGameContainer {
  position: relative;
}
</style>