"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "../product-data";

export default function ShoppingCartList({
  initialCartProducts,
}: {
  initialCartProducts: Product[];
}) {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

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

  return (
    <>
      <div className="container mx-auto flex flex-col px-4 py-6">
        <h1 className="text-slate-950 text-4xl font-bold mb-6">
          Shopping Cart
        </h1>
        {cartProducts.map((product) => (
          <Link
            key={product!.id}
            href={"/products/" + product!.id}
            className="flex flex-col shadow-md border-2 mb-4 p-4 rounded-lg"
          >
            <h2 className="text-slate-950 text-xl font-bold">
              {product!.name}
            </h2>
            <p className="text-slate-950 text-md">${product!.price}</p>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white rounded-lg shadow-md p-2 font-bold  hover:bg-blue-700 hover:transition ease-in-out duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  removeFromCart(product.id);
                }}
              >
                Remove from Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
