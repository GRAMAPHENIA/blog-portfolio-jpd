// src/utils/handleCategorySelect.ts
import { Dispatch, SetStateAction } from "react";

export const handleCategorySelect = (
  category: string,
  setSelectedCategory: Dispatch<SetStateAction<string>>
) => {
  setSelectedCategory(category);
};
