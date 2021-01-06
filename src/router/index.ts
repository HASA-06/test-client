import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '../pages/HomePage.vue';
import AuthRouter from '../router/AuthRouter';
import MeatRouter from '../router/MeatRouter';
import CommunityRouter from '../router/CommunityRouter';

Vue.use(VueRouter);

const baseRoutes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const routes = baseRoutes.concat(
  AuthRouter,
  MeatRouter,
  CommunityRouter,
);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
