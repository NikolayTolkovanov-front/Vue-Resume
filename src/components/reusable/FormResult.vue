<script>
import Button from "@/components/reusable/Button.vue"
import contactInfo from "@/data/contacts"

export default {
  name: "FormResult",
  components: { Button },
  props: {
    showResult: {
      type: Boolean,
      default: false,
    },
    messageStatus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showMessage: false,
      successMessage: "Ваша заявка успешно отправлена, с вами свяжутся через некоторое время",
      failMessage: "К сожалению, ваша заявка не была отправлена, попробуйте через несколько минут или свяжитесь по номеру:",
      contactInfo
    };
  },

  computed: {
    formattedPhone() {
      return `tel:${this.contactInfo.phone.standart}`
    },
  },

  watch: {
    showResult(value) {
      this.showMessage = value;
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div
      v-if="showMessage"
      class="max-w-full p-3 fixed top-0 right-0 sm:max-w-sm bg-white dark:bg-ternary-dark dark:text-primary-light rounded-none sm:rounded-bl-lg z-40"
    >
      <p v-if="messageStatus" class="block mb-2 text-lg text-primary-dark dark:text-primary-light">
        {{ successMessage }}
      </p>
      <p v-else class="block mb-2 text-lg text-primary-dark dark:text-primary-light">
        {{ failMessage }}
        <a class="block underline" :href="formattedPhone">{{ contactInfo.phone.standart }}</a>
      </p>
      <Button
        title="Закрыть"
        class="mt-2 px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
        @click="showMessage = false"
        aria-label="Close Message"
      />
    </div>
  </transition>
</template>

<style scoped>
</style>
