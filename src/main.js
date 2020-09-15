import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import { Row, Button, Switch } from 'element-ui'
import { NavBar, Button, SubmitBar, Card } from 'vant'

// Vue.use(ElementUI)
// Vue.use(Row)
// Vue.use(Button)
// Vue.use(Switch)

Vue.use(NavBar)
Vue.use(Button)
Vue.use(SubmitBar)
Vue.use(Card)

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
