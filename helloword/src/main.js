import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 启动时生成提示信息
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
