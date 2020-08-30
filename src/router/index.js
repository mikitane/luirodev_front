import Vue from 'vue'
import VueRouter from 'vue-router';
import HomePage from '@/pages/HomePage';
import GamesListPage from '@/pages/GamesListPage';
import GamePage from '@/pages/GamePage';
//import SnakeGame from '@/phaser/SnakeGame';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    // meta: { appBar: { invertedScroll: true } }
  },
  {
    path: '/games',
    name: 'games',
    component: GamesListPage,
  },
  {
    path: '/game',
    component: GamePage,
    redirect: { name: 'games' },
    children: [
      {
        path: 'snake-game',
        component: () => import('../phaser/SnakeGame'),
        name: 'snake-game',
      },
    ]
  },
];

export default new VueRouter({
  mode: 'history',
  routes
})