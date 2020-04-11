<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import DefaultLayout from '@/pages/templates/DefaultLayout';

export default {
  name: 'App',

  components: {
    DefaultLayout,
  },

  computed: {
    layout: function() {
      return  'DefaultLayout'; // this.$router.meta.layout ||
    }
  },

  data: () => ({
    //
  }),
};
</script>
