import {
  mobile,
  backend,
  creator,
  web,
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
  meta,
  nottingham,
  tanand,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kali,
  mysql,
  postgres,
  python,
  solidity,
  kayo,
  identeefi,
  nottstutor,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Blockchain Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "FinTech Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Kali Linux",
    icon: kali,
  },
];

const experiences = [
  {
    title: "MSc Financial Technology",
    company_name: "University of Nottingham",
    icon: nottingham,
    iconBg: "#005F95",
    date: "Sep 2023 - Sep 2024",
    points: [
      "Predicted Grade: First Class",
      "Relevant Modules: Blockchain and Cryptocurrency, Data Analytics and Machine Learning for FinTech",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Tanand Technology Sdn Bhd",
    icon: tanand,
    iconBg: "#E6DEDD",
    date: "June 2022 - Sep 2022",
    points: [
      "Led a team of 4 in delivering an IoT automation project which led to 15% cost savings for the client’s company.",
      "Developed a full-stack IoT automation project to monitor temperature and humidity in data centers using VueJS, Grafana, Typescript, NodeJS, InfluxDB, Redis and Postgres and deployed the project on Linux environments.",  
      "Integrated the system with real-time notifications using Telegram and WhatsApp to alert stakeholders in case of abnormalities.",
    ],
  },
  {
    title: "BSc Computer Science (Hons)",
    company_name: "University of Nottingham",
    icon: nottingham,
    iconBg: "#005F95",
    date: "Sep 2021 - July 2023",
    points: [
      "Grade: First Class Honours, Rank 1",
      "Recipient of the Best Student Award 2023, Dean’s Excellence Scholarship Award, Best Presentor Award",
      "School of Computer Science Representative",      
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Anti-Counterfeit Product Identification System using Blockchain",
    description:
      "Web-based platform that allows users to track their products throughout the supply chain to determine its authenticity by interacting with smart contracts on the Ethereum blockchain.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ethers.js",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      
    ],
    image: identeefi,
    source_code_link: "https://github.com/yenxuan1381/anti-counterfeit-product-identification-system-using-blockchain",
  },
  {
    name: "Food Ordering Chatbot using AI",
    description:
      "An AI-powered food ordering chatbot that uses NLP techniques to interact with users, present menus, handle orders, and calculate prices. It's integrated with Telegram for a seamless chat experience. This project won the Top 7 finalist of the nationally renowned Nott-A-Code Competition 2021.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: kayo,
    source_code_link: "https://github.com/yenxuan1381/food-ordering-chatbot-using-ai",
  },
  {
    name: "NottsTutor 2.0: Personal Tutoring System",
    description:
      "A web application that streamlines personal tutoring in educational institutions by automating student management process. PHP is used for server-side scripting and MySQL for database management. It is deployed and used by over 7K people in the University of Nottingham Malaysia.", 
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "apache",
        color: "green-text-gradient",
      },
    ],
    image: nottstutor,
    source_code_link: "https://github.com/yenxuan1381/personal-tutoring-system",
  },
];

export { services, technologies, experiences, testimonials, projects };
