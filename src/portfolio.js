import loominaImage from './assets/loomina_homepage.png';
import thesisImage from './assets/hill_climbing_decrypyer_logo_5.jpg'
import aerialArsenal from './assets/aerial_arsenal_02.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jack Carter',
  role: 'Backend Developer',
  description:
    'I am a backend developer with a passion for creating and maintaining scalable and efficient systems. I have experience with a variety of technologies and am always looking to learn more.',
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
    detailedDescription: `Detailed description for Project One.`,
    thumbnail: loominaImage,
    stack: ['Vue.js', 'Koa', 'Typscript', 'API', 'Supabase'],
    // sourceCode: 'https://github.com/user/project-one',
    livePreview: 'https://loomina.net',
  },
  {
    name: 'Aerial Arsenal',
    description: 'A Minecraft modification that adds a variety of throwable weaponry',
    detailedDescription: 'Detailed description for Project Two.',
    thumbnail: aerialArsenal,
    stack: ['Java', 'Forge API',],
    sourceCode: 'https://github.com/DecentWaterBottle/AerialArsenal',
    // livePreview: 'https://user.github.io/project-two',
  },
  {
    name: 'Decrypter for Traditional Substitution Ciphers',
    // name: 'Cipher Smasher',
    description: 'Exploring various methods to decrypt traditional substitution ciphers',
    detailedDescription: `This project is the culmination of my years of education at Munster Technological University, and served as the subject of my final year project. The purpose of this project was to demonstrate what I have learned over the previous years by developing an algorithm to automatically decrypt monoalphabetic substitution ciphers.

The project was split into two main sections. The first phase was the exploratory and algorithm-development phase, which involved testing and experimenting with different algorithms and variations of said algorithms to find the most optimal solution. The second phase involved taking the resulting algorithm and implementing it into a web application using Flask.`,
    thumbnail: thesisImage,
    stack: ['Python', 'Flask', "Javascript", "Tailwind CSS"],
    sourceCode: 'https://github.com/DecentWaterBottle/primitive-cipher-decrypter',
    livePreview: 'https://user.github.io/project-two',
  },
  // Add more projects as needed
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