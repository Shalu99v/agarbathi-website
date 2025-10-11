interface ProductProps {
  product: {
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
  };
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 p-4 border border-gray-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold text-amber-700 mb-1">
        {product.name}
      </h2>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      <p className="text-sm font-medium text-gray-800">
        Category: <span className="text-amber-600">{product.category}</span>
      </p>
      <p className="text-lg font-bold text-amber-900 mt-2">
        ₹{product.price}
      </p>
    </div>
  );
}
