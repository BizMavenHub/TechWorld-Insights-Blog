import React from "react";

import { Button } from "@/components/ui/button";

const CategoryButton = ({ label }) => {
  return <Button className="border-2 hover:bg-gray-200">{label}</Button>;
};

export default CategoryButton;
