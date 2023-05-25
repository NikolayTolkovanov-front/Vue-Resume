<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
// import AboutClients from '@/components/about/AboutClients';

export default {
	name: 'About',
	components: {
		AboutMe,
		AboutCounter,
		// AboutClients,
	},
	data: () => {
		return {};
	},
};
</script>

<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

		<!-- About counter -->
		<AboutCounter />

		<!-- About counter -->
		<!-- <div class="container mx-auto">
			<AboutClients />
		</div> -->
	</div>
</template>

<style scoped></style>
