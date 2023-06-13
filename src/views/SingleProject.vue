<script>
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectGallery from "@/components/projects/ProjectGallery.vue";
import ProjectInfo from "@/components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "@/components/projects/ProjectRelatedProjects.vue";

import { getProjectById, getProjectHeadings } from "@/data/projects";
import { getSocialSharings } from "@/data/socialLinks";

export default {
  name: "SingleProject",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    ProjectRelatedProjects,
  },
  props: {
    projectId: {
      type: [Number, String],
    },
  },
  data: () => {
    return {
      currentProject: {},
      projectSharings : [],
      projectHeadings: {},
      projectTitle: "",
      projectCategory: "",
      projectImages: [],
      projectTechnologies: [],
      projectObjective: "",
      projectDetails: [],
    };
  },
  mounted() {
    this.currentProject = getProjectById(this.projectId);
    this.projectHeadings = getProjectHeadings();
    this.projectSharings = getSocialSharings();

    this.projectTitle = this.currentProject.title;
    this.projectCategory = this.currentProject.category;
    this.projectImages = this.currentProject.projectImages;
    this.projectTechnologies = this.currentProject.technologies;
    this.projectObjective = this.currentProject.objective;
    this.projectDetails = this.currentProject.projectDetails;
  },
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :title="projectTitle" />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="projectImages" />

    <!-- Project information -->
    <ProjectInfo
      :projectHeadings="projectHeadings"
      :projectTechnologies="projectTechnologies"
      :projectObjective="projectObjective"
      :projectDetails="projectDetails"
      :projectSharings="projectSharings"
    />

    <!-- Project related projects -->
    <ProjectRelatedProjects :projectCategory="projectCategory" />
  </div>
</template>

<style scoped></style>
