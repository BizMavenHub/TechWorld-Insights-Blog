import React from "react";

// Components
import CategoryFilter from "./Category/CategoryFilter";

const LatestArticles = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold my-6">LatestArticles</h1>

      <CategoryFilter />

      {/* Post cards */}
    </div>
  );
};

export default LatestArticles;
