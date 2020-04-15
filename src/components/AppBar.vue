<template>
  <v-app-bar app :color="color" :inverted-scroll="invertedScroll" :flat="flat"></v-app-bar>
</template>

<script>
export default {
  props: {
    absolute: { default: true },
    flat: { default: true },
    color: { default: "appBarColor" },
    invertedScroll: { default: false }
  }
};
</script>

<style lang="scss" scoped>
</style>