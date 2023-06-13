<script>
import aboutMeData from "@/data/about";

export default {
  data() {
    return {
      aboutMeData,
      aboutMeHeading: "Обо мне",
      skillsHeading: "Навыки"
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile.jpg" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        class="font-roboto-bold text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
      {{ aboutMeHeading }}
      </p>
      <p
        class="font-roboto-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ aboutMeData.description }}
      </p>

      <p
        class="font-roboto-bold text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
        {{ skillsHeading }}
      </p>
      <ul class="font-roboto-regular list-disc list-inside">
        <li
          class="font-roboto-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
          v-for="skill in aboutMeData.skills"
          :key="skill.id"
        >
          {{ skill.value }}
        </li>
      </ul>
    </div>
  </div>
</template>
