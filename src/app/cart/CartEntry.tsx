"use client";

import { CartItemWithProducts } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";

interface CartEntryProps {
  cartItem: CartItemWithProducts;
}

export default function CartEntry({
  cartItem: { product, quantity },
}: CartEntryProps) {
  return (
    <div className="card mt-2 bg-slate-50/40 shadow-md transition hover:scale-[1.02] hover:shadow-2xl">
      <div className="card-body flex flex-row items-center">
        <Link href={"/products/" + product.id}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={150}
            height={150}
            className="rounded-xl"
          />
        </Link>

        <div className="flex flex-col">
          <Link href={"/products/" + product.id}>
            <span className="text-xl font-bold">{product.name}</span>
          </Link>
          <span className="text-xl font-bold">
            {formatPrice(product.price)}
          </span>
          <span className="text-xl font-bold">Quantity: {quantity}</span>
        </div>
      </div>
    </div>
  );
}
