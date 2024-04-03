import FoodFinder from "../assets/images/projects/foodgeek.png";
import ApiAdventures from "../assets/images/projects/ios2.png";
import GameLoft from "../assets/images/projects/gameloft.png";
import PWA from "../assets/images/projects/PWA.png";
import photo1 from "../assets/images/website/carousel/photo1.png";
import photo2 from "../assets/images/website/carousel/devices.png";
import photo3 from "../assets/images/website/carousel/photo3.jpg";


// technologies
import apollo from '../assets/images/website/logos/apollo.jpeg';
import bootstrap from '../assets/images/website/logos/bootstrap.png';
import css from '../assets/images/website/logos/css.png';
// import express from '../assets/images/website/logos/express.jpeg';
import html from '../assets/images/website/logos/html.png';
import javascript from '../assets/images/website/logos/javscript.jpg';
import jest from '../assets/images/website/logos/jest.png';
import jquery from '../assets/images/website/logos/jquery.png';
import materialize from '../assets/images/website/logos/mui.png';
import mongodb from '../assets/images/website/logos/mongodb.png';
// import mysql from '../assets/images/website/logos/mysql.jpg';
import node from '../assets/images/website/logos/nodejs.png';
import python from '../assets/images/website/logos/python.png';
import react from '../assets/images/website/logos/react.png';
import stripe from '../assets/images/website/logos/stripe.jpg';

const technologiesLogo = [ apollo, bootstrap, css,  html, javascript, jquery, materialize, mongodb,  node, python, react, stripe ];

// showcase
import CodeIcon from '@mui/icons-material/Code';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
const Project = [
  {
    title: "GameLoft",
    description:
      "Full Stack E-commerce web application powered by React, Materialize Ui, Node.js, Express, MongoDB, and Stripe.",
    github: "https://github.com/Andrewchall92/game-shop",
    header: "Full Stack",
    link: "https://game-loft-5f74d9e2c208.herokuapp.com/",
    tags: [
      "E-Commerce",
      "Online Shopping",
      "Secure Payment",
      
    ],
    image: GameLoft,
  },
  {
    title: "iOS 2",
    description:
      "Full Stack blog post application designed to connect people route social media networking, enabling them to share their thoughts. It is built with the MVC model and powered by Node.js, Express, MySQL, Sequelize, Handlebars, and Bootstrap.",
    github: "https://github.com/Truecoding4life/api-adventures",
    tags: [
      "Social Media Platform",
      
      "User Authentication",
     
    ],
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
    link: "https://jate-text-editor-jstudio-e2bc1e7322b6.herokuapp.com/",
    tags: ["Offline Usage", "Data Persistence"],
    image: PWA,
  },
];

const OtherSkills = [
  {
    name: "JQuery",
    description:
      "Game built with front end logic powered by JQuery",
    github: "https://github.com/Truecoding4life/crytal-quest",
    link:"https://main--crystalquest.netlify.app/"
  },{
    name: "Express JS",
    description:
      "Web Application powered by Express JS to handle server side logic",
    github: "https://github.com/Truecoding4life/Note-Favorite",
    link: "https://notefavorite-webapp-4790f7ae5b8c.herokuapp.com/notes",
  },{
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
  
  
];

const aboutData = [
  {
    title: "CODINGWITHJAY",
    text: "My passion lies in minimalist and contemporary web design, employing cutting-edge technologies such as React, Material UI, and Bootstrap to create visually stunning and user-friendly experiences.",
    image: photo1,
  },
  {
    title: "Platform Responsive",
    text: ["Ensuring accessibility for diverse users is my foremost commitment. I specialize in developing websites that seamlessly adapt to various platforms, ranging from mobile devices to expansive desktop screens."],
    description: [
      "Ensuring accessibility for diverse users is my foremost commitment. I specialize in developing websites that seamlessly adapt to various platforms, ranging from mobile devices to expansive desktop screens.",
      
    ],
    image: photo2,
  },
];

const showcaseData =  [
  {
      icon: CodeIcon,
      text: '2000+',
      sub: 'Coding Hours'
  },
  {
      icon: ThumbUpOffAltIcon,
      text: '100%',
      sub: 'Job Success'
  },
  {
      icon: ViewInArIcon,
      text: '10+',
      sub: 'Total Works'
  },
]

export { Project, OtherSkills, aboutData, showcaseData, technologiesLogo };
