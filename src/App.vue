<template lang="html">
	<main>
		<h1 v-on:click="combineStationData">Edi Cycle Data</h1>
		<station-detail :station="selectedStation"></station-detail>
		<station-list
			:stations="stationsApiObject"
			v-if="combineStationData"
		></station-list>
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
			combinedApiData: [],
			selectedStation: null
		};
	},

	mounted() {
		this.fetchStationInfo();
		this.fetchStationStatus();
		this.combineStationData();

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
		},
		combineStationData: async function() {
			await this.fetchStationInfo();
			await this.fetchStationStatus();

			const stations = this.stationsApiObject;
			const statusList = this.statusApiObject;
			console.log('OK');

			for (let i = 0; i < stations.length; i++) {
				let obj;
				let station = stations[i];
				console.log(station);

				for (let j = 0; j < statusList.length; j++) {
					let status = statusList[j];

					if (station.station_id === status.station_id) {
						obj = { ...station, ...status };
						this.combinedApiData.push(obj);
					}
				}
			}
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
