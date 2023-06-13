// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const getProjectById = (id) => {
  const projectId = parseInt(id);

  return projects.filter((project) => project.id === projectId)[0];
};

const getProjectHeadings = () => {
  return projectHeadings;
};

const getCategory = (categoryType) => {
	return projectCategories.filter((category) => category.type === categoryType)[0].title
}

const projectCategories = [
  {
    id: 1,
    title: "Web Приложение",
    type: "web",
  },
  {
    id: 2,
    title: "Мобильное Приложение",
    type: "mobile",
  },
  {
    id: 3,
    title: "UI/UX Design",
    type: "design",
  },
];

const projects = [
  {
    id: 1,
    title: "Nimble Tron",
    category: getCategory("web"),
    img: require("@/assets/images/nimble.png"),
    projectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/ui-project-1.jpg"),
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/web-project-2.jpg"),
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/mobile-project-2.jpg"),
      },
    ],
    objective: "some objective",
    projectDetails: [
      {
        id: 1,
        details:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
      {
        id: 2,
        details:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: 3,
        details:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: 4,
        details:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Koel",
    category: getCategory("web"),
    img: require("@/assets/images/koel.png"),
    projectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/ui-project-1.jpg"),
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/web-project-2.jpg"),
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/mobile-project-2.jpg"),
      },
    ],
    objective: "some objective",
    description: "lorem ispum",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Cryptonomicon",
    category: getCategory("web"),
    img: require("@/assets/images/cryptonomicon.png"),
    projectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/ui-project-1.jpg"),
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/web-project-2.jpg"),
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/mobile-project-2.jpg"),
      },
    ],
    objective: "some objective",
    description: "lorem ispum",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Cloud Storage Platform",
    category: getCategory("design"),
    img: require("@/assets/images/ui-project-2.jpg"),
    projectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/ui-project-1.jpg"),
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/web-project-2.jpg"),
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/mobile-project-2.jpg"),
      },
    ],
    objective: "some objective",
    description: "lorem ispum",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS"],
  },
  {
    id: 5,
    title: "React Social App",
    category: getCategory("mobile"),
    img: require("@/assets/images/mobile-project-1.jpg"),
    projectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/ui-project-1.jpg"),
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/web-project-2.jpg"),
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/mobile-project-2.jpg"),
      },
    ],
    objective: "some objective",
    description: "lorem ispum",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS"],
  },
  {
    id: 6,
    title: "Apple Design System",
    category: getCategory("web"),
    img: require("@/assets/images/web-project-1.jpg"),
    projectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/ui-project-1.jpg"),
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/web-project-2.jpg"),
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/mobile-project-2.jpg"),
      },
    ],
    objective: "some objective",
    description: "lorem ispum",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS"],
  },
];

const projectHeadings = {
  objectivesHeading: "Задача:",
  technologiesHeading: "Технологии:",
  projectDetailsHeading: "Выполнение задачи:",
  socialSharingsHeading: "Поделиться:",
};



export { projects, projectCategories, getProjectById, getProjectHeadings };
