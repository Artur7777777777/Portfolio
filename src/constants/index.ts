import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  angular,
  vue,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  biggle_logo,
  symfa_logo,
  bluesoft_logo,
  memorialkepper,
  petpals,
  weenfr,
  huzatech,
  littlespoon,
  mercari,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Full stack Developer',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'Vue',
    icon: vue,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Web Developer',
    companyName: 'Biggle',
    icon: biggle_logo,
    iconBg: '#383E56',
    date: 'May 2013 - Feb 2017',
    points: [
      'Maintained high-level experience in React, Angular and state management strategies, including Redux and NgRx.',
      'Incorporated chat libraries like Chart.js and D3.js to visualize investment data and analytics.',
      'Design developed and tested HTML5, CSS3, Bootstrap, jQuery and React.js that meet accessibility and web browser standards for websites',
      'Optimized the frontend using caching, code splitting and lazy loading.',
    ],
  },
  {
    title: 'Frontend Developer',
    companyName: 'BlueSoft',
    icon: bluesoft_logo,
    iconBg: '#E6DEDD',
    date: 'Feb 2017 - Aug 2022',
    points: [
      'Designed dynamic and multi-browser compatible pages using HTML5, CSS3, SASS, React.js, and Angular.',
      'Collaborated with cross-functional teams including designers, backend developers, and product managers to define project requirements and deliverables.',
      'Collaborated with UX/UI designers to translate design mockups into interactive and accessible web pages.',
      'Wrote test code using Jest, React Testing Library and Jasmine.',
    ],
  },
  {
    title: 'Full Stack Developer',
    companyName: 'Symfa',
    icon: symfa_logo,
    iconBg: '#383E56',
    date: 'Aug 2022 - Apr 2024',
    points: [
      'Led collaborative efforts in designing, developing, and deploying fullstack web applications using React, Angular, Vue.js for the frontend, and Node.js, .Net for the backend.',
      'Implemented secure authentication and authorization with ASP.NET Identity while optimizing SQL Server databases using Entity Framework Core for performance and data integrity.',
      'Conducted performance optimization techniques including code splitting, lazy loading, and image optimization to enhance website speed and user experience.',
      'leveraged Three.js to create immersive 3D web experiences, skillfully manipulating models, implementing shaders, and optimizing performance for seamless rendering across platforms.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Memorial keeper',
    description:
      'Social media platform that can upload a video and photos which people can share memories about their loved one who passed away.',
    tags: [
      {
        name: 'Next',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'Django',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    ],
    image: memorialkepper,
    sourceCodeLink: 'https://qa.d3hcvz0a3moa1t.amplifyapp.com/',
  },
  {
    name: 'Ween.fr',
    description: `Ween is the first thermostat to save on energy cost while acting for the planet. 
    It heats your home how you like it - only when you need it whilst limiting your carbon footprint.`,
    tags: [
      {
        name: 'Vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'Nuxt',
        color: 'orange-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient',
      },
      {
        name: 'Node',
        color: 'white-text-gradient',
      },
    ],
    image: weenfr,
    sourceCodeLink: 'https://www.ween.fr/en/',
  },
  {
    name: 'PetPals',
    description:
      "PetPals is a community-driven platform for pet owners to connect with each other, share advice, and organize pet-related events. It's a small, nice website focused on fostering connections within the pet owner.",
    tags: [
      {
        name: 'Angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: petpals,
    sourceCodeLink: 'https://www.petpals.com/',
  },
  {
    name: 'Huzatech',
    description: 'The website provides booking services for travel, including flights and hotels.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'PWA',
        color: 'pink-text-gradient',
      },
    ],
    image: huzatech,
    sourceCodeLink: 'https://b2c.otawix.com/',
  },
  {
    name: 'Little Spoon',
    description:
      'Little Spoon emphasizes the use of high-quality, organic ingredients and aims to make healthy eating convenient and accessible for families. ',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Next',
        color: 'orange-text-gradient',
      },

      {
        name: 'Node',
        color: 'green-text-gradient',
      },
    ],
    image: littlespoon,
    sourceCodeLink: 'https://www.littlespoon.com/',
  },
  {
    name: 'Mercari',
    description:
      'Mercari is a C2C marketplace where individuals can enjoy buying and selling items. Through our unique payment deposit system and our use of AI to monitor for fraud, anyone can enjoy safe and secure transactions.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Next',
        color: 'orange-text-gradient',
      },
      {
        name: 'GraphQL',
        color: 'pink-text-gradient',
      },
      {
        name: 'Node',
        color: 'green-text-gradient',
      },
    ],
    image: mercari,
    sourceCodeLink: 'https://www.mercari.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
