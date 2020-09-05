<template>
  <div :class="$style.container">
    <div :class="$style.textContainer">
      <div :class="$style.pointsHeader">Points</div>
      <div :class="$style.pointsValue">{{ score }}</div>
    </div>
    <div :class="$style.textContainer">
      <div :class="$style.pointsHeader">Highscore</div>
      <div :class="$style.pointsValue">{{ highScore }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["score", "highScore"],
};
</script>

<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 20px;
  height: 60px;
  background-color: variables.$secondary-background-color;
}

.textContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pointsHeader {
  @include mixins.text-p;
  font-weight: bold;
  line-height: 20px;
}

.pointsValue {
  @include mixins.text-p-small;
}

@media only screen and (min-width: variables.$screen-sm) {
  .pointsHeader {
    @include mixins.text-h6;
  }
  .pointsValue {
    @include mixins.text-p;
  }
}
</style>