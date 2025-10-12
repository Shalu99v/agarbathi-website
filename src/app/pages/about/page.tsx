"use client";

import { Leaf, Flame, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div id='about' className="min-h-screen bg-gradient-to-b from-[#FFF8E7] via-[#FDF3D0] to-[#FBE7A1] px-6 py-12 text-gray-800">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-[#7B3F00] drop-shadow-sm">
          About Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
          Rooted in tradition, inspired by nature — we create{" "}
          <span className="font-semibold">handcrafted agarbathis</span> that bring
          peace, fragrance, and positive energy to every home.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white/70 backdrop-blur-md border border-yellow-100 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
          <div className="flex justify-center mb-5">
            <Leaf className="w-14 h-14 text-green-600 animate-bounce" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-[#4B2E05]">
            Natural Ingredients
          </h2>
          <p className="text-gray-700">
            We use pure sandalwood, flowers, and essential oils — ensuring each
            stick spreads a soothing natural aroma, free from chemicals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/70 backdrop-blur-md border border-yellow-100 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
          <div className="flex justify-center mb-5">
            <Flame className="w-14 h-14 text-orange-500 animate-pulse" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-[#4B2E05]">
            Traditional Craft
          </h2>
          <p className="text-gray-700">
            Our agarbathis are hand-rolled by skilled local artisans, keeping
            ancient craftsmanship alive through generations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/70 backdrop-blur-md border border-yellow-100 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
          <div className="flex justify-center mb-5">
            <Sparkles className="w-14 h-14 text-yellow-500 animate-spin-slow" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-[#4B2E05]">
            Spreading Positivity
          </h2>
          <p className="text-gray-700">
            Each fragrance uplifts moods, creates calmness, and fills your
            surroundings with spiritual energy.
          </p>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center mt-16 text-sm text-gray-600">
        <p>
          Crafted with care • Inspired by devotion • Trusted by generations 🌸
        </p>
      </div>

      {/* Custom slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 7s linear infinite;
        }
      `}</style>
    </div>
  );
}
