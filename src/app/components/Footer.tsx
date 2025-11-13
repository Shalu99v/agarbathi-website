import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-amber-50  overflow-hidden" data-aos="fade-up">
      {/* 🌿 Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url('/ine.jpeg')", // replace with your image path
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b1a00]/80 via-[#4e2602]/80 to-[#2b1500]/90"></div>

      {/* 🌸 Footer Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold drop-shadow-md">ThreeD Agarbathis</h2>
          <p className="text-sm text-amber-200 mt-1">
            Spreading fragrance & peace since 1999 🌸
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-5">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-green-500 transition transform hover:scale-110 shadow-md"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href="#"
            className="p-3 bg-white/10 rounded-full hover:bg-pink-500 transition transform hover:scale-110 shadow-md"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="p-3 bg-white/10 rounded-full hover:bg-blue-500 transition transform hover:scale-110 shadow-md"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="p-3 bg-white/10 rounded-full hover:bg-sky-500 transition transform hover:scale-110 shadow-md"
          >
            <FaTwitter size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative text-center text-white text-[10px] border-t border-[#391e06] py-2 backdrop-blur-sm">
        © {new Date().getFullYear()} <span className="font-semibold">ThreeD Agarbathis</span>. All rights reserved.
      </div>
    </footer>
  );
}
