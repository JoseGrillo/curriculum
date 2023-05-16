import { TbBrandNextjs, TbBrandReactNative, TbSeo } from 'react-icons/tb';

import { DiReact, DiNodejs, DiJavascript1, DiCss3Full, DiGithubFull } from 'react-icons/di';
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiStyledcomponents,
  SiMysql,
  SiFigma,
  SiSolidity,
} from 'react-icons/si';


export default {
  aboutMe: {

    title: "Who I am",
    body: [
      "I am a highly motivated and driven individual who is passionate about making a positive impact. I possess a unique combination of technical and interpersonal skills, thanks to my background in computer science. I am able to tackle complex problems with ease and never lose sight of my end goal, even when faced with challenges.",
      "When I'm not working, I love to read and spend time with my friends and family. I believe that my determination, positive attitude and hard work make me a real asset to any team, I'm a great team player",
    ],
  },
  personalData: {
    id: "en",
    name: "Jose Grillo",
    role: "Full-Stack Developer",
    education: [
      "Computer Technician, Univ. Tecnologica del Centro (1988-1990)",
      "Lawyer, Univ. Bolivarian Univ. of Venezuela (2005-2010)",
    ],
    contactLinks: [
      "mailto:grillo.jg@gmail.com",
      "https://twitter.com/grillojg",
      "https://wa.me/584121091522",
      "https://discord.gg/CkbQ5XUM5w"
    ],
  },
  professionalData: {
    title: "Work experience",
    experiences: [
      {
        role: "Independent Real Estate Advisor (2016-Present).",
        description:
          "As an Independent Real Estate Advisor, I am a professional specialized in advising, managing and mediating in real estate purchase, sale or rental transactions. This role requires communication skills, knowledge of the real estate market, negotiation skills and strategic vision to achieve sales goals and meet the needs of clients. As an Independent Real Estate Advisor, I offer personalized and transparent services, guaranteeing quality at every stage of the real estate process to achieve the satisfaction of my clients.",
        current: true,
      },

      {
        role: "Manager, Inversiones Ferrecricket C.A. (2009-2015)",
        description:
          "Manager and Owner of the hardware store Inversiones Ferrecricket C.A., with experience in leading and managing a successful company. I have developed skills in personnel management, inventory control, marketing and sales strategies, as well as budgeting and financial reporting. My focus is on ensuring excellent customer service, fostering long-lasting business relationships. I enjoy working in a team environment and am committed to the success of my company and the professional growth of my team.",
        current: false,
      },
      {
        role: "Manager, Stop Ferretero C.A. (2006-2009)",
        description:
          "Highly skilled manager with experience in leading the team to achieve sales goals and customer satisfaction.I have developed skills in inventory management, experience in planning marketing strategies and effective sales techniques to increase clientele and sales volume.In addition, I have overseen cash flow, cost control and financial reporting within the company.My focus is on exceptional customer service and attention to detail to ensure an excellent hardware store shopping experience.I consider myself a motivational leader, able to manage and lead the team through challenging situations and the ability to ensure an excellent hardware store shopping experience.I consider myself a motivational leader, able to manage and lead the team through challenging situations and the ability to lead the team through difficult situations. My focus is on exceptional customer service and attention to detail to ensure an excellent hardware store shopping experience.I consider myself a motivational leader, able to manage and lead the team through challenging situations and adaptable to changes in the marketplace.",
        current: false,
      },
      {
        role: "Manager and owner, Transporte El Grillo C.A. (1993-2006)",
        description:
          "Manager and Owner of a highly skilled transportation company with experience in providing services to PDVSA subcontractors. I have developed skills in personnel management, transportation of goods and merchandise, as well as in budgeting and financial reporting.My focus is on ensuring excellent customer service, promoting long lasting business relationships.In addition, as owner of the company, I am committed to the growth and expansion of the transportation business, with the aim of providing a high quality and competitive service offering within the market.I enjoy working as a team player and am committed to the objectives and goals of the company under my leadership.",
        current: false,
      },
    ],
  },
  proyectos: {
    title: "Projects",
    proyecto: [
      {
        id: 'world-1',
        imgUrl: '/images/landing-tailwind.webp',
        title: 'Landing Page',
        descripcion: "Crafting a visually appealing Landing Page project thanks to the integration of Tailwind's design, but it was also highly functional, as it allowed for easy and secure email contact.  To achieve this goal, I had to work with several different technologies, including React, Tailwind, and Next.js.I also used my experience in web design to make sure the page looked professional and easy to navigate.",
        codigo: "https://github.com/JoseGrillo/03-landing_tailwind_next",
        fuente: "https://03-landing-tailwind-next.vercel.app/",
        activo: true,
      },
      {
        id: 'world-2',
        imgUrl: '/images/reser-inmueble.webp',
        title: 'Airbnb clone',
        descripcion: "I designed and created an AIRBNB clone website from scratch, offering an accessible and affordable way to publish, promote and book accommodation online. I implemented cutting-edge Next.js, React, MongoDB and Tailwind technologies to ensure an innovative user experience that lives up to expectations. I am passionate about creating unique and efficient solutions that make the most ambitious projects possible and I am ready to face new challenges.",
        codigo: "https://github.com/JoseGrillo/09.-airbnb-video",
        fuente: "https://reser-inmueble.vercel.app/",
        activo: true,
      },
      {
        id: 'world-3',
        imgUrl: '/images/landing-01.webp',
        title: 'Landing Page',
        descripcion: "In this project I designed a website for a law firm, which allowed effective communication with clients and more efficient case management. I used technologies such as REACT, NEXT.JS, TAILWIND to create a platform that responds to the specific needs of the client. I am able to work as a team player and design innovative web solutions to meet client objectives.",
        codigo: "",
        fuente: "https://landing-01.vercel.app/",
        activo: false,
      },
      {
        id: 'world-4',
        imgUrl: '/images/casas-maturin.webp',
        title: 'Real estate',
        descripcion: "As a real estate broker, I have developed a blog where I showcase the homes I promote for sale and rent to my clients. Thanks to my experience in digital marketing, I have been able to create a platform that allows for effective exposure of properties and closer communication with potential buyers and renters. I am able to work independently and use my knowledge in web technology to attract more clients and close more business.",
        codigo: "",
        fuente: "https://casas-maturin.blogspot.com/",
        activo: false,
      },
      {
        id: 'world-5',
        imgUrl: '/images/librosdecostura.webp',
        title: 'Sale of Sewing Books',
        descripcion: "In addition to developing a blog on Bloguer for my mother to promote her books, I was also personally in charge of editing the books in print and digital format. All the graphics were designed by me, using my skills in web design and digital marketing to make sure that the content of the books was presented in a clear and attractive way. That's why I'm proud to say that not only did I create a platform where my mother could present her knowledge of cutting, sewing and dressmaking, but I also designed and edited the books that made her reach a wider audience both digitally and physically. This experience allowed me to develop my creativity and technical skills, and I hope to be able to apply them in future projects. ",
        codigo: "",
        fuente: "https://librosdecostura.blogspot.com/p/coser.html",
        activo: false,
      },
      {
        id: 'world-6',
        imgUrl: '/images/curriculum.webp',
        title: 'Curriculum vitae',
        descripcion: "In this project, I had the opportunity to develop a website to showcase my resume using React, Next, Tailwind and Zustand technologies. One of the most outstanding features of this website was the ability to change the language of the page from Spanish to English and vice versa with a single click.  In short, thanks to these technologies I was able to create an attractive and functional website that displayed my resume and offered the ability to switch languages, allowing me to reach a wider audience and improve my online presence.",
        codigo: "",
        fuente: "",
        activo: false,
      },
    ],

  },
  skills: {
    title: "Skills",
    soft: [  //habilidades con la gente
      {
        icon: "👂🏼", text: "Empathic"   //          
      },
      { icon: "💬", text: "Effective Communication" },
      { icon: "👥", text: "Honest" },
      { icon: "⽓", text: "Teamwork" },
      { icon: "🐱‍🏍", text: "Customer-oriented" },
      { icon: "💡", text: "Critical thinking" },
      { icon: "👽", text: "Creative problem solving" },
      { icon: "⌛️", text: "Time management" },
      { icon: "🧐", text: "Motivation and commitment" },
    ],
    hard: [   //habilidades de programacion
      { icon: "📗", text: "Corel Draw" },

      {
        icon: < DiCss3Full />, text: "CSS3"
      },
      { icon: "📖", text: "Docusaurus" },
      { icon: "🔋", text: "Ethers.js" },

      {
        icon: < SiExpress />, text: "Express"
      },
      {
        icon: <SiFigma />, text: "Figma"
      },
      {
        icon: <DiGithubFull size="1.7rem" />, text: "Git y GitHub"
      },
      {
        icon: < DiJavascript1 />, text: "Javascript"
      },
      {
        icon: <SiMongodb />, text: "MongoDB"
      },
      {
        icon: <SiMysql size="2rem" />, text: "MySQL"
      },


      { icon: <TbBrandNextjs />, text: "Next.js" },
      {
        icon: <DiNodejs size="1.7rem" />, text: "Node"
      },
      { icon: <SiPrisma />, text: "Prisma" },
      { icon: <DiReact />, text: "React" },
      {
        icon: <TbSeo />, text: "SEO (Search Eng ine Optimization)"
      },
      {
        icon: <SiSolidity />, text: "Solidity"
      },
      { icon: "📙", text: "Sony Vegas" },
      {
        icon: <SiStyledcomponents size="1.7rem" />, text: "Styled-Components"
      },
      {
        icon: <SiTailwindcss />, text: "TailwindCSS"
      },

      {
        icon: <SiTypescript />, text: "TypeScript"
      },

    ],
  },
} 
