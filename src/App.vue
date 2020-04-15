<template>
  <component :is="template">
    <router-view />
  </component>
</template>

<script>
import DefaultTemplate from '@/pages/templates/DefaultTemplate';

export default {
  name: 'App',
  components: {
    DefaultTemplate
  },
  data: () => ({
    //
  }),
  computed: {
    template: function() {
      return (this.$router.meta && this.$router.meta.template) || 'DefaultTemplate';
    }
  }
};
</script>
