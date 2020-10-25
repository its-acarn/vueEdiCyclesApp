<template lang="html">
	<div v-if="station">
		<p>Station: {{ station.name }}</p>
		<p>Address: {{ station.address }}</p>
		<p>Bikes Available: {{ getStationStatus.num_bikes_available }}</p>
		<p>Docks Available: {{ getStationStatus.num_docks_available }}</p>
		<p>
			Status Last Updated: <br />
			{{ getStationStatusTime }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'station-detail',
	props: ['station', 'statusApiObject'],
	computed: {
		getStationStatus: function() {
			for (let status of this.statusApiObject) {
				if (this.station.station_id === status.station_id) {
					return status;
				}
			}
		},
		getStationStatusTime: function() {
			var timestamp;
			for (let status of this.statusApiObject) {
				if (this.station.station_id === status.station_id) {
					timestamp = status.last_reported;
				}
			}
			var tsDate = new Date(timestamp * 1000);
			return tsDate.toGMTString();
		}
	}
};
</script>

<style lang="css" scoped></style>
