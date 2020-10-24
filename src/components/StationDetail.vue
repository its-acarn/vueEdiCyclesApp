<template lang="html">
	<article v-if="station">
		<p>Station: {{ station.name }}</p>
		<p>Address: {{ station.address }}</p>
		<p>Bike Capacity: {{ station.capacity }}</p>
	</article>
</template>

<script>
export default {
	name: 'station-detail',
	props: ['station']
};
</script>

<style lang="css" scoped></style>
