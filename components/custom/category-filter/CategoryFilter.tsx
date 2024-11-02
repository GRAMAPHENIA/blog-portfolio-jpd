import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="flex gap-4 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-3 py-1.5 rounded-sm font-medium ${
            selectedCategory === category
              ? "bg-card-foreground/10 text-white border"
              : "bg-card text-gray-400 border"
          }`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
