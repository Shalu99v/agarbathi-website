"use client";

import { useState } from "react";
import { products } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";
import { Search } from "lucide-react";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: "✨" },
    { name: "Floral", icon: "🌸" },
    { name: "Spiritual", icon: "🕉️" },
    { name: "Relaxing", icon: "🌿" },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="products" className="p-6 bg-gradient-to-b from-amber-50 to-orange-100 ">
      <h1 className="text-3xl font-bold mb-8 text-center text-amber-800 drop-shadow-sm" data-aos="fade-up">
        🪔 Our Products
      </h1>

      {/* 🔍 Search + Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10" data-aos="fade-up" data-aos-delay="100">
        {/* Search Bar */}
        <div className="relative w-full sm:w-1/3">
          <input
            type="text"
            placeholder=" Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-amber-600 focus:ring-2 focus:ring-amber-700 text-gray-700 placeholder-gray-500 shadow-sm focus:outline-none bg-white"
          />
          <span className="absolute right-4 top-2.5 text-amber-700 text-lg"><Search/></span>
        </div>

        {/* Category Filter */}
        <div className="relative w-full sm:w-1/4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-amber-600 focus:ring-2 focus:ring-amber-700 text-gray-700 shadow-sm bg-white appearance-none"
          >
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.icon} {category.name}
              </option>
            ))}
          </select>
          <span className="absolute right-4 top-2.5 text-amber-700">▼</span>
        </div>
      </div>

      {/* 🧿 Product Cards */}
      {filteredProducts.length > 0 ? (
        <div className="mx-[5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={product.name} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-6">
          No products found for &quot;<span className="font-semibold">{search}</span>&quot;
        </p>
      )}
    </div>
  );
}
