<template lang="html">
	<main>
		<h1>Edi Cycle Data</h1>
		<station-list :stations="stationsApiObject"></station-list>
		<station-detail :station="selectedStation"></station-detail>
	</main>
</template>

<script>
import { eventBus } from './main.js';
import StationList from './components/StationList';
import StationDetail from './components/StationDetail';

export default {
	name: 'app',

	data() {
		return {
			stationsApiObject: [],
			statusApiObject: [],
			selectedStation: null
		};
	},

	mounted() {
		this.fetchStationInfo();
		this.fetchStationStatus();

		eventBus.$on('station-selected', (station) => {
			this.selectedStation = station;
		});
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
				)
				.then(() => {
					this.stationsApiObject.sort((station1, station2) =>
						station1.name > station2.name ? 1 : -1
					);
				});
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
	},

	computed: {},
	components: {
		'station-list': StationList,
		'station-detail': StationDetail
	}
};
</script>

<style lang="css" scoped>
* {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
