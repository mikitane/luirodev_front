<template>
  <v-btn :height="height" rounded :color="backgroundColor" :outlined="outlined">{{ text }}</v-btn>
</template>

<script>
  export default {
    props: {
      text: {default: 'Button'},
      height: {default: '40px'},
      kind: {default: 'primary'},
      outlined: {default: false}
    },
    computed: {
      backgroundColor() {
        if (this.kind === 'primary') return 'primary'

        return ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>