import ShoppingCartList from "./ShoppingCartList";

export default async function CartPage() {
  const response = await fetch(
    "process.env.NEXT_PUBLIC_SITE_URL /api/users/1/cart",
    {
      cache: "no-cache",
    }
  );
  const cartProducts = await response.json();

  return <ShoppingCartList initialCartProducts={cartProducts} />;
}
