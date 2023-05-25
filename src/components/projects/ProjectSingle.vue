<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },

  computed: {
    validProjectTitle() {
      return this.project?.title.replaceAll(/ /g, "");
    },
  },
};
</script>

<template>
  <router-link
    :to="{
      path: 'projects',
      name: 'SingleProject',
      params: { projectId: project.id },
    }"
    class="flex flex-col rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    aria-label="Single Project"
  >
    <div class="grow">
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none"
      />
    </div>
    <div class="flex-none text-center px-4 py-6">
      <p
        class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
        {{ project.title }}
      </p>
      <span
        class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
        >{{ project.category }}</span
      >
    </div>
  </router-link>
</template>

<style lang="scss" scoped></style>
