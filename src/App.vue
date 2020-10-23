<template>
	<main>
		<h1>Edi Cycle Data</h1>
	</main>
</template>

<script>
import { eventBus } from './main.js';

export default {
	name: 'app',
	data() {
		return {
			stationsApiObject: [],
			statusApiObject: []
		};
	},
	mounted() {
		this.fetchStationInfo();
		this.fetchStationStatus();
	},
	methods: {
		fetchStationInfo: function() {
			fetch(
				'https://gbfs.urbansharing.com/edinburghcyclehire.com/station_information.json'
			)
				.then((res) => res.json())
				.then(
					(apiData) =>
						(this.stationsApiObject = apiData.data.stations)
				);
		},
		fetchStationStatus: function() {
			fetch(
				'https://gbfs.urbansharing.com/edinburghcyclehire.com/station_status.json'
			)
				.then((res) => res.json())
				.then(
					(apiData) => (this.statusApiObject = apiData.data.stations)
				);
		}
	}
};
</script>

<style lang="css" scoped>
* {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
