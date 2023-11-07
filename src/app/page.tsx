import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div>
      <div className="hero rounded-xl bg-base-100/[0.2] transition duration-500 hover:bg-base-100/[0.35]">
        <div className="hero-content flex-col lg:flex-row">
          <Link
            href={"/products/" + products[0].id}
            className="transition hover:scale-[1.02]"
          >
            <Image
              src={products[0].imageUrl}
              alt={products[0].name}
              width={400}
              height={800}
              className="w-full max-w-sm rounded-lg shadow-xl"
              priority
            />
          </Link>
          <div>
            <h1 className="mb-5 text-3xl font-bold text-white">
              Featured Item!
            </h1>
            <Link href={"/products/" + products[0].id}>
              <h1 className="text-5xl font-bold text-white transition hover:scale-[1.01]">
                {products[0].name}
              </h1>
            </Link>
            <p className="w-[80%] py-6 font-semibold text-slate-50">
              {products[0].description}
            </p>
            <Link
              href={"/products/" + products[0].id}
              className="btn border-none bg-gradient-to-r from-indigo-500 to-blue-500 text-white transition hover:scale-105"
            >
              View Item!
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.slice(1).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
