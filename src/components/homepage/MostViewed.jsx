import React from "react";

import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

// Components
import CategoryFilter from "./Category/CategoryFilter";
import CardArticle from "./postCards/CardArticle";

// Mock data
import { posts } from "@/utils/TestingPostData";

const MostViewed = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Trending Articles</h1>
        <Button className="text-sm hover:bg-gray-200">
          View All <ArrowRight />
        </Button>
      </div>
      <CategoryFilter />
      <div>
        <div className="grid grid-cols-3 gap-8">
          {posts.map((post) => (
            <CardArticle key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostViewed;
