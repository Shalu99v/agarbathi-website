interface ProductProps {
  product: {
    name: string;
    description: string;
  };
}

export default function ProductCard() {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold">name</h2>
      <p className="text-sm text-gray-600">description</p>
    </div>
  );
}
