"use client";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: any) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryFilterProps) {
  return (
    <section className="container mx-auto px-4 py-8 ">
      <h3 className="text-3xl text-end mb-20 pt-6 font-bold ">Categorías</h3>
      <div className="flex flex-col gap-4 items-end">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`px-4 py-2 rounded-xl w-auto ${
              selectedCategory === category
                ? "bg-primary text-card"
                : " text-zinc-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
