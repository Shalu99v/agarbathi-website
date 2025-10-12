import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Name */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-semibold">3D Agarbathis</h2>
          <p className="text-sm text-amber-200">
            Spreading fragrance & peace since 1999 🌸
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-5">
          <a href="#" className="hover:text-green-400 transition"><FaWhatsapp /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-sky-400 transition"><FaTwitter /></a>
        </div>
      </div>

      <div className="text-center text-amber-300 text-sm mt-6 border-t border-amber-700 pt-4">
        © {new Date().getFullYear()} 3D Agarbathis. All rights reserved.
      </div>
    </footer>
  );
}
