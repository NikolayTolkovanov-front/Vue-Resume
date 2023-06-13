<script>
export default {
  name: "Home",
  data() {
    return {
      theme: "",
      bannerTitle: "Hi, I`am Nickolay Tolkovanov",
      bannerSubTitle: "A Frontend Developer & Web master",
      cvText: "Загрузить CV"
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    this.theme = localStorage.getItem("theme") || "light";
  },
};
</script>

<template>
  <section
    class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="font-roboto-bold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
      >
        {{ bannerTitle }}
      </h1>
      <p
        class="font-roboto-light mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        {{ bannerSubTitle }}
      </p>
      <div class="flex justify-center sm:block">
        <a
          download="Nick-Resume.pdf"
          href="/files/Stoman-Resume.pdf"
          class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          aria-label="Download Resume"
        >
          <font-awesome-icon
            icon="fa-solid fa-circle-down"
            class="ml-0 sm:ml-1 mr-2 sm:mr-1 w-5 sm:w-6 duration-100"
          />
          <span class="text-sm sm:text-lg font-roboto-italic duration-100"
            >{{ cvText }}</span
          ></a
        >
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="theme === 'light'"
        src="@/assets/images/developer.svg"
        alt="Developer"
      />
      <img v-else src="@/assets/images/developer-dark.svg" alt="Developer" />
    </div>
  </section>
</template>

<style scoped></style>
