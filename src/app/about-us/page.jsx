import React from "react";

// Components
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import Hero from "@/components/about_us/Hero";
import OurMission from "@/components/about_us/OurMission";
import { OurValue } from "@/components/about_us/OurValue";

const page = () => {
  return (
    <>
      <NavbarComponent />
      <main className="m-auto w-[65vw] my-14">
        <Hero />
        <OurMission />
        <OurValue />
      </main>
      <FooterComponent />
    </>
  );
};

export default page;
