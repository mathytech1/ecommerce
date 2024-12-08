import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-col md:flex-row justify-around w-full h-auto">
      {products.map((product) => (
        <Link
          key={product.id}
          href={"/products/" + product.id}
          className="bg-slate-100 w-full md:w-1/4 h-[250px] p-4 rounded-lg shadow-md mb-4 md:mb-0 md:mr-8 flex flex-col justify-between border-2"
        >
          <Image
            src={"/" + product.imageUrl}
            alt={product.name}
            className="rounded-lg w-full h-[170px] object-contain bg-slate-300"
            width={170}
            height={170}
          />
          <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-lg text-gray-600 mb-6">${product.price}</p>
        </Link>
      ))}
    </div>
  );
}
