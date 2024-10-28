import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function FooterComponent() {
  return (
    <footer className="border-t bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <img
                  src="./techworld-logo.png"
                  className="h-12 w-12"
                  alt="	icon image of techworld insights"
                />
                <span className="font-bold text-xl">TechWorld Insight</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your go-to source for the latest tech news, coding tutorials,
                and tech stack insights.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/tutorials"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Tech News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/frameworks"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Frameworks
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about-us"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} TechWorld Insight. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
