// components/Navbar.tsx
"use client";

import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <nav className="bg-card/70 backdrop-blur-md shadow-md sticky top-5 z-20 rounded-xl ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blographenicos</h1>
        <ThemeToggle />
      </div>
    </nav>
  );
}
