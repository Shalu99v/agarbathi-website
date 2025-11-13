"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1a0404] shadow-md text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 ">
        {/* Logo / Brand */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleScrollTo("home")}
        >
          <img src="/logo.png" alt="Logo" className="w-[80px]" />
        </div>

        {/* Menu */}
        <div className="space-x-6">
          {/* <span
            className="cursor-pointer hover:text-green-600"
            onClick={() => handleScrollTo("home")}
          >
            Home
          </span> */}
          <span
            className="cursor-pointer hover:text-green-600"
            onClick={() => handleScrollTo("about")}
          >
            About
          </span>
          <span
            className="cursor-pointer hover:text-green-600"
            onClick={() => handleScrollTo("products")}
          >
            Products
          </span>
          <span
            className="cursor-pointer hover:text-green-600"
            onClick={() => handleScrollTo("contact")}
          >
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
}
