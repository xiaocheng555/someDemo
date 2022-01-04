import Vue from 'vue'
// import Vue from '../../../vue2.x/dist/vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui/src/index'
import 'element-ui/lib/theme-chalk/index.css'
import CElementUI from './c-element-ui/index'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(CElementUI)
// debugger

window._vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

