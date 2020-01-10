import Vue from 'vue'
// import App from './App.vue'
import Header from './components/Header.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faSortDown);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App),
// }).$mount('#app');


new Vue({
  render: h => h(Header),
}).$mount('#Header');
