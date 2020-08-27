<template>
  <v-content class="content">
    <div class="main-column">
      <div :class="'title'">Snake Game</div>
    </div>
  </v-content>
</template>

<script>

</script>

<style lang="scss" scoped>

  .content {
    background-color: white;// var(--v-backgroundColor-base);
  }

  .main-column {
    // @extend .display-3;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
  }
</style>