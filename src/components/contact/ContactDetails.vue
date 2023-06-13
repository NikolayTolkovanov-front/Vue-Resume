<script>
import contactInfo from "@/data/contacts"

export default {
	name: 'ContactDetails',
  data() {
    return {
      contactInfo,
    }
  },

  computed: {
    formattedPhone() {
      return `tel:${this.contactInfo.phone?.standart}`
    },

    formattedMail() {
      return `mailto:${this.contactInfo.mail}`
    }
  }
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div class="text-left max-w-xl px-6">
      <h2
        class="font-roboto-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"
      >
        {{ contactInfo.title }}
      </h2>
      <ul class="font-roboto-regular">
        <li class="flex">
          <font-awesome-icon
            icon="fa-solid fa-location-dot"
            class="w-5 text-gray-500 dark:text-gray-400 mr-4"
            size="xl"
          />
          <p class="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
            {{ contactInfo.city }}
          </p>
        </li>
        <li class="flex">
          <font-awesome-icon
            icon="fa-solid fa-phone"
            class="w-5 text-gray-500 dark:text-gray-400 mr-4"
            size="xl"
          />
          <a
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline"
            :href="formattedPhone"
            >{{ contactInfo.phone?.withSpaces }}</a
          >
        </li>
        <li class="flex">
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            class="w-5 text-gray-500 dark:text-gray-400 mr-4"
            size="xl"
          />
          <a
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline"
            :href="formattedMail"
            >{{ contactInfo.mail }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
