import localFont from "next/font/local";

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
  title: "Sign Up",
  description:
    "Discover the latest insights, tutorials, and tech news from our expert contributors.",
  keywords: ["tech", "world", "insights", "blog", "insights", "blogging"],
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="techworld-logo.png" type="png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
