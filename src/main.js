import Vue from 'vue'
import Icon from 'vue-awesome/components/Icon'
import App from './App.vue'
import router from '@/router';



Vue.config.productionTip = false
Vue.component('v-icon', Icon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
