import Vue from 'vue'
import App from '../examples/app.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')