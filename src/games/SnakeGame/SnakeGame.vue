<template>
  <div :class="$style.container">
    <div id="snake-game-container" :class="$style.snakeGameContainer">
      <MainMenu v-if="currentScreen === 'MainMenu'" @start-game-clicked="startGameClicked" />
      <GameOver v-if="currentScreen === 'GameOver'" @play-again-clicked="playAgainClicked" />
    </div>
  </div>
</template>

<script>
import Phaser from "phaser";
import MainMenuScene from "./scenes/MainMenuScene";
import MainScene from "./scenes/MainScene";
import GameOverScene from "./scenes/GameOverScene";
import MainMenu from "./components/MainMenu";
import GameOver from "./components/GameOver";
import { BOARD_HEIGHT_PX, BOARD_WIDTH_PX } from '@/games/SnakeGame/consts';

export default {
  props: ["title"],
  components: { MainMenu, GameOver },

  mounted() {
    // $nextTick makes sure that all Vue components are mounted
    // before the game is initialized.
    this.$nextTick(function () {
      this.initializeGame();
      this.initializeScenes();
    });
  },
  beforeDestroy() {
    console.log("Destroying game");
    this.game.destroy(true, false);
  },

  data: function () {
    return {
      currentScreen: null,
    };
  },

  methods: {
    initializeGame() {
      const gameConfig = {
        type: Phaser.AUTO,
        width: BOARD_WIDTH_PX,
        height: BOARD_HEIGHT_PX,
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
      };

      this.game = new Phaser.Game(gameConfig);

      // Scenes can use this component to call methods from Vue side.
      this.game.registry.set("vue-SnakeGame", this);
    },
    initializeScenes() {
      this.game.scene.add("MainMenuScene", MainMenuScene, true);
      this.game.scene.add("MainScene", MainScene, false);
      this.game.scene.add("GameOverScene", GameOverScene, false);
    },
    showScreen(screen) {
      this.currentScreen = screen;
    },
    startGameClicked() {
      this.game.scene.getScene("MainMenuScene").startGame();
    },
    playAgainClicked() {
      this.game.scene.getScene("GameOverScene").playAgain();
    }
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