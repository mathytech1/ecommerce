import ProductsList from "../productsList";
import { products } from "../product-data";
export default function ProductsPage() {
  return (
    <>
      <div className="container flex flex-col mx-auto px-4 py-8">
        <h1 className="text-4xl text-gray-950 font-bold mb-6">Products</h1>
        <ProductsList products={products} />
      </div>
    </>
  );
}
