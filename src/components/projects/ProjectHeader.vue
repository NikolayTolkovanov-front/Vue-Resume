<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<template>
  <div>
    <!-- Project heading and meta info -->
    <p
      class="font-roboto-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
    >
      {{ title }}
    </p>
  </div>
</template>
