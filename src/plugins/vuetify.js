import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        appBarColor: '#282828',
        backgroundColor: '#FFFFFF'
      }
    },
    options: {
      customProperties: true,
    },
  }
});
