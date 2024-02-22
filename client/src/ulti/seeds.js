import FoodFinder from "../assets/FoodFinder.gif";
import ApiAdventures from "../assets/api-adventure.gif";
import boringGameShop from "../assets/BoringGameShop.gif";
import PWA from "../assets/PWA.gif";
import CrystalQuest from "../assets/CrystalQuest.gif";
import DeveloperBlog from "../assets/DeveloperBlog.gif";

const Project = [
  {
    title: "Boring Game Shop",
    description:
      "Full-Stack E-commerce web application powered by React, Materialize Ui, Node.js, Express, MongoDB, and Stripe.",
    github: "https://github.com/Andrewchall92/game-shop",
    header: "Full Stack",
    link: "https://the-boring-game-shop-4c06c86d757e.herokuapp.com/",
    tags: ["E-Commerce", "Shop Online", "Secure Payment", "Secure Login"],
    image: boringGameShop,
  },
  {
    title: "API Adventure",
    description:
      "Full-Stack blog post application designed to connect students through API networking, enabling them to share their thoughts. It is built with the MVC model and powered by Node.js, Express, MySQL, Sequelize, Handlebars, and Bootstrap.",
    github: "https://github.com/Truecoding4life/api-adventures",
    tags: ["Social Media Platform", "Social Networking", "Secured Login"],
    image: ApiAdventures,
    header: "Full Stack",
    link: "https://api-adventures-cd9e93b14d5e.herokuapp.com/",
  },
  {
    title: "Food Finder",
    description:
      "Front-End web application powered by Bootstrap, Google API and Edamam API. This app is designed to solve our basic need as simple as find restaurants or find recipe and you can do all that within this single front end application.",
    github: "https://github.com/FenriRagni/food-finder",
    header: "Front End",
    link: "https://fenriragni.github.io/food-finder/",
    tags: ["Search Restaurant", "Search Recipe", "Search Review"],
    image: FoodFinder,
  },

  {
    title: "Progressive Web Application",
    description:
      "Text Editor Application built with advanced concepts, including data persistence with IndexedDB, webpack bundling, and service worker integration using workbox.",
    github: "https://github.com/Truecoding4life/text-snippet-PWA",
    header: "Back End",
    link: "https://boiling-lowlands-40577-2b4b9eb554b0.herokuapp.com/",
    tags: ["Use Offline", "Data Persistent"],
    image: PWA,
  },
  {
    title: "Developer Blogger",
    description:
      "Full Stack Blog website for networking, developed with Handlebars, Bootstrap MySQL and Express.js",
    github:
      "https://github.com/Truecoding4life/Developer-blog-with-model-view-control",
    header: " Full Stack",
    link: "https://developer-blogpost-a4d9376f41de.herokuapp.com/",
    tags: ["Social Networking", " Secure Login"],
    image: DeveloperBlog,
  },
  {
    title: "Crystal Quest",
    description:
      " Simple game created using jQuery, HTML, and styled with CSS. The application prompts users to select a random number and rewards them if their chosen number matches the winning number.",
    github: "https://github.com/Truecoding4life/crytal-quest",
    header: "Front End",
    link: "https://65d4a1b8dfbc420008f144d2--crystalquest.netlify.app/",
    tags: ["Game"],
    image: CrystalQuest,
  },
];

const OtherSkills = [
  {
    name: "Object-Relational Mapping",
    description:
      "Backend Application powered by Sequelize to handle server side logic",
    github: "https://github.com/Truecoding4life/E-Commerce-Back-End",
  },
  {
    name: "MySQL Database",
    description:
      "Backend Application powered by MySQL to handle server side logic",
    github: "https://github.com/Truecoding4life/MySQL-for-SPACEX",
  },
  {
    name: "Express JS",
    description:
      "Web Application powered by Express JS to handle server side logic",
    github: "https://github.com/Truecoding4life/Note-Favorite",
    header: "",
    link: "https://notefavorite-j-80588266bd0c.herokuapp.com/",
  },
];

export { Project, OtherSkills };
