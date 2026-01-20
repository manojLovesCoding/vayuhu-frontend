import React, { useEffect, useState } from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonails";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WorkspacePricing from "../components/WorkspacePricing";

// IMPORT THE PROMO COMPONENT
//import CoworkingPromo from "../components/CoworkingPromo";
import Amenities from "../components/Amenities";

const Home = () => {
  return (
    <>
      {/* ABOUT */}
      <section className="bg-white">
        <About />
      </section>

      {/* AMENITIES */}
      <section className="bg-gray-50">
        <Amenities />
      </section>

      {/* WORKSPACE PRICING */}
      <section className="bg-gradient-to-b from-orange-50 via-white to-orange-50">
        <WorkspacePricing />
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-900 text-white">
        <Testimonials />
      </section>

      {/* CONTACT */}
      <section className="bg-white">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
