"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";
import { useState } from "react";

export const dynamic = "force-dynamic";

export default function ProductsList({
  products,
  initialCartProducts,
}: {
  products: Product[];
  initialCartProducts: Product[];
}) {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  async function addToCart(productId: string) {
    const response = await fetch(
      process.env.NEXT_PUBLIC_SITE_URL + "/api/users/1/cart",
      {
        method: "POST",
        body: JSON.stringify({ productId }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // const updatedCartProducts = await response.json();
    // setCartProducts(updatedCartProducts);
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((product) => product.id !== productId)
    );
  }

  async function removeFromCart(productId: string) {
    const response = await fetch(
      process.env.NEXT_PUBLIC_SITE_URL + "/api/users/1/cart",
      {
        method: "DELETE",
        body: JSON.stringify({ productId }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // const updatedCartProducts = await response.json();
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((product) => product.id !== productId)
    );
  }

  function productIsInCart(productId: string) {
    return cartProducts.some((product) => product.id === productId);
  }

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-around w-full h-auto">
      {products.map((product) => (
        <Link
          key={product.id}
          href={"/products/" + product.id}
          className="bg-slate-100 w-full md:w-1/5 h-[300px] p-4 rounded-lg shadow-md mb-4 md:mb-8 md:mr-2 flex flex-col justify-between border-2"
        >
          <Image
            src={"/" + product.imageUrl}
            alt={product.name}
            className="rounded-lg w-full h-[170px] object-contain bg-slate-300"
            width={170}
            height={170}
          />
          <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-lg text-gray-600 mb-2">${product.price}</p>
          {productIsInCart(product.id) ? (
            <button
              className="bg-blue-500 text-white rounded-lg shadow-md p-1 text-xl  hover:bg-blue-700 hover:transition ease-in-out duration-300"
              onClick={(e) => {
                e.preventDefault();
                removeFromCart(product.id);
              }}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white rounded-lg shadow-md p-1 text-xl  hover:bg-blue-700 hover:transition ease-in-out duration-300"
              onClick={(e) => {
                e.preventDefault();
                addToCart(product.id);
              }}
            >
              Add to Cart
            </button>
          )}
        </Link>
      ))}
    </div>
  );
}
