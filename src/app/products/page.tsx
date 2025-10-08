import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
