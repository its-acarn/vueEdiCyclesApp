<template lang="html">
	<div v-if="station">
		<p>Station: {{ station.name }}</p>
		<p>Address: {{ station.address }}</p>
		<p>Bike Capacity: {{ station.capacity }}</p>
		<p>Bikes Available: {{ getStationStatus.num_bikes_available }}</p>
		<p>Docks Available: {{ getStationStatus.num_docks_available }}</p>
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
		}
	}
};
</script>

<style lang="css" scoped></style>
