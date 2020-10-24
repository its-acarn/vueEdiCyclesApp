<template lang="html">
	<section>
		<ul>
			<station-select
				v-for="(station, index) in stations"
				:key="index"
				:station="station"
			></station-select>
		</ul>
	</section>
</template>

<script>
import StationSelect from './StationSelect';

export default {
	name: 'station-list',
	props: ['stations'],
	components: {
		'station-select': StationSelect
	}
};
</script>

<style lang="css" scoped></style>
