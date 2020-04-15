<template>
  <v-app >
    <AppBar  v-bind="appBarProps"/>
    <slot />
  </v-app>
</template>

<script>
  import AppBar from '@/components/AppBar';

  export default {
     components: {AppBar},
     computed: {
       appBarProps() {
        return (this.$route.meta && this.$route.meta.appBar) || {};
      }
     }
  }
</script>

<style lang="scss" scoped>

</style>