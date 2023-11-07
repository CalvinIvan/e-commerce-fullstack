import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";

export const metadata = {
  title: "Your Cart",
};
export default async function CartPage() {
  const cart = await getCart();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-semibold text-white/80">
        Items in Cart:
      </h1>
      <ul>
        {cart?.items.map((item) => (
          <CartEntry
            key={item.id}
            cartItem={item}
            setProductQuantity={setProductQuantity}
          />
        ))}
      </ul>
      {!cart?.items.length && (
        <p className="text-4xl font-bold text-white/75">Cart is empty!</p>
      )}
    </div>
  );
}
