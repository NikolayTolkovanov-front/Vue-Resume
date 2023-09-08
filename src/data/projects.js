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
  return projectCategories.filter(
    (category) => category.type === categoryType
  )[0].title;
};

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
        title: "nimble",
        img: require("@/assets/images/nimble.png"),
      },
      {
        id: 2,
        title: "nimble-responsive",
        img: require("@/assets/images/nimble-responsive.png"),
      },
    ],
    objective: "Создать кроссплатформенный лендинг с динамичными элементами",
    projectDetails: [
      {
        id: 1,
        details:
          "Заказчик поставил задачу сделать вёрстку сайта, чтобы тот работал в таких браузерах, как  Safari, Mozilla FireFox, Opera, Google Chrome на последних версиях. Основная проблема заключалась с работой градиентов, которые слабо поддерживаются браузерами.",
      },
      {
        id: 2,
        details:
          "Задача успешно выполнена с использованием различных методов работы с градиентами. Сайт функционирует на различных устройствах, таких как ПК, планшеты, мобильные телефоны и ноутбуки.",
      },
      {
        id: 3,
        details:
          "Дизайн сайта отличается креативностью благодаря анимированной графике и градиентным элементам.",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Swiper.js"],
  },
  {
    id: 2,
    title: "Cryptonomicon",
    category: getCategory("web"),
    img: require("@/assets/images/cryptonomicon-down.png"),
    projectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/cryptonomicon-up.png"),
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/cryptonomicon-down.png"),
      },
    ],
    objective: "Создать spa-приложение для получения обновления цен криптовалют",
    projectDetails: [
      {
        id: 1,
        details:
          "Заказчик поставил задачу сделать вёрстку сайта, чтобы тот работал в таких браузерах, как  Safari, Mozilla FireFox, Opera, Google Chrome на последних версиях. Основная проблема заключалась с работой градиентов, которые слабо поддерживаются браузерами.",
      },
      {
        id: 2,
        details:
          "Задача успешно выполнена с использованием различных методов работы с градиентами. Сайт функционирует на различных устройствах, таких как ПК, планшеты, мобильные телефоны и ноутбуки.",
      },
      {
        id: 3,
        details:
          "Дизайн сайта отличается креативностью благодаря анимированной графике и градиентным элементам.",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS"],
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
