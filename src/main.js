import Vue from 'vue';
import App from './App.vue';
import VueSlideoutPanel from 'vue2-slideout-panel';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.use(VueSlideoutPanel);

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
	render: (h) => h(App)
}).$mount('#app');
