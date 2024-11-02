
# 404 Blog

Este es el repositorio del blog "404", creado con tecnologías modernas para garantizar una experiencia de usuario rápida, escalable y personalizable. El blog está desarrollado con **Next.js**, **Tailwind CSS**, **shadcn**, **TypeScript**, **Zod**, y **Zustand**, para una estructura de código tipada, validación robusta y gestión de estado eficiente.

## Tecnologías Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework de React para SSR (renderizado en el lado del servidor) y SSG (generación de sitios estáticos).
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS de utilidad para estilos rápidos y consistentes.
- **[shadcn](https://shadcn.dev/)**: Componentes UI para una interfaz atractiva y funcional.
- **[TypeScript](https://www.typescriptlang.org/)**: Extensión de JavaScript tipada, que ayuda a reducir errores y mejorar la calidad del código.
- **[Zod](https://zod.dev/)**: Biblioteca de validación para una validación de datos segura y manejable.
- **[Zustand](https://zustand.pmnd.rs/)**: Biblioteca de gestión de estado ligera y eficiente.

## Características

- **Interfaz Personalizable**: Usa Tailwind y shadcn para lograr una interfaz visualmente agradable en modo oscuro y claro.
- **Gestión de Estado**: Estado global optimizado con Zustand para manejar el estado de la aplicación de forma eficiente.
- **Validación de Datos**: Zod garantiza que todos los datos de entrada sean correctos y seguros antes de procesarse.
- **Blog Modular**: Estructura de archivos modular, con componentes reutilizables y separación de lógica para mantener el código limpio y fácil de mantener.
- **Tipos Fuertes**: TypeScript asegura una experiencia de desarrollo más confiable con autocompletado y verificación de tipos.
  
## Estructura del Proyecto

```plaintext
404-blog/
├── components/
│   ├── custom/
│   └── ui/
├── (routes)/
│   ├── api/
│   └── index.tsx
├── types/
├── utils/
├── data/
├── store/
├── schemas/
└── README.md
```

## Configuración Inicial

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/404-blog.git
   cd 404-blog
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Configurar las variables de entorno**:

   Crea un archivo `.env.local` en la raíz del proyecto y agrega las variables de entorno necesarias.

4. **Iniciar el servidor de desarrollo**:

   ```bash
   npm run dev
   ```

   El blog estará disponible en `http://localhost:3000`.

## Scripts

- `npm run dev`: Inicia el entorno de desarrollo.
- `npm run build`: Genera la versión de producción del blog.
- `npm run start`: Inicia el servidor en modo de producción.
- `npm run lint`: Ejecuta el linter para mantener la calidad del código.

## Componentes Clave

- **PostCard**: Renderiza cada publicación en el blog con imagen, título y resumen.
- **CategoryFilter**: Permite filtrar publicaciones por categorías.
- **Dark/Light Mode**: Controla el tema de color del blog para una experiencia personalizada.

## Futuras Mejoras

- **Comentarios**: Agregar funcionalidad de comentarios para cada publicación.
- **Sistema de Autenticación**: Proteger el dashboard y permitir múltiples roles de usuario.
- **SEO Mejorado**: Añadir más optimizaciones para motores de búsqueda.
  
## Contribuciones

Las contribuciones son bienvenidas. Para contribuir, crea un fork de este repositorio y abre un pull request con tus mejoras.

