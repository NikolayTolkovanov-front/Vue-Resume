<script>
import Button from '@/components/reusable/Button.vue';

export default {
  name: "NotFound",
  components: { Button },
  data() {
    return {
      errorHeading: "Ошибка",
      errorCode: 404,
      errorTitle: "Извините, данной страницы не существует.",
      errorSubtitle: "Но не волнуйтесь, вы можете вернуться на главную страницу.",
      btnText: "На главную"
    }
  }
};
</script>

<template>
  <section class="flex items-center h-full p-16 dark:text-gray-100">
    <div
      class="container flex flex-col items-center justify-center px-5 mx-auto my-8"
    >
      <div class="max-w-md text-center">
        <h2 class="mb-8 font-roboto-black text-9xl dark:text-gray-600">
          <span class="sr-only">{{ errorHeading }}</span>{{ errorCode }}
        </h2>
        <p class="text-2xl font-roboto-bold md:text-3xl">
          {{ errorTitle }}
        </p>
        <p class="mt-4 mb-8 font-roboto-regular dark:text-gray-400">
          {{ errorSubtitle }}
        </p>
        <router-link
          to="/"
          class="font-roboto-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
          aria-label="Main Page"
        >
          <Button :title="btnText" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
