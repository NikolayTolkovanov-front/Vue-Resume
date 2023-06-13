<script>
import ProjectsFilter from '@/components/projects/ProjectsFilter.vue';
import ProjectSingle from "@/components/projects/ProjectSingle.vue";
import { projects, projectCategories } from "@/data/projects";

export default {
  components: {
    ProjectSingle,
    ProjectsFilter,
  },
  data: () => {
    return {
      projects,
      projectCategories,
      projectsHeading: "Портфолио проектов",
      searchHeading: "Поиск проектов по названию или категории",
      selectedCategory: "",
      searchProject: "",
    };
  },
  computed: {
    // Get the filtered projects
    filteredProjects() {
      if (this.selectedCategory) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },

    normalizedCategories() {
      return this.projectCategories.map((category) => category.title)
    }
  },
  methods: {
    // Filter projects by category
    filterProjectsByCategory() {
      return this.projects.filter((project) => {
        let category =
          project.category.charAt(0).toUpperCase() + project.category.slice(1);

        return category.includes(this.selectedCategory);
      });
    },
    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
  },
};
</script>

<template>
  <!-- Projects grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Projects grid title -->
    <div class="text-center">
      <p
        class="font-roboto-bold text-2xl sm:text-5xl mb-2 text-ternary-dark dark:text-ternary-light"
      >
        {{ projectsHeading }}
      </p>
    </div>

    <!-- Filter and search projects -->
    <div class="mt-10 sm:mt-10">
      <h3
				class="font-roboto-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4
				"
			>
				{{ searchHeading }}
			</h3>
      <div
        class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"
      >
        <div class="flex justify-between gap-2">
          <label
            for="search-project"
            class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
          >
            <font-awesome-icon
              icon="fa-solid fa-magnifying-glass"
              class="text-ternary-dark dark:text-ternary-light"
              size="xl"
            />
          </label>
          <input
            v-model="searchProject"
            class="font-roboto-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="search-project"
            name="search-project"
            type="search"
            required=""
            placeholder="Найти проект"
            aria-label="search project"
          />
        </div>
        <ProjectsFilter :select="searchProject" :selectOptions="normalizedCategories" @filter="selectedCategory = $event" />
      </div>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped></style>
