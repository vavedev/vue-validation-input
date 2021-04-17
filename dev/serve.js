import Vue from 'vue';
import Dev from './serve.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faCheckCircle, faTimesCircle]);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
