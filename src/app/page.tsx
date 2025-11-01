"use client";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhatsappFloatingButton from "./components/WhatsappFloat";
import AboutPage from "./pages/about/page";
import ContactPage from "./pages/contact/page";
import ProductsPage from "./pages/products/page";

export default function HomePage() {
  return (
    <main className="ffont-sans scroll-smooth relative">
      <Navbar />
      <Hero />
      <AboutPage />
      <ProductsPage />
      <ContactPage />
      <Footer />
      <WhatsappFloatingButton/>
    </main>
  );
}
