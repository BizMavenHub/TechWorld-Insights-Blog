import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Stay Ahead in Tech
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest tech news, coding tutorials, and insights into
            modern development stacks. Learn, grow, and build the future.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-indigo-600">
              <Link href="/tutorials">Start Learning</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/news">Read Tech News</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
