"use client";

import { useState } from "react";
import { products } from "../product-data";
import Link from "next/link";

export default function CartPage() {
  const [cartIds, setCartIds] = useState(["123", "345"]);
  const cartProducts = cartIds.map((id) => products.find((p) => p.id === id));

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
          </Link>
        ))}
      </div>
    </>
  );
}
