"use client";

import { CartItemWithProducts } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

interface CartEntryProps {
  cartItem: CartItemWithProducts;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

export default function CartEntry({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();
  const quantityOptions: JSX.Element[] = [];
  for (let i = 0; i <= 10; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>,
    );
  }
  return (
    <div className="card mt-2 bg-slate-50/40 shadow-md transition hover:scale-[1.002] hover:shadow-2xl">
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
            <span className="text-xl font-bold transition hover:underline">
              {product.name}
            </span>
          </Link>

          <span>
            <span className="text-lg font-bold">Quantity: </span>
            <select
              className="select max-w-[80px] scale-[0.85] rounded-full text-lg"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
            >
              {quantityOptions}
            </select>
          </span>
          <span className="text-xl font-bold">
            {formatPrice(product.price * quantity)}
            {isPending && (
              <span className="loading loading-spinner loading-md ml-3 mt-2" />
            )}
          </span>
          <span
            className="mt-2 text-2xl hover:cursor-pointer"
            onClick={(e) => {
              const newQuantity = 0;
              startTransition(async () => {
                await setProductQuantity(product.id, newQuantity);
              });
            }}
          >
            <FaRegTrashAlt />
          </span>
        </div>
      </div>
    </div>
  );
}
