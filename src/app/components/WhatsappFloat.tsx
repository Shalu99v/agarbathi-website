"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function WhatsappFloatingButton() {
  const [showButton, setShowButton] = useState(false);

  const whatsappNumber = "919876543210"; // change to your number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        if (window.scrollY > heroBottom - 100) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 flex items-center gap-2 transition-all duration-500 z-50 ${
        showButton
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg  animate-bounce-slow"
        style={{ transition: "all 0.4s ease" }}
      >
        <div className=" rounded-full flex items-center justify-center w-15 h-15 ">
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      </a>

      <style jsx>{`
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-bounce-slow {
          animation: bounceSlow 2s infinite;
        }
      `}</style>
    </div>
  );
}
