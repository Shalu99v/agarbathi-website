"use client";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/about/page";
import ContactPage from "./pages/contact/page";
import ProductsPage from "./pages/products/page";

export default function HomePage() {
  return (
    <main className="font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <AboutPage />
      <ProductsPage />
      <ContactPage />
      <Footer />
    </main>
  );
}
