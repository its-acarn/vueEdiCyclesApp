import Vue from 'vue';
import App from './App.vue';
import VueSlideoutPanel from 'vue2-slideout-panel';

Vue.use(VueSlideoutPanel);

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
	render: (h) => h(App)
}).$mount('#app');
