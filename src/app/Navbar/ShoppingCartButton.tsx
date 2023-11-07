"use client";

import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  function closeDropdown() {
    const dropdown = document.activeElement as HTMLElement;
    if (dropdown) dropdown.blur();
  }
  return (
    <div className="dropdown dropdown-bottom mr-2 rounded-full text-2xl transition hover:cursor-pointer">
      <label
        tabIndex={0}
        className="btn btn-circle border-none bg-transparent hover:scale-105 hover:bg-white/20"
      >
        <div className="indicator">
          <span className="text-3xl text-slate-50/75">
            <AiOutlineShoppingCart />{" "}
          </span>
          <span className="text-md badge indicator-item badge-lg border-none bg-transparent font-bold text-black/50">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-30 mt-3 w-52 bg-base-100 shadow-lg"
      >
        <div className="card-body">
          <span className="text-md text-center font-medium transition hover:scale-[1.02]">
            {cart?.size || 0} Item(s) - {formatPrice(cart?.subtotal || 0)}
          </span>
          <div className="card-actions">
            <Link
              href="/cart"
              className="btn btn-primary btn-block"
              onClick={closeDropdown}
            >
              <span className="text-white">View Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
