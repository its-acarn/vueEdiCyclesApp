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
	display: flex;
	flex-flow: row wrap;
	width: 75vw;
	margin: auto;
}
</style>
