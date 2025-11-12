"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! 🌼 We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="p-8 bg-gradient-to-b from-amber-50 to-orange-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-amber-800 mb-10 drop-shadow-sm" data-aos="fade-up">
        📞 Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* 🕉️ Contact Info */}
        <div className="bg-white p-6 rounded-2xl shadow-md" data-aos="fade-right">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6">
            Have questions about our products or want to place a bulk order?  
            Reach out to us anytime — we’d love to connect with you!
          </p>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-700" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-amber-700" /> info@3dagarbathis.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-amber-700" /> Chengannur, Alappuzha, Kerala
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-600" />{" "}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* 🪷 Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Send a Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 border border-amber-400 rounded-md focus:ring-2 focus:ring-amber-600 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 border border-amber-400 rounded-md focus:ring-2 focus:ring-amber-600 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 border border-amber-400 rounded-md focus:ring-2 focus:ring-amber-600 outline-none h-28"
          />

          <button
            type="submit"
            className="w-full bg-amber-700 text-white font-semibold py-2 rounded-md hover:bg-amber-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
