<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

@media only screen and (min-width: variables.$screen-sm) {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 40px;
  }
}

@media only screen and (min-width: variables.$screen-xl) {
  .container {
    align-items: center;
  }

  .content {
    width: 1200px;
    margin: 0;
  }
}
</style>