// import images
import Hero_person from "./assets/images/Hero/person.png";

import Flask from "./assets/images/Skills/flask.png";
import HTML5 from "./assets/images/Skills/html5.png";
import JavaScript from "./assets/images/Skills/javascript.png";
import reactjs from "./assets/images/Skills/react.png";
import TypeScript from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo4.png";

import project1 from "./assets/images/projects/conference_hall.svg";
import project2 from "./assets/images/projects/it-asset-tracker.webp";
import project3 from "./assets/images/projects/2A_2B.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Roshni",
    LastName: "Mahutkar",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React JS",
        para: "Extensive experience in Redux, Material UI, REST API",
        logo: reactjs,
      },
      {
        name: "TypeScript",
        para: "Developed several dynamic web applications and websites",
        logo: TypeScript,
      },
      {
        name: "JavaScript",
        para: "Developed several dynamic web applications and websites",
        logo: JavaScript,
      },
      {
        name: "HTML 5 / CSS 3",
        para: "Developed user friendly websites using BootStrap",
        logo: HTML5,
      },
      {
        name: "Python",
        para: "Experienced in Pandas, Numpy",
        logo: python,
      },
      {
        name: "Flask",
        para: "Developed an web application for an IoT device using MQTT and SQL",
        logo: Flask,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Internship",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Worked as a software development intern on company website revamping and a social media start up web application",
        logo: services_logo1,
      },
      {
        title: "Python",
        para: "Developed Python scripts for scraping Youtube and Instagram videos. Processed and analyzed extracted data, showcasing adaptability and swift learning",
        logo: services_logo2,
      },
      {
        title: "IoT Web-Application",
        para: "Collaborated on an innovative project focusing on health and nutrition, leveraging ReactJS for a user-friendly front-end. Implemented Flask with MySQL for the robust back-end, enabling efficient data management.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Conference Hall Management System",
        image: project1,
      },
      {
        title: "IT Assets Management System",
        image: project2,
      },
      {
        title: "2A/2B Reconciliation",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Interested in my profile???",
    subtitle: "Recruit Me",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I build pixel-perfect, accessible products for the web and beyond.",
    btnText: "Recruit Me",
  },
  Contact: {
    title: "GET IN TOUCH",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "roshnimahutkar@gmail.com",
        icon: GrMail,
        link: "roshnimahutkar@gmail.com",
      },
      {
        text: "+91 7448126454",
        icon: MdCall,
        link: "https://wa.me/7448126454",
      },
      {
        text: "roshnimahutkar_05",
        icon: BsInstagram,
        link: "https://www.instagram.com/roshnimahutkar_05/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
