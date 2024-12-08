import ProductsList from "../productsList";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_SITE_URL + "/api/products",
    {
      cache: "no-cache",
    }
  );
  const products = await response.json();

  const response2 = await fetch(
    process.env.NEXT_PUBLIC_SITE_URL + "/api/users/1/cart",
    {
      cache: "no-cache",
    }
  );
  const cartProducts = await response2.json();

  return (
    <>
      <div className="container flex flex-col mx-auto px-4 py-8">
        <h1 className="text-4xl text-gray-950 font-bold mb-6">Products</h1>
        <ProductsList products={products} initialCartProducts={cartProducts} />
      </div>
    </>
  );
}
