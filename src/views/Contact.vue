<script>
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'г.Волгоград, Россия',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'tnrvlg@gmail.com',
					icon: 'mail',
					type: 'mail',
				},
				{
					id: 3,
					name: '+7 961 665 44 12',
					icon: 'phone',
					type: 'phone',
				},
			],
		};
	},
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<!-- Contact form -->
		<ContactForm />

		<!-- Contact details -->
		<ContactDetails />
	</div>
</template>
