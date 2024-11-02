import { Post } from "@/types/blog";

export const posts: Post[] = [
  {
    id: "1",
    title: "Empezando con Next.js y TypeScript",
    slug: "empezando-nextjs-typescript",
    excerpt: "Aprendé a construir aplicaciones web modernas con Next.js y TypeScript. Esta guía completa cubre todo lo que necesitás saber.",
    content: `Next.js es un poderoso framework de React que facilita la creación de aplicaciones web. Combinado con TypeScript, obtenés seguridad de tipos y una experiencia de desarrollo increíble.

    En esta guía, vamos a cubrir:
    - Cómo configurar un proyecto Next.js con TypeScript
    - Entender el enrutamiento basado en archivos
    - Trabajar con componentes y páginas
    - Manejo de estado y obtención de datos
    - Cómo desplegar tu aplicación

    ¡Vamos a sumergirnos y empezar a construir!`,
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    author: {
      name: "Juan Pérez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    tags: ["Next.js", "TypeScript", "React"],
    createdAt: "2024-03-20T10:00:00Z",
    updatedAt: "2024-03-20T10:00:00Z",
    category: ""
  },
  {
    id: "2",
    title: "Construyendo UIs Hermosas con Tailwind CSS",
    slug: "construyendo-uis-hermosas-tailwind-css",
    excerpt: "Descubrí cómo crear interfaces de usuario impresionantes usando Tailwind CSS. Desde estilos básicos hasta componentes avanzados.",
    content: `Tailwind CSS ha revolucionado la forma en que estilamos aplicaciones web. Su enfoque basado en utilidades permite un desarrollo rápido sin sacrificar la personalización.

    En este tutorial, vamos a explorar:
    - Cómo configurar Tailwind CSS en tu proyecto
    - Entender las clases de utilidad
    - Crear diseños responsivos
    - Construir componentes personalizados
    - Optimización para producción

    ¡Prepárate para transformar tu flujo de diseño!`,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    author: {
      name: "Ana Gómez",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    tags: ["Tailwind CSS", "Diseño de UI", "CSS"],
    createdAt: "2024-03-19T15:30:00Z",
    updatedAt: "2024-03-19T15:30:00Z",
    category: ""
  },
];
