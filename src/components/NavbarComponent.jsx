import React from "react";
import { Shield, Search, User, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const isSignIn = false;

export default function NavbarComponent() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and site name */}
          <a href="/" className="flex-shrink-0 flex items-center">
            <img
              src="./techworld-logo.png"
              alt="icon image of techworld insights"
              className="w-14 h-14 "
            />
            <span className="ml-2 text-xl font-bold text-gray-900">
              TechWorld Insights
            </span>
          </a>

          {/* Navigation links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="#"
              className="text-gray-900 inline-flex items-center px-1 pt-1  text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium"
            >
              Articles
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* User account dropdown */}
          {isSignIn ? (
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center text-sm text-gray-700 hover:text-gray-800"
                  >
                    <User
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-1">{`{ Username }`}</span>
                    <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="flex items-center text-sm text-gray-700 hover:text-gray-800 border-indigo-500 border-2 hover:bg-indigo-50"
              >
                Login
              </Button>
              <Button
                variant="ghost"
                className="flex items-center text-sm text-white bg-indigo-500 hover:bg-indigo-700"
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
