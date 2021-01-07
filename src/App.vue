<template lang="html">
	<main>
		<station-search
			:stations="stationsApiObject"
			:station="selectedStation"
			:statusApiObject="statusApiObject"
		></station-search>
		<base-map></base-map>
	</main>
</template>

<script>
import { eventBus } from './main.js';
import StationList from './components/StationList';
import StationDetail from './components/StationDetail';
import StationSearch from './components/StationSearch';
import BaseMap from './components/BaseMap';

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
		'station-search': StationSearch,
		'base-map': BaseMap
	}
};
</script>

<style lang="css" scoped>
* {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
