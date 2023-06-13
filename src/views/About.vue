<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';

export default {
	name: 'About',
	components: {
		AboutMe,
		AboutCounter,
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
	</div>
</template>

<style scoped></style>
