<script>
export default {
	props: {
		label: {
			type: String,
			default: '',
		},
		textareaIdentifier: {
			type: String,
			default: '',
		},
		modelValue: {
			type: [String, Number],
			default: '',
		},
	},
	emits: ['update:modelValue'],
};
</script>

<template>
	<div>
		<label
			class="block text-lg text-primary-dark dark:text-primary-light mb-2"
			:for="textareaIdentifier"
			>{{ label }}</label
		>
		<textarea
			class="w-full px-5 py-2 resize-none border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
			:id="textareaIdentifier"
			:name="textareaIdentifier"
			:aria-label="textareaIdentifier"
			:placeholder="label"
			v-bind="$attrs"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			required
		></textarea>
	</div>
</template>

<style scoped>

</style>
