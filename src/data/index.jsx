import { SiMongodb, SiNextdotjs, SiAliexpress, SiCanva, SiNestjs, SiInstagram } from 'react-icons/si'
import { GrGraphQl } from "react-icons/gr";
import { AiFillGithub } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
import { SiTypescript } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import {
   FaHtml5, FaCss3Alt,
  FaNodeJs, FaPython, FaFigma, FaAngular
} from 'react-icons/fa'
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReact, TbBrandMysql } from "react-icons/tb";
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import {project1,project2,project3,project4,project5 } from '../assets/images'


export const menus = [
  { name: "Home" },
  { name: "About" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Contact" },
];


export const skills = [
  {
    category: "UI/UX",
    data: [
      { skill: "Figma", icon: <FaFigma /> },
      { skill: "Canva", icon: <SiCanva /> },
      {skill:"Photoshop",icon:<DiPhotoshop />}

    ]
  },
  
  {
    category: "Frontend Development",
    data: [
      { skill: "Angular", icon: <FaAngular /> },
      { skill: "Nextjs", icon: <SiNextdotjs /> },
      { skill: "React", icon: <TbBrandReact /> },
      { skill: "JavaScript", icon: <RiJavascriptFill /> },
      {skill:"TypeScript",icon: <SiTypescript />},
      { skill: "Tailwind", icon: <RiTailwindCssFill /> },
      { skill: "HTML", icon: <FaHtml5 /> },
      { skill: "CSS", icon: <FaCss3Alt /> },
     
    ]
  },
  {
    category: "Backend Development and Database",
    data: [
      { skill: "NodeJS", icon: <FaNodeJs /> },
      { skill: "NestJS", icon: <SiNestjs /> },
      { skill: "ExpressJS", icon: <SiAliexpress /> },
     
      { skill: "Python", icon: <FaPython /> },
      { skill: "MySQL", icon: <TbBrandMysql /> },
      {skill:"PostgresQL",icon:<SiPostgresql />},
      { skill: "MongoDB", icon: <SiMongodb /> },
      {skill: "GraphQL", icon: <GrGraphQl />}

    ]
  },
  {
    category: "Data science",
    data: [
      {
        skill: "Stata"
      },
      {
        skill:"Python"
      },
      {
        skill:"R"
      },
      {
        skill:"Excel"
      },
      {
        skill: "SurveyCTO"
      },
      
      {
        skill:"MAXQDA"
      }
    ]
  },
  
]


export const projects = [
  {
    name: 'SBAR Healtcare',
    description: `Digital SBAR for Health care system communication and patient's information exchange.Built with Nest.js,Postgres,TypeORM,GraphQL,Angular and Tailwind css`,
    image: project1,
    url: 'https://sbar-apollo-angular.vercel.app/',
  },

  {
    name: 'Pulse',
    description: `The brilliant performance management
    platform around the world. Built with Express.js,Typescript,GraphQL, MOngoDB,React.js and tailwind`,
    image: project2,
    url: 'https://beta.devpulse.org/',
  },

  {
    name: 'PackMedia',
    description: `A platform for developers to interact, share skills, and collaborate. Developed in Next.js, TypeScript, and Firebase.`,
    image: project3,
    url: 'https://packmedia-next.vercel.app/',
  },

  {
    name: 'ShopMart',
    description: `A multi-vendor e-commerce platform . Built with React.js and tailwind on frontend and node.js on backend`,
    image: project4,
    url: 'https://ecommerce-app-champions-fe.vercel.app/',
  },
  {
    name: 'BakeHaven',
    description: `Specializing in custom cakes, cupcakes, and other baked goods for events. Built with Angular, Nest.js, PostgreSQL, and TypeORM`,
    image: project5,
    url: 'https://github.com/patsicko/bakehaven-fe',
  },

];

export const socialHandles = [
  
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/patsicko"
  },
  {
    name: "LinkedIn",
    icon: <CiLinkedin />,
    link: "https://www.linkedin.com/in/patrick-manibaho-a7851a124/",
  },
  {
    name: "Instagram",
    icon: <SiInstagram />,
    link: "https://www.instagram.com/patsicko/",
  },
];


export const contactInfo = [
  {
    name: "Email",
    icon: <MdOutlineAlternateEmail />,
    value: "patsicko@gmail.com",
  },
  {
    name: "Phone",
    icon: <IoCallOutline />,
    value: "+250784660905",
  },
  {
    name: "Address",
    icon: <IoLocationOutline />,
    value: "Musanze, Rwanda",
  },
]

export const footer = [
  {
    group: "Quick Links",
    routes: [
      { name: "Home" },
      { name: "About" },
      { name: "Skills" },
      { name: "Projects" },
      { name: "Contact" },
    ]
  },
  {
    group: "Contacts",
    routes: [
      {
        name: "patsicko@gmail.com",
        icon: <MdOutlineAlternateEmail />,
      },
      {
        name: "+25078460905",
        icon: <IoCallOutline />,
      },
      {
        name: "Musanze, Rwanda",
        icon: <IoLocationOutline />,
      },
    ]
  },
]