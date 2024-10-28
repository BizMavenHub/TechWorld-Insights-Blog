import React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge, Clock, Heart } from "lucide-react";

const CardArticle = ({ post }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 px-2 text-white bg-indigo-600 rounded-md text-sm">
          {post.category}
        </span>
      </div>
      <CardHeader>
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
          <time dateTime={post.date}>{post.date}</time>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
        </div>
        <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-2 mt-2">
          {post.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex justify-between items-center">
          <Button variant="ghost" asChild>
            <Link href={`/blog/${post.slug}`}>Read More</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary"
          >
            <Heart className="h-4 w-4 mr-1" />
            <span className="text-sm">{post.likes}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardArticle;
