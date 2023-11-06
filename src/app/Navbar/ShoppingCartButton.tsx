import { ShoppingCart } from "@/lib/db/cart";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  return (
    <div className="dropdown dropdown-end rounded-full border-2 border-sky-300 text-2xl transition hover:scale-105 hover:cursor-pointer">
      <label
        tabIndex={0}
        className="btn btn-circle border-none bg-transparent hover:bg-sky-300"
      >
        <div className="indicator">
          <span className="text-3xl">
            <AiOutlineShoppingCart />{" "}
          </span>
          <span className="text-md badge indicator-item badge-lg border-none bg-transparent pb-2 pl-4 font-bold ">
            {cart?.size || 0}
          </span>
        </div>
      </label>
    </div>
  );
}
