"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1a0404] shadow-md text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="#home" className="text-2xl font-bold">
          3D Agarbathis
        </Link>

        {/* Menu */}
        <div className="space-x-6">
          <Link href="#home" className="hover:text-green-600">
            Home
          </Link>
          <Link href="#about" className="hover:text-green-600">
            About
          </Link>
          <Link href="#products" className="hover:text-green-600">
            Products
          </Link>
          <Link href="#contact" className="hover:text-green-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
