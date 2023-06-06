<script>
// import { projectHeadings } from '../../data/projects'

export default {
  props: {
    projectHeadings: {
      type: Object,
    },
    projectTechnologies: {
      type: Array,
    },
    projectObjective: {
      type: String,
    },
    projectDetails: {
      type: Array,
    },
    projectSharings: {
      type: Array,
    },
  },

  data() {
    return {
      currentURL: ""
    }
  },

  mounted() {
    this.currentURL = window.location.href
  },

  computed: {
    encodedCurrentURL() {
      return encodeURIComponent(this.currentURL)
    }
  },

  methods: {
    getSharedLink(url) {
      return `${url}${this.encodedCurrentURL}`
    },
  },
};
</script>

<template>
  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <!-- Single project left section details -->
    <div class="w-full sm:w-1/3 text-left">
      <!-- Single project client details -->
      <!-- <div class="mb-7">
				<p
					class="font-roboto-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
				>
					{{ projectInfo.clientHeading }}
				</p>
				<ul class="leading-loose">
					<li
						v-for="info in projectInfo.companyInfos"
						:key="info"
						class="font-roboto-regular text-ternary-dark dark:text-ternary-light"
					>
						<span>{{ info.title }}: </span>
						<a
							href="#"
							:class="
								info.title == 'Website' || info.title == 'Phone'
									? 'hover:underline cursor-pointer'
									: ''
							"
							aria-label="Project Website and Phone"
							>{{ info.details }}</a
						>
					</li>
				</ul>
			</div> -->

      <!-- Single project objectives -->
      <div class="mb-7">
        <p
          class="font-roboto-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ projectHeadings.objectivesHeading }}
        </p>
        <p
          class="font-roboto-regular text-primary-dark dark:text-ternary-light"
        >
          {{ projectObjective }}
        </p>
      </div>

      <!-- Single project technologies -->
      <div class="mb-7">
        <p
          class="font-roboto-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ projectHeadings.technologiesHeading }}
        </p>
        <p
          class="font-roboto-regular text-primary-dark dark:text-ternary-light"
        >
          {{ projectTechnologies.join(", ") }}
        </p>
      </div>

      <!-- Single project social sharing -->
      <div>
        <p
          class="font-roboto-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ projectHeadings.socialSharingsHeading }}
        </p>
        <div class="flex items-center gap-3 mt-5">
          <a
            v-for="social in projectSharings"
            :key="social.id"
            :href="getSharedLink(social.url)"
            target="__blank"
            aria-label="Share Project"
            class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
          >
            <!-- <i
							:data-feather="social.icon"
							class="w-4 lg:w-5 h-4 lg:h-5"
						></i> -->
            <font-awesome-icon :icon="['fab', `${social.icon}`]" size="2xl" />
          </a>
        </div>
      </div>
    </div>

    <!-- Single project right section details -->
    <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
      <p
        class="font-roboto-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
      >
        {{ projectHeadings.projectDetailsHeading }}
      </p>
      <p
        v-for="projectDetail in projectDetails"
        :key="projectDetail.id"
        class="font-roboto-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
      >
        {{ projectDetail.details }}
      </p>
    </div>
  </div>
</template>
