"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SignIn, useAuth } from "@clerk/nextjs";

// Components
import LoadingComponent from "@/components/LoadingComponent";

export default function page() {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingComponent />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md p-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <SignIn />
      </div>
    </div>
  );
}
