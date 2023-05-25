<script>
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectGallery from "@/components/projects/ProjectGallery.vue";
import ProjectInfo from "@/components/projects/ProjectInfo.vue";
// import ProjectRelatedProjects from "@/components/projects/ProjectRelatedProjects.vue";

import { getProjectById, getProjectHeadings } from "@/data/projects";
import { getSocialSharings } from "@/data/socialLinks"

export default {
  name: "SingleProject",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    // ProjectRelatedProjects,
  },
  props: {
    projectId: {
      type: [Number, String],
    },
  },
  data: () => {
    return {
      currentProject: {},
      projectTitle: "",
      projectImages: [],
      projectHeadings: {},
      projectObjective: "",
      projectTechnologies: [],
      projectDetails: [],

      relatedProject: {
        relatedProjectsHeading: "Related Projects",
        relatedProjects: [
          {
            id: 1,
            title: "Mobile UI",
            img: require("@/assets/images/mobile-project-1.jpg"),
          },
          {
            id: 2,
            title: "Web Application",
            img: require("@/assets/images/web-project-1.jpg"),
          },
          {
            id: 3,
            title: "UI Design",
            img: require("@/assets/images/ui-project-2.jpg"),
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: require("@/assets/images/mobile-project-2.jpg"),
          },
        ],
      },
    };
  },
  mounted() {
    this.currentProject = getProjectById(this.projectId);
    this.projectHeadings = getProjectHeadings();
		this.projectSharings = getSocialSharings();

    this.projectTitle = this.currentProject.title;
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
      :projectInfo="projectInfo"
      :projectHeadings="projectHeadings"
      :projectTechnologies="projectTechnologies"
      :projectObjective="projectObjective"
			:projectDetails="projectDetails"
			:projectSharings="projectSharings"
    />

    <!-- Project related projects -->
    <!-- <ProjectRelatedProjects :relatedProject="relatedProject" /> -->
  </div>
</template>

<style scoped></style>
