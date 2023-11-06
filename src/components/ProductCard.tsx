import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import PriceTag from "./pricetag";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;
  return (
    <div className="my-5 w-[25rem]">
      <Link
        href={"/products/" + product.id}
        className="card w-full bg-base-100 transition hover:scale-[1.02] hover:shadow-2xl"
      >
        <figure>
          <Image
            src={product.imageUrl}
            alt=""
            width={800}
            height={400}
            className="h-48 object-cover"
          />{" "}
        </figure>
        <div className="card-body h-[20rem]">
          <h2 className="card-title">
            {product.name}
            {isNew && <div className="badge badge-primary">New!</div>}
          </h2>
          <p>{product.description}</p>

          <PriceTag price={product.price} />
        </div>
      </Link>
    </div>
  );
}
