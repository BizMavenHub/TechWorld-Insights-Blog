"use client";

import React from "react";
import Link from "next/link";

import { useUser, UserButton } from "@clerk/nextjs";

export default function NavbarComponent() {
  const { isSignedIn, user } = useUser();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and site name */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img
              src="techworld-logo.png"
              alt="icon image of techworld insights"
              className="w-14 h-14 "
            />
            <span className="ml-2 text-xl font-bold text-gray-900">
              TechWorld Insight
            </span>
          </Link>

          {/* Navigation links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/articles"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium"
            >
              Articles
            </Link>
            <Link
              href="/about-us"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* User account dropdown */}
          {isSignedIn ? (
            <div className="flex items-center">
              <div className="mr-3">
                <Link
                  href="/profile"
                  className="text-sm text-gray-900 hover:text-gray-700"
                >
                  {user.primaryEmailAddress.emailAddress}
                </Link>
              </div>
              <UserButton className="w-10 h-10 rounded-full" />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/sign-in"
                className="flex items-center text-sm text-gray-700 hover:text-gray-800 border-indigo-500 border-2 hover:bg-indigo-50 h-10 px-5 rounded-lg"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="flex items-center text-sm text-white bg-indigo-500 hover:bg-indigo-700 px-5 h-10 rounded-lg"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
