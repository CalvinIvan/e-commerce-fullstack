import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";

export const metadata = {
  title: "Your Cart",
};
export default async function CartPage() {
  const cart = await getCart();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-semibold">Items in Cart:</h1>
      <ul>
        {cart?.items.map((item) => <CartEntry key={item.id} cartItem={item} />)}
      </ul>
    </div>
  );
}
