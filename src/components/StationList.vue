<template>
	<section>
		<ul>
			<li v-for="(station, index) in stations" :key="index">
				{{ station.name }}
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	name: 'station-list',
	props: ['stations']
};
</script>

<style lang="css" scoped></style>
