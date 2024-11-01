import localFont from "next/font/local";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

// Components
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "TechWorld Insights",
  description: "Welcome to TechWorld Insights. All rights reserved",
  keywords: ["tech", "world", "insights", "blog"],
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="techworld-logo.png" type="png" />
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
