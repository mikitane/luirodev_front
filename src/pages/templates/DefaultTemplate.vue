<template>
  <div class="container">
    <AppBar />
    <slot />
  </div>
</template>

<script>
  import AppBar from '@/reusable-components/AppBar';

  export default {
    components: {
      AppBar,
    },
     computed: {
       appBarProps() {
        return (this.$route.meta && this.$route.meta.appBar) || {};
      }
     }
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
  }
</style>