import { Post } from "@/types/blog";

export const posts: Post[] = [
  {
    id: "1",
    title: "Empezando con Next.js y TypeScript",
    slug: "empezando-nextjs-typescript",
    excerpt:
      "Aprendé a construir aplicaciones web modernas con Next.js y TypeScript. Esta guía completa cubre todo lo que necesitás saber.",
    content: `Next.js es un poderoso framework de React que facilita la creación de aplicaciones web. Combinado con TypeScript, obtenés seguridad de tipos y una experiencia de desarrollo increíble.

    En esta guía, vamos a cubrir:
    - Cómo configurar un proyecto Next.js con TypeScript
    - Entender el enrutamiento basado en archivos
    - Trabajar con componentes y páginas
    - Manejo de estado y obtención de datos
    - Cómo desplegar tu aplicación

    ¡Vamos a sumergirnos y empezar a construir!`,
    coverImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    author: {
      name: "Juan Pérez",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    tags: ["Next.js", "TypeScript", "React"],
    createdAt: "2024-03-20T10:00:00Z",
    updatedAt: "2024-03-20T10:00:00Z",
    category: "Next.js",
    comments: [
      {
        id: "c1",
        content:
          "¡Excelente introducción! Me ayudó mucho a entender los conceptos básicos.",
        author: {
          name: "Ana Gómez",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        },
        createdAt: "2024-03-21T12:00:00Z",
        postId: "1",
      },
    ],
  },
  {
    id: "2",
    title: "Construyendo UIs Hermosas con Tailwind CSS",
    slug: "construyendo-uis-hermosas-tailwind-css",
    excerpt:
      "Descubrí cómo crear interfaces de usuario impresionantes usando Tailwind CSS. Desde estilos básicos hasta componentes avanzados.",
    content: `Tailwind CSS ha revolucionado la forma en que estilamos aplicaciones web. Su enfoque basado en utilidades permite un desarrollo rápido sin sacrificar la personalización.

    En este tutorial, vamos a explorar:
    - Cómo configurar Tailwind CSS en tu proyecto
    - Entender las clases de utilidad
    - Crear diseños responsivos
    - Construir componentes personalizados
    - Optimización para producción

    ¡Prepárate para transformar tu flujo de diseño!`,
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    author: {
      name: "Ana Gómez",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    tags: ["Tailwind CSS", "Diseño de UI", "CSS"],
    createdAt: "2024-03-19T15:30:00Z",
    updatedAt: "2024-03-19T15:30:00Z",
    category: "Tailwind",
  },
  {
    id: "3",
    title: "Fundamentos de HTML para Principiantes",
    slug: "fundamentos-html-principiantes",
    excerpt:
      "Aprendé los conceptos básicos de HTML, el lenguaje de marcado que define la estructura de las páginas web.",
    content: `HTML es el punto de partida para cualquier desarrollador web. Es el lenguaje que define la estructura de las páginas y permite crear contenido bien organizado.

    En esta guía, cubriremos:
    - La estructura básica de un documento HTML
    - Elementos y etiquetas principales
    - Cómo crear enlaces e insertar imágenes
    - Consejos para escribir HTML semántico y accesible

    ¡Comencemos a construir una base sólida en HTML!`,
    coverImage:
      "https://images.unsplash.com/photo-1517134062979-e1234be8a085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Carlos López",
      avatar:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    tags: ["HTML", "Web Basics", "Frontend"],
    createdAt: "2024-02-10T11:00:00Z",
    updatedAt: "2024-02-10T11:00:00Z",
    category: "HTML",
  },
  {
    id: "4",
    title: "Estilizando con CSS: Guía Completa",
    slug: "estilizando-css-guia-completa",
    excerpt:
      "Conocé cómo usar CSS para transformar el aspecto de tus páginas web, desde el diseño básico hasta estilos avanzados.",
    content: `CSS es lo que le da estilo y vida a las páginas web. Desde colores y fuentes hasta diseños complejos, CSS permite personalizar cada aspecto visual.

    En esta guía, vamos a explorar:
    - Sintaxis y selectores básicos de CSS
    - Diseños con Flexbox y Grid
    - Animaciones y transiciones
    - Buenas prácticas y organización de CSS

    ¡Hacé que tus páginas cobren vida con CSS!`,
    coverImage:
      "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "María Fernández",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    tags: ["CSS", "Estilizado", "Frontend"],
    createdAt: "2024-02-18T14:45:00Z",
    updatedAt: "2024-02-18T14:45:00Z",
    category: "CSS",
  },
  {
    id: "5",
    title: "Introducción a JavaScript: Programación para la Web",
    slug: "introduccion-javascript-web",
    excerpt:
      "Conocé los fundamentos de JavaScript, el lenguaje que hace que tus páginas web sean interactivas y dinámicas.",
    content: `JavaScript es el lenguaje de programación que permite agregar interactividad a las páginas web. Es fundamental para cualquier desarrollador web.

    En este artículo, vamos a aprender:
    - Conceptos básicos de JavaScript
    - Variables, funciones y estructuras de control
    - Manipulación del DOM
    - Buenas prácticas y consejos para principiantes

    ¡Empezá a crear experiencias web interactivas con JavaScript!`,
    coverImage:
      "https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: {
      name: "Pedro Sánchez",
      avatar:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    tags: ["JavaScript", "Programación", "Frontend"],
    createdAt: "2024-03-01T09:20:00Z",
    updatedAt: "2024-03-01T09:20:00Z",
    category: "Java Script",
  },
  {
    id: "6",
    title: "HTML Semántico: Mejores Prácticas para Principiantes",
    slug: "html-semantico-mejores-practicas",
    excerpt:
      "Descubrí cómo usar etiquetas HTML semánticas para mejorar la accesibilidad y SEO de tus páginas web.",
    content: `Usar HTML semántico es clave para crear páginas accesibles y optimizadas para motores de búsqueda. Ayuda a los navegadores y tecnologías de asistencia a entender la estructura de tu contenido.

    En este artículo, exploraremos:
    - La importancia del HTML semántico
    - Cuándo usar etiquetas como <header>, <footer>, <article>, y <section>
    - Cómo mejorar la accesibilidad y el SEO
    - Ejemplos de implementación en proyectos reales

    ¡Descubrí cómo una buena estructura mejora la experiencia de usuario!`,
    coverImage:
      "https://images.unsplash.com/photo-1565377674740-8263d1533d4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    author: {
      name: "Lucía Martínez",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    tags: ["HTML", "Accesibilidad", "SEO"],
    createdAt: "2024-04-05T10:30:00Z",
    updatedAt: "2024-04-05T10:30:00Z",
    category: "HTML",
  },
  {
    id: "7",
    title: "JavaScript Asíncrono: Callbacks, Promesas y Async/Await",
    slug: "javascript-asincrono-callbacks-promesas-async-await",
    excerpt:
      "Aprendé a manejar operaciones asíncronas en JavaScript con callbacks, promesas y async/await.",
    content: `JavaScript asíncrono es esencial para manejar operaciones como solicitudes a API o tareas que toman tiempo en completarse. Te permite ejecutar código sin bloquear el flujo principal.

    En esta guía, exploraremos:
    - Cómo funcionan los callbacks y sus limitaciones
    - Promesas: qué son y cómo usarlas
    - Async/Await para simplificar el código asíncrono
    - Ejemplos de uso en aplicaciones web

    ¡Mejorá tus habilidades en JavaScript con este enfoque en la programación asíncrona!`,
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    author: {
      name: "José Ramírez",
      avatar:
        "https://images.unsplash.com/photo-1502767089025-ed75a1a106e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    tags: ["JavaScript", "Asincronía", "Promesas"],
    createdAt: "2024-04-10T15:00:00Z",
    updatedAt: "2024-04-10T15:00:00Z",
    category: "JavaScript",
  },
];
