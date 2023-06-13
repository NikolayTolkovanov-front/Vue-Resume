<script>
export default {
  data() {
    return {
      copyrightDate: new Date().getFullYear(),
      projectName: "Vue.js & Tailwind CSS Portfolio",
      author: "Nikolay Tolkovanov",
    };
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="font-roboto-regular text-lg text-ternary-dark dark:text-ternary-light"
    >
    &copy; {{ copyrightDate }}. Developed by

      <a
        href="https://vk.com/ntolkovanov"
        target="__blank"
        class="font-roboto-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
