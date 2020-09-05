<template>
  <div :class="$style.container">
    <div :class="$style.buttonUp" @click="$emit('handle-click', DIRECTIONS.UP)">
      <v-icon name="chevron-up" :class="$style.icon" />
    </div>
    <div :class="$style.buttonRight" @click="$emit('handle-click', DIRECTIONS.RIGHT)">
      <v-icon name="chevron-right" :class="$style.icon" />
    </div>
    <div :class="$style.buttonDown" @click="$emit('handle-click', DIRECTIONS.DOWN)">
      <v-icon name="chevron-down" :class="$style.icon" />
    </div>
    <div :class="$style.buttonLeft" @click="$emit('handle-click', DIRECTIONS.LEFT)">
      <v-icon name="chevron-left" :class="$style.icon" />
    </div>
  </div>
</template>

<script>
import "vue-awesome/icons/chevron-up";
import "vue-awesome/icons/chevron-right";
import "vue-awesome/icons/chevron-down";
import "vue-awesome/icons/chevron-left";
import { DIRECTIONS } from "@/games/SnakeGame/consts";

export default {
  created() {
    this.DIRECTIONS = DIRECTIONS;
  }
};
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 100px);
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
}

.buttonUp {
  @extend .button;
  grid-row: 1;
  grid-column: 2;
}

.buttonRight {
  @extend .button;
  grid-row: 2;
  grid-column: 3;
}

.buttonDown {
  @extend .button;
  grid-row: 3;
  grid-column: 2;
}

.buttonLeft {
  @extend .button;
  grid-row: 2;
  grid-column: 1;
}

.icon {
  width: 24px;
  height: auto;
  color: variables.$white;
}
</style>