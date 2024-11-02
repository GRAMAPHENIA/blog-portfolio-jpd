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
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
      "https://images.unsplash.com/photo-1563720220450-d46a16a49a93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
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
      "https://images.unsplash.com/photo-1517430816045-df4b7de82813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    author: {
      name: "Pedro Sánchez",
      avatar:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    tags: ["JavaScript", "Programación", "Frontend"],
    createdAt: "2024-03-01T09:20:00Z",
    updatedAt: "2024-03-01T09:20:00Z",
    category: "JavaScript",
  },
];
