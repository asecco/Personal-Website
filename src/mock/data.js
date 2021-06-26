import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andrew Secco', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm",
  name: 'Andrew Secco',
  subtitle: "I'm a developer and tech enthusiast",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm currently a student at Michigan State University studying Information Science, concentrating in Human-Centered Technology.",
  paragraphTwo: "I've been passionate about technology my entire life and have used that passion to create and utilize technologies such as games, websites, apps, and more with the goal of being useful and improving people's lives.",
  paragraphThree: "When I'm not immersed in tech, I enjoy keeping up with the latest films and television series, which leads into some of my other hobbies, storytelling and video production.",
  resume: 'https://drive.google.com/file/d/1ZBAMaFYc9swHZUJYznx7YBJ8VjL-Kk3C/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ip-location-lookup.png',
    title: 'IP Location Lookup',
    info: 'Allows you to type in an IP address and identify the location, proxy/VPN status, and other information associated with the IP address.',
    info2: "Can be useful if you want to quickly check whether your VPN is actually connected and isn't leaking out.",
    url: 'https://github.com/asecco/IP-Location-Lookup',
  },
  {
    id: nanoid(),
    img: 'friendship-simulator.png',
    title: 'Friendship Simulator',
    info: 'Mario Party-esque party game developed for the purpose of bringing people together to have a friendly competition in fun mini-games.',
    info2: "The game features 3 different mini-games (Pong, Air Hockey, Duel) that have the option of being played cooperatively locally or single-player against an AI.",
    url: 'https://github.com/asecco/Friendship-Simulator',
  },
];

// CONTACT DATA
export const contactData = {
  cta: "I'm always open to collaboration, so feel free to contact me about opportunities.",
  btn: 'Email',
  email: 'asecco99@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andrewsecco/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'http://github.com/asecco',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://youtube.com/clownz',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
