<template lang="html">
	<li v-on:click="clickStation">{{ station.name }}</li>
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

<style lang="css" scoped></style>
