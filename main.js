import Vue from 'vue';
import router from '@/router';
import app from '@/components/app/app.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(app),
});
