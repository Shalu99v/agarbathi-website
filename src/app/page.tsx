"use client";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";


export default function HomePage() {
  return (
    <main className="font-sans scroll-smooth">
      <Navbar/>
      <Hero />
      <ProductCard/>
      {/* <About />
      <Products />
      <Contact />
      <Footer /> */}
    </main>
  );
}
