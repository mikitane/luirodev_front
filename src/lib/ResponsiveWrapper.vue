<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.content {
    margin: 0 20px;
}

@media only screen and (min-width: variables.$screen-sm) {
  .content {
    margin: 0 40px;
  }
}


@media only screen and (min-width: variables.$screen-lg) {
  .container {
    justify-content: center;
  }

  .content {
    width: 1200px;
    margin: 0;
  }
}
</style>