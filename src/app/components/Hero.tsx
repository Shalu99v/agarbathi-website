"use client";
import { MessageCircle, ShoppingBag, Sparkles } from "lucide-react";
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
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center" data-aos="fade-up" data-aos-delay="100">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-[#ed8313] text-[#ed8313] animate-scale-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Handcrafted Collection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Divine Fragrances for
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-amber-400">
              Sacred Moments
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the ancient art of incense making with our premium ThreeD Agarbathis. 
            Each stick is carefully crafted to bring tranquility, positive energy, and divine essence to your space.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              className="bg-[#b3540f] items-center transition-all duration-300 hover:scale-105 inline-flex px-4 py-2 rounded-[25px] "
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Chat on WhatsApp
            </button>
          
            <button
              className=" inline-flex items-center px-4 py-2 rounded-[25px] border-2 border-[#b3540f] text-[#b3540f] hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Browse Collection
            </button>
          </div>

        {/* <a
          href={`https://wa.me/919876543210`} // replace with your actual number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#1a0404] font-semibold text-white px-8 py-3 rounded-full shadow-lg border border-black hover:bg-green-700 transition duration-300"
          data-aos="zoom-in"
          data-aos-delay="350"
        >
          <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
          Chat on WhatsApp
        </a> */}
      </div>

    {/* Floating Images Wrapper */}
<div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
  <div className="relative w-[380px] h-[380px]">

    {/* Top circle */}
    <div className="absolute top-0 right-2 w-36 h-36 rounded-full overflow-hidden border border-white shadow-xl animate-float1">
      <img src="/circle1.jpeg" className="w-full h-full object-cover" />
    </div>

    {/* Bottom circle */}
    <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full overflow-hidden border border-white shadow-xl animate-float2">
      <img src="/circle3.png" className="w-full h-full object-cover" />
    </div>

    {/* Middle circle */}
    <div className="absolute top-[45%] left-16 w-32 h-32 rounded-full overflow-hidden border border-white shadow-xl animate-float3">
      <img src="/circle2.jpeg" className="w-full h-full object-cover" />
    </div>

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
