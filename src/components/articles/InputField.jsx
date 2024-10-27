import React from "react";

import Form from "next/form";

import { Search } from "lucide-react";

const InputField = () => {
  return (
    <Form action="/articles">
      <div className="relative w-full md:w-[300px]">
        <Search className="absolute right-4 top-3.5 h-4 w-4 text-muted-foreground" />
        <input
          className="search-input py-2 px-3 w-full border-2 rounded-lg"
          type="text"
          name="query"
          placeholder="Search..."
        />
      </div>
    </Form>
  );
};

export default InputField;
