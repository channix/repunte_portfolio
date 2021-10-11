import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Christiane C. Repunte | Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Christiane C. Repunte',
  subtitle: 'An IT student pursuing a career as a front-end developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi, my name is Christiane Repunte. A flexible and ambitious student with superior attention to detail.',
  paragraphTwo: 'Self-motivated with a strong work ethic and capable of completing tasks with minimal supervision.',
  paragraphThree: 'Furthermore, A team player and enthusiastic communicator.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'CIT-Universify Facebook Analyzer',
    info: 'Capstone Project',
    info2: 'CUFA is a web application that will retrieve data from the official CIT University Page and display it in a dashboard. This web application will get the data on the posts per day, reach, total engagements, and response in the official Facebook page and compare it to the previous month’s data to check whether they increased or not. The application will also display the recent posts of the Facebook page. In addition, a sentiment analysis of the page reviews and page comments.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Patuti Spaceship Mission',
    info: 'First HTML,CSS, and JS Project',
    info2: 'A game where you must dodge wave after wave of bullets to increase your survivability and assist Patuti in leaving the Planet.',
    url: 'https://channix.github.io/patuti.github.io/',
    repo: 'https://github.com/channix/patuti.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Robofriends',
    info: 'React Web Application',
    info2: 'Robofriend is a web application that is made from React, it is a fully responsive web app that searches different kinds of friendly robots available in the datasets.',
    url: 'https://channix.github.io/robofriends/',
    repo: 'https://github.com/channix/robofriends', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: 'Get in touch with me',
  btn: 'Click here!',
  email: 'repuntechannix@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/xhristiane',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/christiane.repunte/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/channix',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
