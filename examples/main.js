import Vue from 'vue'
import App from './App.vue'
import YunSilky from '../packages/index.js'
import '../packages/common.css'
Vue.config.productionTip = false
Vue.use(YunSilky)
new Vue({
  render: h => h(App),
}).$mount('#app')
