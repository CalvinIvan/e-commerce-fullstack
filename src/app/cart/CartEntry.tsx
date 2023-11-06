"use client";

import { CartItemWithProducts } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";

interface CartEntryProps {
  cartItem: CartItemWithProducts;
}

export default function CartEntry({
  cartItem: { product, quantity },
}: CartEntryProps) {
  return (
    <div className="card mt-2 bg-slate-50/40 shadow-md transition hover:scale-[1.02] hover:shadow-2xl">
      <div className="card-body flex flex-row items-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={150}
          height={150}
          className="rounded-xl"
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold">{product.name}</span>

          <span className="text-xl font-bold">
            {formatPrice(product.price)}
          </span>
          <span className="text-xl font-bold">Quantity: {quantity}</span>
        </div>
      </div>
    </div>
  );
}
