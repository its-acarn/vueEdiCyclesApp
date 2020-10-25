<template lang="html">
	<li v-on:click="clickStation" class="stationListItem">
		{{ station.name }}
	</li>
</template>

<script>
import { eventBus } from '../main.js';

export default {
	name: 'station-select',

	props: ['station'],

	methods: {
		clickStation() {
			eventBus.$emit('station-selected', this.station);
		}
	}
};
</script>

<style lang="css" scoped>
li {
	margin: auto;
	border: 2px black solid;
	width: 200px;
	height: 200px;
	margin-bottom: 5px;
}
</style>
