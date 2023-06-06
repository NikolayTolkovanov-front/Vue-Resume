<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleTheme() {
      const newTheme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      this.$emit("theme-changed", newTheme);
      this.$router.go();
    },
  },
};
</script>

<template>
  <a href="#" @click.prevent="toggleTheme" class="flex items-center" aria-label="Theme Switcher">
    <font-awesome-icon
      v-if="theme === 'light'"
      icon="fa-solid fa-moon"
      class="text-liText-ternary-dark dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5 h-5"
    />
    <font-awesome-icon
      v-else
      icon="fa-solid fa-sun"
      class="text-gray-200 hover:text-gray-50 w-5 h-5"
    />
  </a>
</template>
