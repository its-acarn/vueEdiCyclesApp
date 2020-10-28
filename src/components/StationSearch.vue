<template>
	<section>
		<div class="search-wrapper">
			<input type="text" v-model="search" placeholder="Search stop..." />
		</div>
		<station-detail
			:station="station"
			:statusApiObject="statusApiObject"
		></station-detail>
		<station-list :stations="filteredList"></station-list>
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
	max-width: 400px;
	border: 0;
	border-bottom: 2px solid lightseagreen;
	outline: 0;
	font-size: 1.2rem;
	color: lightseagreen;
	padding: 7px 0;
	background: transparent;
	margin: 15px 0 30px 0;
}
</style>
