import FoodFinder from "../assets/images/projects/FoodGeekPicture.png";
import ApiAdventures from "../assets/images/projects/ios2.png";
import GameLoft from "../assets/images/projects/GameLoftPicture.png";
import PWA from "../assets/images/projects/PWA.gif";
import CrystalQuest from "../assets/images/projects/CrystalQuest.gif";
import photo1 from "../assets/images/website/logo.png";
import photo2 from "../assets/images/website/photo2.jpg";
import photo3 from "../assets/images/website/photo3.png";


const Project = [
  {
    title: "GameLoft",
    description:
      "Full Stack E-commerce web application powered by React, Materialize Ui, Node.js, Express, MongoDB, and Stripe.",
    github: "https://github.com/Andrewchall92/game-shop",
    header: "Full Stack",
    link: "https://game-loft-5f74d9e2c208.herokuapp.com/",
    tags: ["E-Commerce", "Online Shopping", "Secure Payment", "User Authentication"],
    image: GameLoft,
  },
  {
    title: "iOS 2",
    description:
      "Full Stack blog post application designed to connect people route social media networking, enabling them to share their thoughts. It is built with the MVC model and powered by Node.js, Express, MySQL, Sequelize, Handlebars, and Bootstrap.",
    github: "https://github.com/Truecoding4life/api-adventures",
    tags: ["Social Media Platform", "Social Networking", "Secure Login",  "User Authentication"],
    image: ApiAdventures,
    header: "Full Stack",
    link: "https://ios-2-079bbe29e9fe.herokuapp.com/",
  },
  {
    title: "Food Geek",
    description:
      "Front-End web application powered by Bootstrap, Google API and Edamam API. This app is designed to solve our basic need as simple as find restaurants or find recipes, and you can do all that within this single front-end application.",
    github: "https://github.com/Truecoding4life/food-geek",
    header: "Front End",
    link: "https://truecoding4life.github.io/food-geek/index.html",
    tags: ["Search Restaurant", "Search Recipe", "Read Reviews"],
    image: FoodFinder,
  },
  {
    title: "Progressive Web Application",
    description:
      "Offline Text Editor Application built with advanced concepts, including data persistence with IndexedDB, webpack bundling, and service worker integration using workbox.",
    github: "https://github.com/Truecoding4life/text-snippet-PWA",
    header: "Back End",
    link: "https://boiling-lowlands-40577-2b4b9eb554b0.herokuapp.com/",
    tags: ["Offline Usage", "Data Persistence"],
    image: PWA,
  }
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

const aboutData = [
  {
    title: "CODINGWITHJAY",
    text: "I'm a Fullstack Software Developer based in California, passionate about crafting remarkable digital experiences.",
    image: photo1
  },
  {
    title: "Military Background",
    text: "Came from military background I have a strong work ethic and professionalism. In Kuwait I was nominated for Soldier of the Month twice.",
    image: photo2
  },
  {
    title: "User Experience",
    text: "To me, great user experience is paramount, I strive to create a lasting impact through great user experience.",
    image: photo3
  }
]

export { Project, OtherSkills, aboutData };
