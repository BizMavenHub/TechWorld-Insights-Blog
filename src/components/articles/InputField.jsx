import React from "react";

import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";

const InputField = () => {
  return (
    <div className="relative w-full md:w-[300px]">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search articles..." className="pl-8" />
    </div>
  );
};

export default InputField;
