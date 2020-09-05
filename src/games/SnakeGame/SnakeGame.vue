<template>
  <div :class="$style.container">
    <Scores v-if="currentScene === 'MainScene'" :score="score" />
    <div :class="$style.snakeGameContainer" ref="snakeGameContainer" :style="{height: boardHeight}">
      <MainMenu v-if="currentScene === 'MainMenu'" @start-game-clicked="startGameClicked" />
      <GameOver v-if="currentScene === 'GameOver'" @play-again-clicked="playAgainClicked" />
      <div id="snake-game-phaser-container" :class="$style.snakeGamePhaserContainer" />
    </div>
    <Controls @handle-click="handleControlClicked" />
  </div>
</template>

<script>
import Phaser from "phaser";
import MainMenuScene from "./scenes/MainMenuScene";
import MainMenu from "./components/MainMenu";
import GameOver from "./components/GameOver";
import Scores from "./components/Scores";
import Controls from "./components/Controls";
import { BOARD_HEIGHT_PX, BOARD_WIDTH_PX } from "@/games/SnakeGame/consts";

export default {
  props: ["title"],
  components: { MainMenu, Scores, Controls, GameOver },

  mounted() {
    this.updateBoardSize();
    window.addEventListener("resize", this.updateBoardSize);

    // $nextTick makes sure that all Vue components are mounted
    // before the game is initialized.
    this.$nextTick(function () {
      this.initializeGame();
      this.initializeScenes();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateBoardSize)
    this.game.destroy(true, false);
  },

  data: function () {
    return {
      currentScene: null,
      boardWidth: null,
      score: 0,
    };
  },
  computed: {
    boardHeight() {
      const aspectRatio = BOARD_HEIGHT_PX / BOARD_WIDTH_PX;
      return `${this.boardWidth * aspectRatio}px`;
    },
  },

  methods: {
    updateBoardSize() {
      this.boardWidth = this.$refs.snakeGameContainer.clientWidth;
    },
    initializeGame() {
      const gameConfig = {
        type: Phaser.AUTO,
        width: BOARD_WIDTH_PX,
        height: BOARD_HEIGHT_PX,
        parent: "snake-game-phaser-container",
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          parent: "snake-game-phaser-container",
        },
        physics: {
          default: "arcade",
          arcade: {
            gravity: { y: 1 },
          },
        },
      };

      this.game = new Phaser.Game(gameConfig);

      // Phaser scenes can use this component to call methods from Vue side.
      this.game.registry.set("vue-SnakeGame", this);
    },
    initializeScenes() {
      this.game.scene.add("MainMenuScene", MainMenuScene, true);
    },
    setCurrentScene(scene) {
      this.currentScene = scene;
    },
    startGameClicked() {
      this.game.scene.getScene("MainMenuScene").startGame();
    },
    playAgainClicked() {
      this.game.scene.getScene("GameOverScene").playAgain();
    },
    handleControlClicked(direction) {
      console.log("handleControlClicked", direction)
      this.game.scene.getScene('MainScene').changeMoveDirection(direction);
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
}

.header {
  margin-bottom: 16px;
}

.snakeGameContainer {
  position: relative;
  width: 100%;
  max-width: 600px;
}

.snakeGamePhaserContainer {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

// @media only screen and (min-width: variables.$screen-sm) {
//   .snakeGameContainer {
//     width: ;
//   }
// }
</style>