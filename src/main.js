import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import VueTimeago from 'vue-timeago';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes, // short for `routes: routes`
});

Vue.use(VueRouter);

Vue.use(VueTimeago, {
  name: 'Timeago',
  locale: 'en',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
