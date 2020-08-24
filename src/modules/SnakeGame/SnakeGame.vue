<template>
    <GameBoard :boardSize="boardSize" :blockSizePx="blockSizePx" />
</template>

<script>
  import GameBoard from './components/GameBoard';

  export default {
    components: {
      GameBoard
    },
    data() {
      return {
        boardSize: { width: 20, height: 20 },
        blockSizePx: { width: 20, height: 20 },
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 2000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
  }
</style>