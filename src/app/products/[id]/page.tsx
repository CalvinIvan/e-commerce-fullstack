import PriceTag from "@/components/pricetag";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCartButton from "./AddToCartButton";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <section className="min-h-screen">
      <div className="flex flex-col p-4 lg:flex-row lg:items-center">
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

          <PriceTag
            price={product.price}
            className="badge badge-secondary my-2"
          />
          <p>{product.description}</p>
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </section>
  );
}
