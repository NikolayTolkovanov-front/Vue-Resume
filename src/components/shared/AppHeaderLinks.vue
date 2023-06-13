<script>
import headerLinks from "@/data/headerLinks";

export default {
  // props: ["showModal", "isOpen"],
  props: {
    showModal: {
      type: Function
    },

    isOpen: {
      type: Boolean
    },
  },
  data() {
    return {
      headerLinks,
      btnText: "Напиши мне"
    };
  },
};
</script>

<template>
  <!-- Header links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <router-link
      v-for="link in headerLinks"
      :key="link.id"
      :to="link.link"
      :aria-label="link.link"
      class="font-roboto-light block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2"
      >{{ link.title }}
    </router-link>

    <div
      class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
    >
      <button
        class="font-roboto-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500"
        @click="showModal()"
        aria-label="Hire Me Button"
      >
        {{ btnText }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
