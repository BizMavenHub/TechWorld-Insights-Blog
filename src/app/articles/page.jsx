import React from "react";

// Components
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import CardArticle from "@/components/homepage/postCards/CardArticle";
import CategoryFilter from "@/components/homepage/Category/CategoryFilter";
import InputField from "@/components/articles/InputField";

// Mock Data
import { posts } from "@/utils/TestingPostData";

const page = () => {
  return (
    <>
      <NavbarComponent />
      <main className="m-auto w-[65vw] my-14 space-y-8">
        <header className="">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Articles</h1>
            <p>
              Discover the latest insights, tutorials, and tech news from our
              expert contributors.
            </p>
          </div>
        </header>
        <div className="flex justify-between items-center">
          <CategoryFilter />
          <InputField />
        </div>
        <div className="grid grid-cols-3 gap-8">
          {posts.map((post) => (
            <CardArticle key={post.id} post={post} />
          ))}
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default page;
