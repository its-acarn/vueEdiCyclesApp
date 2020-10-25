<template>
	<section>
		<div class="search-wrapper">
			<input type="text" v-model="search" placeholder="Search stop..." />
		</div>
		<div>
			<station-detail
				:station="station"
				:statusApiObject="statusApiObject"
			></station-detail>
		</div>
		<div>
			<station-list :stations="filteredList"></station-list>
		</div>
	</section>
</template>

<script>
import StationList from './StationList';
import StationDetail from './StationDetail';

export default {
	name: 'station-search',
	props: ['stations', 'station', 'statusApiObject'],
	data() {
		return {
			search: ''
		};
	},
	computed: {
		filteredList() {
			return this.stations.filter((station) => {
				return station.name
					.toLowerCase()
					.includes(this.search.toLowerCase());
			});
		}
	},
	components: {
		'station-list': StationList,
		'station-detail': StationDetail
	}
};
</script>

<style scoped>
.search-wrapper {
	display: flex;
	justify-content: center;
}
.search-wrapper input {
	font-family: inherit;
	width: 80%;
	border: 0;
	border-bottom: 2px solid red;
	outline: 0;
	font-size: 1.1rem;
	color: red;
	padding: 7px 0;
	background: transparent;
}
</style>
