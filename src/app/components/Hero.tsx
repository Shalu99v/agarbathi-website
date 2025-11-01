"use client";
import { FaWhatsapp } from "react-icons/fa6";

export default function Hero() {
  const whatsappNumber = "919876543210"; // change to real number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-center text-white bannerBg"
      style={{ backgroundImage: "url('/agarbathi_banner.png')" }}
    >
      {/* Overlay (dim background) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          3D Agarbathis
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-6 text-gray-100 drop-shadow-md">
          Handcrafted incense sticks with divine fragrances — bringing peace,
          positivity, and purity to your home.
        </p>

        <a
          href={`https://wa.me/919876543210`} // replace with your actual number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#1a0404] font-semibold text-white px-8 py-3 rounded-full shadow-lg border border-black hover:bg-green-700 transition duration-300"
        >
          <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
          Chat on WhatsApp
        </a>
      </div>

      {/*  Floating incense packet images (Left + Right layout) */}
      {/* Left-side single image */}
      <div className="absolute top-30 bottom-10 left-10 z-20">
        <div className="w-40 h-40 rounded-full overflow-hidden border-1 border-white shadow-lg animate-float1">
          <img
            src="/circle1.jpeg"
            alt="Agarbathi packet 1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right-side two images */}
      <div className="absolute bottom-35 right-35 flex flex-col gap-8 z-20">
        <div
          className={`w-32 h-32 rounded-full overflow-hidden border-1 border-white shadow-lg animate-float3
             
            `}
        >
          <img
            src="/circle3.png"
            alt={`Agarbathi packet3`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute top-[30%] bottom-10 right-10 flex flex-col gap-8 z-20">
        <div
          className={`w-32 h-32 rounded-full overflow-hidden border-1 border-white shadow-lg animate-float3
             
            `}
        >
          <img
            src="/circle2.jpeg"
            alt={`Agarbathi packet2`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ✨ Floating Animations */}
      <style>{`
        @keyframes float1 {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes float2 {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes float3 {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-float1 {
          animation: float1 3s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 4s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
