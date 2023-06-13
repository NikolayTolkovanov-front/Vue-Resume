<script>
import { projects } from '@/data/projects';

export default {
  props: {
    projectCategory: {
      type: String
    }
  },

  data() {
    return {
      projects,
      relatedProjectsTitle: "Похожие проекты"
    }
  },

  computed: {
    filteredProjects() {
      return this.projects.filter((project) => project.category === this.projectCategory)
    }
  }

};
</script>

<template>
  <div
    class="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
  >
    <p
      class="font-roboto-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"
    >
      {{ relatedProjectsTitle }}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
      <div v-for="project in filteredProjects" :key="project.id">
        <img
          :src="project.img"
          class="rounded-xl cursor-pointer"
          :alt="project.title"
        />
      </div>
    </div>
  </div>
</template>
