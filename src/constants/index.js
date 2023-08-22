import {
    hostel,
    achievements,
    education,
    habits,
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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    proment,
  } from "../assets";
  
// var Linkedin = document.getElementsByClassName("linkedIn");
// var Instagram = document.getElementsByClassName("instagram");  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Profile",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Education",
      company_name: "",
      icon: education,
      iconBg: "#383E56",
      date: "",
      points: [
        "SSN College Of Engineering, Chennai - BTech in Information Technology - '2021-2024'." ,
        "Thanthai Periyar Government Polytechnic College, Vellore - Diploma in Electrical and Electronics Engineering - '2019-2021'.",
        "Cluny Matriculation Higher Secondary School - Devikapuram, Tiruvannamalai District, Tamil Nadu - '2005 - 2019'.",
      ],
    },
    {
      title: "Achievements",
      company_name: "",
      icon: achievements,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Runner Up - State Level Technical Symposium held in Rajagopal Polytechnic College, Gudiyatam - Presenting the topic on ZigBee Technology.",
      ],
    },
    {
      title: "Habits and Interests",
      company_name: "",
      icon: habits,
      iconBg: "#383E56",
      date: "",
      points: [
        "Beyond lines of code and algorithms, I find immense joy in connecting with the younger generation, collaborating to discover innovative products and technologies that shape our future. Their fresh perspectives and boundless creativity inspire me to push the boundaries of my work in web development and machine learning.",
        "When I'm not immersed in coding projects, you can find me on the cricket pitch, where I unleash my competitive spirit and teamwork. Cricket has taught me valuable lessons in perseverance, strategy, and leadership—all of which are qualities I strive to incorporate into my approach to problem-solving in the tech world.",
        "Music is the soul of my life. The rhythmic harmony I find in music echoes in the way I design seamless and user-centric websites.",
        "Cooking is not just a necessity; it's an art form that allows me to experiment with flavors and textures. The creativity and precision required in the kitchen parallel the way I craft elegant code and build innovative solutions.",
        "My passion for both technology and human connection drives my desire to create meaningful, user-oriented products that make a difference in people's lives. Understanding the needs and aspirations of users is as crucial in the world of tech as it is in any team sport or collaborative venture.",
        "I'm thrilled to share a glimpse of my multifaceted journey with you and eager to explore the limitless possibilities that lie ahead. Let's connect, collaborate, and create a better tomorrow together.",
      ],
    },
    // {
    //   title: "Connect with me",
    //   company_name: "",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "",
    //   points: [
        
    //   ],
    // },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    {
      testimonial:
        "Amazed by his work and value system.",
      name: "Sanjay",
      designation: "",
      company: "",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Project Management Web App",
      description:
        "Web-based platform that allows project team to organize their workflow and handle the development process more efficiently.",
      tags: [
        {
          name: "angularjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: proment,
      source_code_link: "https://github.com/GokulAjithV/Product-Management-System",
    },
    {
      name: "Hostel Management System",
      description:
        "Web application that enables hostel students to get outpass from the warden and raise complaints without visiting them directly. Made for the hostel students of SSN college of engineering.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "htmlandjs",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: hostel,
      source_code_link: "https://github.com/GokulAjithV/Hostel_Management_System_SSN",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };