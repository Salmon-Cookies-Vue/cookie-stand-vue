import Vue from 'vue'
import App from './App.vue'
Vue.prototype.$log = console.log
Vue.config.productionTip = false



new Vue({
  data: function () {

  },

  methods: {
    log: function(e) {
      console.log(e.currentTarget);
      console.log(e);
    }
  },
  render: h => h(App),
}).$mount('#app')
