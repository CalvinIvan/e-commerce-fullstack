import PriceTag from "@/components/pricetag";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  if (!product) notFound();

  return (
    <div className="flex flex-col p-4 lg:flex-row">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={400}
        height={500}
        priority
        className="rounded-lg shadow-xl"
      />
      <div className="flex flex-col p-4">
        <h1 className="my-5 text-5xl font-bold"> {product.name}</h1>

        <PriceTag price={product.price} className="badge badge-secondary" />
        <p>{product.description}</p>
      </div>
    </div>
  );
}
