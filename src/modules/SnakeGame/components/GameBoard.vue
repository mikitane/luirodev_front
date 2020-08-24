<template>
  <div class="board" :style="boardStyle"></div>
</template>

<script>
export default {
  props: ['boardSize', 'blockSizePx'],

  computed: {
    boardStyle() {
      return {
        width: `${this.boardSize.width * this.blockSizePx.width}px`,
        height: `${this.boardSize.height * this.blockSizePx.height}px`,
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.board {
  background-color: #7cb334;
}
</style>