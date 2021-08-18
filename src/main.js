import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Profiles from "@/pages/Profiles";
import TemporossSettings from "@/pages/TemporossSettings";

Vue.config.productionTip = false

const routes = [
  { path:'/', redirect: '/tempoross-settings'},
  { path:'/tempoross-settings', component: TemporossSettings},
  { path:'/profiles', component: Profiles },
]

Vue.use(VueRouter);

new Vue({
  router: new VueRouter({routes}),
  vuetify,
  render: h => h(App)
}).$mount('#app')
