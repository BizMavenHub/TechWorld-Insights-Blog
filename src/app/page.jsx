// Sections
import MostViewed from "@/components/homepage/MostViewed";
import Hero from "@/components/homepage/Hero";

// Components
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";

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
