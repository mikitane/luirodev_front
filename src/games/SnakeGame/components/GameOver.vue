<template>
  <div :class="$style.container">
    <h5>Game over</h5>
    <Button @onClick="$emit('play-again-clicked')" >Play again</Button>
  </div>
</template>

<script>
import Button from '@/lib/Button';

export default {
  components: {
    Button,
  }
}
</script>

<style lang="scss" module>
  .container {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;
  }
</style>