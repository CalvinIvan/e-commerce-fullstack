import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-100 transition-shadow hover:shadow-xl"
    >
      <div className="card-body">
        <h2 className="card-title">
          <Image src={product.imageUrl} alt="" width={50} height={50} />
        </h2>
      </div>
    </Link>
  );
}
