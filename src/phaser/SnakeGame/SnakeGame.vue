<template>
  <div :class="$style.container">
    <div id="snake-game-container" :class="$style.snakeGameContainer">
      <MainMenu :sceneInitialized="sceneInitialized" />
    </div>
  </div>
</template>

<script>
import Phaser from "phaser";
import PlaceholderScene from "./scenes/PlaceholderScene";
import MainScene from "./scenes/MainScene";
import MainMenu from "./components/MainMenu";

export default {
  props: ["title"],
  components: { MainMenu },

  mounted() {
    // $nextTick makes sure that all Vue components are mounted.
    this.$nextTick(function () {
      this.initializeGame();
      this.game.registry.set("vue", this);
    });
  },

  data: function () {
    return {
      sceneInitialized: false,
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
        scene: [PlaceholderScene, MainScene],
      };
      this.game = new Phaser.Game(gameConfig);
      //this.game.scene.start('MainScene')
    },
    setSceneInitialized(value) {
      this.sceneInitialized = value;
      console.log("Vue normal")
      console.log(this.game.scene.getScenes());
      console.log(this.game.scene.getScene("PlaceholderScene"));

      setTimeout(() => {
        console.log("Vue setTimeout")
        console.log(this.game.scene.getScenes());
        console.log(this.game.scene.getScene("PlaceholderScene"));
      }, 1000);
    },
    startGame() {
      if (!this.sceneInitialized) return;
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