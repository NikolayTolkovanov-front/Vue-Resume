<script>
import aboutMeData from '../../data/about'

export default {
	setup() {
		return {
			aboutMeData
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">Обо мне</p>
			<p
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ aboutMeData.description }}
			</p>

			<p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">Навыки</p>
			<ul class="font-general-regular">
				<li class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg" v-for="skill in aboutMeData.skills" :key="skill.id">{{ skill.value }}</li>
			</ul>
		</div>
	</div>
</template>
