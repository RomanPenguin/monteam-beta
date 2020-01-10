import Vue from 'vue'
// import App from './App.vue'
// import Header from './components/Header.vue'
// import Event from './components/Event.vue'
import Calendar from './components/Calendar.vue'
import VCalendar from 'v-calendar';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSortDown, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faSortDown, faMapMarkedAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App),
// }).$mount('#app');


// new Vue({
//   render: h => h(Header),
// }).$mount('#Header');
//
// new Vue({
//   render: h => h(Event),
// }).$mount('#Event');

Vue.use(VCalendar);

new Vue({
  render: h => h(Calendar),
}).$mount('#Calendar');