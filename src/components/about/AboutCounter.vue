<script>
import counter from "vue3-autocounter";
import { aboutCounter } from "../../data/counters"

export default {
  components: {
    counter,
  },
  data: () => {
    return {
      aboutCounter: []
    };
  },

  mounted() {
    this.aboutCounter = aboutCounter
  }
};
</script>

<template>
  <div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
    <!-- About me counters -->
    <div
      class="font-roboto-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"
    >
      <!-- Years of experience counter -->
      <div v-for="counter in aboutCounter" :key="counter.id" class="mb-20 sm:mb-0">
        <counter
          ref="counter"
          :startAmount="counter.startValue"
          :endAmount="counter.endValue"
          :duration="counter.duration"
          :autoinit="counter.autoinit"
          :suffix="counter.suffix"
          :aria-label="counter.label"
          class="font-roboto-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
        />
        <span class="block text-md text-ternary-dark dark:text-ternary-light">
          {{ counter.title }}
        </span>
      </div>
    </div>
  </div>
</template>
