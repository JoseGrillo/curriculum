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

    title: "Quién soy",
    body: [
      "Soy una persona muy motivada y motivadora a la que le apasiona tener un impacto positivo. Poseo una combinación única de habilidades técnicas e interpersonales, gracias a mi formación en informática. Soy capaz de abordar problemas complejos con facilidad y nunca pierdo de vista mi objetivo final, incluso cuando me enfrento a desafíos.",
      "Cuando no estoy trabajando, me encanta leer y pasar tiempo con mis amigos y mi familia. Creo que mi determinación, mi actitud positiva y mi trabajo duro me convierten en un verdadero activo para cualquier equipo.",
    ],
  },
  personalData: {
    id: "en",
    name: "Jose Grillo",
    role: "Desarrollador Full-Stack",
    education: [
      "Tecnico en Informatica, Univ. Tecnologica del Centro (1988-1990)",
      "Abogado, Univ.. Bolivariana de Venezuela (2005-2010)",
    ],
    contactLinks: [
      "mailto:grillo.jg@gmail.com",
      "https://twitter.com/grillojg",
      "https://wa.me/584121091522",
      "https://discord.gg/CkbQ5XUM5w"
    ],
  },
  professionalData: {
    title: "Experiencia profesional",
    experiences: [
      {
        role: "Asesor Inmobiliario Independiente. (2016-Present)",
        description:
          "Como Asesor Inmobiliario Independiente soy un profesional especializado en aconsejar, gestionar y mediar en operaciones de compra, venta o alquiler de inmuebles.Este rol requiere habilidades de comunicación, conocimiento del mercado inmobiliario, capacidad de negociación y visión estratégica para lograr objetivos de venta y satisfacer las necesidades de los clientes. Como Asesor Inmobiliario Independiente, ofrezco servicios personalizados y transparentes, garantizando la calidad en cada una de las etapas del proceso inmobiliario para lograr la satisfacción de mis clientes",
        current: true,
      },

      {
        role: "Gerente, Inversiones Ferrecricket C.A. (2009-2015)",
        description:
          "Gerente y Dueño de la ferretería Inversiones Ferrecricket C.A, con experiencia en liderar y dirigir una empresa exitosa. He desarrollado habilidades en la gestión de personal, control de inventario, estrategias de marketing y ventas, así como en la elaboración de presupuestos y reportes financieros. Mi enfoque se centra en garantizar una excelente atención al cliente, promoviendo relaciones comerciales duraderas. Disfruto de trabajar en equipo y estoy comprometido con el éxito de mi empresa y el crecimiento profesional de mi equipo de trabajo",
        current: false,
      },
      {
        role: "Gerente, Stop Ferretero C.A. (2006-2009)",
        description:
          "Gerente altamente capacitado con experiencia en liderar el equipo de trabajo para lograr los objetivos de venta y la satisfacción al cliente.He desarrollado habilidades en el manejo de inventario, experiencia en la planificación de estrategias de marketing y técnicas de ventas efectivas para aumentar la clientela y el volumen de ventas .Además, he supervisado el flujo de caja, el control de costos y la elaboración de reportes financieros en la empresa. Mi enfoque se centra en el servicio al cliente excepcional y la atención al detalle para garantizar una excelente experiencia de compra en la ferretería.Me considero un líder motivacional, capaz de gestionar y dirigir el equipo en situaciones difíciles y con capacidad de adaptación a los cambios en el mercado.",
        current: false,
      },
      {
        role: "Gerente y dueño, Transporte El Grillo C.A (1993-2006)",
        description:
          "Gerente y Dueño de una empresa de transporte altamente capacitado con experiencia en prestar servicios a subcontratistas de PDVSA. He desarrollado habilidades en el manejo del personal, el transporte de mercancías y mercaderías, así como en la elaboración de presupuestos y reportes financieros.Mi enfoque se centra en garantizar una excelente atención al cliente, promoviendo relaciones comerciales duraderas.Además, como dueño de la empresa, estoy comprometido con el crecimiento y la expansión del negocio de transporte, con la finalidad de brindar una oferta de servicios de alta calidad y competitivos dentro del mercado.Disfruto trabajar en equipo y estoy comprometido con los objetivos y metas de la empresa bajo mi liderazgo.",
        current: false,
      },
    ],
  },
  proyectos: {
    title: "Proyectos",
    proyecto: [
      {
        id: 'world-1',
        imgUrl: '/images/landing-tailwind.webp',
        title: 'Landing Page',
        descripcion: "Elaboración de un proyecto de Landing Page visualmente atractiva gracias a la integración del diseño de Tailwind, sino que también fue altamente funcional, ya que se permitía enviar correos electrónicos para contactar de forma fácil y segura.  Para lograr este objetivo, tuve que trabajar con varias tecnologías diferentes, incluyendo React, Tailwind, y Next.js.También utilicé mi experiencia en diseño web para asegurarme de que la página tuviera un aspecto profesional y fácil de navegar.",
        codigo: "https://github.com/JoseGrillo/03-landing_tailwind_next",
        fuente: "https://03-landing-tailwind-next.vercel.app/",
        activo: true,
      },
      {
        id: 'world-2',
        imgUrl: '/images/reser-inmueble.webp',
        title: 'Clon de Airbnb',
        descripcion: "Diseñé y creé una página web clon de AIRBNB desde cero, que ofrece una forma accesible y económica de publicar, promocionar y reservar alojamiento en línea. Implementé las tecnologías de vanguardia Next.js, React, MongoDB y Tailwind para asegurar una experiencia de usuario innovadora y a la altura de las expectativas. Soy un apasionado de la creación de soluciones únicas y eficientes que hacen posible los proyectos más ambiciosos y estoy dispuesto a enfrentar nuevos desafíos",
        codigo: "https://github.com/JoseGrillo/09.-airbnb-video",
        fuente: "https://reser-inmueble.vercel.app/",
        activo: true,
      },
      {
        id: 'world-3',
        imgUrl: '/images/landing-01.webp',
        title: 'Landing Page',
        descripcion: "En este proyecto se diseño una página web para un bufete de abogados, que permitió una comunicación efectiva con los clientes y una gestión de casos más eficiente. Utilicé tecnologías como REACT, NEXT.JS, TAILWIND para crear una plataforma que responde a las necesidades específicas del cliente. Soy capaz de trabajar en equipo y diseñar soluciones web innovadoras para cumplir con los objetivos de los clientes.",
        codigo: "",
        fuente: "https://landing-01.vercel.app/",
        activo: false,
      },
      {
        id: 'world-4',
        imgUrl: '/images/casas-maturin.webp',
        title: 'Inmobiliaria',
        descripcion: "Como corredor inmobiliario, he desarrollado un blog donde muestro las casas que promuevo para la venta y alquiler de mis clientes. Gracias a mi experiencia en marketing digital, he sido capaz de crear una plataforma que permite una exposición efectiva de las propiedades y una comunicación más cercana con los potenciales compradores y arrendatarios. Soy capaz de trabajar de manera independiente y utilizar mi conocimiento en tecnología web para atraer más clientes y cerrar más negocios",
        codigo: "",
        fuente: "https://casas-maturin.blogspot.com/",
        activo: false,
      },
      {
        id: 'world-5',
        imgUrl: '/images/librosdecostura.webp',
        title: 'Venta de Libros de Costura',
        descripcion: "Además de desarrollar un blog en Bloguer para mi madre para promocionar sus libros, también me encargué personalmente de la edición de los libros en formato impreso y digital. Toda la parte gráfica fue diseñada por mí, utilizando mis habilidades en diseño web y marketing digital para asegurarme de que el contenido de los libros estuviera presentado de manera clara y atractiva. Es por eso que estoy orgulloso de decir que no solo creé una plataforma donde mi madre pudiera presentar sus conocimientos de corte, costura y confección, sino que también diseñé y edité los libros que la hicieron llegar a un público más amplio tanto digital como físico. Esta experiencia me permitió desarrollar mi creatividad y habilidades técnicas, y espero poder aplicarlas en proyectos futuros.",
        codigo: "",
        fuente: "https://librosdecostura.blogspot.com/p/coser.html",
        activo: false,
      },
      {
        id: 'world-6',
        imgUrl: '/images/curriculum.webp',
        title: 'Curriculum vitae',
        descripcion: "En este proyecto, tuve la oportunidad de desarrollar una página web para mostrar mi currículum  utilizando las tecnologías React, Next, Tailwind y Zustand. Una de las características más destacadas de esta página web fue la capacidad de cambiar el idioma de la página de Español a Inglés y viceversa con un solo clic.  En resumen, gracias a estas tecnologías pude crear una página web atractiva y funcional que mostraba mi currículum y ofrecía la posibilidad de cambiar de idioma, lo que me permite llegar a una audiencia más amplia y mejorar mi presencia en línea. ",
        codigo: "",
        fuente: "",
        activo: false,
      },
    ],

  },
  skills: {
    title: "Habilidades",
    soft: [  //habilidades con la gente
      { icon: "👂🏼", text: "Empático" },
      { icon: "💬", text: "Comunicación efectiva" },
      { icon: "👥", text: "Honesto" },
      { icon: "⽓", text: "Trabajo en equipo" },
      { icon: "🐱‍🏍", text: "Orientación al cliente" },
      { icon: "💡", text: "Pensamiento crítico" },
      { icon: "👽", text: "Solución creativa de problemas" },
      { icon: "⌛️", text: "Gestión del tiempo" },
      { icon: "🧐", text: "Motivación y compromiso" },
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
