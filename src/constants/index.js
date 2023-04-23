import {
  react,
  mindx,
  js,
  responsive,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mx,
  dx,
  iuh,
  tedtok,
  youtube,
  dasboard,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Javascript',
    icon: js,
    link: 'https://raw.githubusercontent.com/callmeteddy17/portfolio/main/src/assets/js.jpg',
  },
  {
    title: 'Responsive Design',
    icon: responsive,
    link: 'https://raw.githubusercontent.com/callmeteddy17/portfolio/main/src/assets/responsive.jpg',
  },
  {
    title: 'React JS',
    icon: react,
    link: 'https://raw.githubusercontent.com/callmeteddy17/portfolio/main/src/assets/react.jpg',
  },
  {
    title: 'Code Intensive',
    icon: mindx,
    link: 'https://raw.githubusercontent.com/callmeteddy17/portfolio/main/src/assets/mindx.jpg',
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
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
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
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
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'Eyes recognition device for driver',
    company_name: 'Industrial University of Ho Chi Minh city.',
    icon: iuh,
    iconBg: '#E6DEDD',
    date: 'Nov 2021 – Apr 2022',
    points: [
      'First time learns about coding with Python and handle all problems about programing device.',
      'Make project planning and division of task, find solutions and problems.',
      'Support members to understand how the device works and how to use device.',
      'Led team to find out the best way to save cost, increase accuracy of the device.',
    ],
  },
  {
    title: 'Sale Man',
    company_name: 'DatXanh Premium.',
    icon: dx,
    iconBg: '#E6DEDD',
    date: 'Mar 2022 – Sep 2022',
    points: [
      'Improve communication skills, problem solving and work under pressure.',
      'Find solutions to increase sales and potential customers.',
    ],
  },
  {
    title: 'Youtube Clone',
    company_name: 'MindX Technology School.',
    icon: mx,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Make decision in choosing project idea, find solutions for project problems and fix it.',
      'Finish project in time with perfectly complete responsive design and function in the project.',
      'Support members to understand all functions, and problems we have.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible for a newbie like you to do this program, You should be a programming engineer.',
    name: 'Kyle Pham',
    designation: 'Senior Developer',
    company: 'Joblogic',
  },
  {
    testimonial: 'I see you have a good background to learn it, keep moving!',
    name: 'Hieu Dang',
    designation: 'Mentor',
    company: 'MindX Technology School',
  },
  {
    testimonial:
      'I think you are suitable for programming work, you learn very quickly and create a very good running model.',
    name: 'M.Si Do Si Hai',
    designation: 'Lecturers',
    company: 'Industrial University of Ho Chi Minh city',
  },
];

const projects = [
  {
    name: 'Youtube Clone',
    description:
      'Video website application base on Youtube, which help users can see video from Youtube',
    tags: [
      {
        name: '#react',
        color: 'blue-text-gradient',
      },
      {
        name: '#rapidAPI',
        color: 'blue-text-gradient',
      },
      {
        name: '#MUI',
        color: 'blue-text-gradient',
      },
    ],
    image: youtube,
    source_code_link: 'https://github.com/callmeteddy17/clone-youtube.git',
    link: 'https://starlit-frangipane-d7db5e.netlify.app/',
  },
  {
    name: 'Dashboard',
    description:
      'Web application that enables users to see dashboard infomations',
    tags: [
      {
        name: '#react',
        color: 'blue-text-gradient',
      },
      {
        name: '#syncfusion',
        color: 'blue-text-gradient',
      },
      {
        name: '#tailwind',
        color: 'blue-text-gradient',
      },
    ],
    image: dasboard,
    source_code_link: 'https://github.com/callmeteddy17/ted-dashboard.git',
    link: 'https://fascinating-licorice-010d9b.netlify.app/',
  },
  {
    name: 'Tedtok',
    description:
      'Base on Tiktok UI, TedTok enable users upload, comment, like and watch videos.',
    tags: [
      {
        name: '#nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: '#sanity',
        color: 'blue-text-gradient',
      },
      {
        name: '#tailwind',
        color: 'blue-text-gradient',
      },
    ],
    image: tedtok,
    source_code_link: 'https://github.com/callmeteddy17/ted-tok.git',
    link: 'https://ted-tok.vercel.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
