"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface AddToCartButtonProps {
  productId: string;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <button className="btn btn-secondary" onClick={() => {}}>
        Add to cart{" "}
        <div className="text-2xl">
          <AiOutlineShoppingCart />
        </div>
      </button>
    </div>
  );
}
