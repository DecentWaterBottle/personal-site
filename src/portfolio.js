import loominaImage from './assets/loomina_homepage.png';
import thesisImage from './assets/hill_climbing_decrypyer_logo_5.jpg';
import aerialArsenal from './assets/aerial_arsenal_02.png';
import logitechLogo from './assets/logitech_banner.png';

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jack-carter.me',
  title: 'JC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jack Carter',
  role: 'Software Engineer | Backend ',
  // description:
  //   'I am a backend developer with a passion for creating and maintaining scalable and efficient systems. I have experience with a variety of technologies and am always looking to learn more.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/jack-carter4/',
    github: 'https://github.com/DecentWaterBottle',
  },
}

const projects = [
  {
    name: 'Loomina',
    description: 'A generative AI-based learning platform where users decide their own teacher and topics.',
    detailedDescription: `Loomina is a generative AI-based learning platform which gives the user complete freedom to choose whatever they want to learn about, and from whom they wish to learn it. `,
    thumbnail: loominaImage,
    stack: ['Vue.js', 'Koa', 'Typscript', 'API', 'Supabase', "NodeJS"],
    livePreview: 'https://loomina.net',
  },
  {
    name: 'Logitech R&D',
    description: 'Exploring innovative hardware prototypes and user experience solutions',
    detailedDescription: `During my  9-month internship at Logitech where I was a part of the R&D team, I was tasked with developing a variety of prototypes and solutions for various projects. <br />
    My primary contribution was in the conceptualization and development of prototype solutions, utilizing a variety of technologies including Typescript, React, Three.js, C# and Unity. <br />
    Despite my position as intern, I was a live and active part of the team and was included in every stage of development, with my contributions being valued and implemented.`,
    thumbnail: logitechLogo,
    stack: ['React', 'Typescript', 'TailwindCSS', 'NodeJS'],
  },
  {
    name: 'Decrypter for Traditional Substitution Ciphers',
    description: 'Exploring various methods to decrypt traditional substitution ciphers',
    detailedDescription: `This project is the culmination of my years of education at Munster Technological University, and served as the subject of my final year project. The purpose of this project was to develop an algorithm to automatically decrypt monoalphabetic substitution ciphers.
    The project was split into two main sections. The first phase was the exploratory and algorithm-development phase, which involved testing and experimenting with different algorithms and variations of said algorithms to find the most optimal solution. The second phase involved taking the resulting algorithm and implementing it into a web application using Flask.
    <br /> The full thesis can be found: <a href="https://www.academia.edu/104264928/An_Automated_Decrypter_for_Traditional_Substitution_Ciphers" target="_blank" rel="noopener noreferrer">here</a>`,
    thumbnail: thesisImage,
    stack: ['Python', 'Flask', "Javascript", "Tailwind CSS"],
    sourceCode: 'https://github.com/DecentWaterBottle/primitive-cipher-decrypter',
  },
  {
    name: 'Aerial Arsenal',
    description: 'A Minecraft modification that adds a variety of throwable weaponry',
    detailedDescription: `This mod adds a plethora of additional weaponry to Minecraft utilizing the Force API. <br />
    Creating this mod gave me insight into working with already established codebases and how something as complex as a video game is created without a typical game engine.
    With a focus on modular design, I aimed to test my ability to adapt to a new codebase and create a functional and fun mod.`,
    thumbnail: aerialArsenal,
    stack: ['Java', 'Forge API',],
    sourceCode: 'https://github.com/DecentWaterBottle/AerialArsenal',
  },

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'TypeScript',
  'Vue.js',
  'HTML/CSS',
  "Supabase",
  "Koa",
  "SQL",
  "NodeJS",
  'Git',
  'Java',
  'SpringBoot',
  'Python',
  'Flask',
  "Arduino",
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jack.carter334@gmail.com',
}

export { header, about, skills, contact, projects }