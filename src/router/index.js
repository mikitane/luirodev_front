import Vue from 'vue'
import VueRouter from 'vue-router';
import HomePage from '@/pages/HomePage2';
import GamePage from '@/pages/GamePage';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { appBar: { invertedScroll: true } }
  },
  {
    path: '/games',
    name: 'games',
    component: GamePage,
    meta: { appBar: { invertedScroll: true } }
  }
];

export default new VueRouter({
  mode: 'history',
  routes
})