import React from "react";

// Components
import CategoryButton from "./CategoryButton";
import { icons } from "lucide-react";

const Categories = [
  {
    label: "All",
    icon: "",
  },
  {
    label: "Tech News",
    icon: "",
  },
  {
    label: "Tutorials",
    icon: "",
  },
  {
    label: "Best Practices",
    icon: "",
  },
  {
    label: "Architecture",
    icon: "",
  },
];

const CategoryFilter = () => {
  return (
    <div className="flex items-center gap-2">
      {Categories.map((category, index) => (
        <CategoryButton key={index} label={category.label} />
      ))}
    </div>
  );
};

export default CategoryFilter;
