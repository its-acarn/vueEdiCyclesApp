<template lang="html">
	<section class="list-wrapper">
		<div class="stationList">
			<station-select
				v-for="(station, index) in stations"
				:key="index"
				:station="station"
			></station-select>
		</div>
	</section>
</template>

<script>
import StationSelect from './StationSelect';

export default {
	name: 'station-list',
	props: ['stations'],
	components: {
		'station-select': StationSelect
	},
	computed: {
		filteredStations: function() {}
	}
};
</script>

<style lang="css" scoped>
.stationList {
	list-style-type: none;
	/* padding: 0; */
	text-align: center;
}
</style>
