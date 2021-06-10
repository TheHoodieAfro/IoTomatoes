import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-vue';
import vuetify from './plugins/vuetify';

Amplify.configure(awsconfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
