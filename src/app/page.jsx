// Components
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";

// Sections
import MostViewed from "@/components/homepage/MostViewed";
import Hero from "@/components/homepage/Hero";
import LatestArticles from "@/components/homepage/LatestArticles";

export default function Home() {
  return (
    <>
      <header>
        <NavbarComponent />
        <Hero />
      </header>
      <main className="m-auto w-[65vw] my-12">
        <MostViewed />
      </main>
      <FooterComponent />
    </>
  );
}
