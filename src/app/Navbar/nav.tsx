import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const cart = await getCart();

  return (
    <div className="bg-transparent">
      <div className="navbar m-auto max-w-7xl flex-col sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-lg normal-case">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="scale-110 rounded-full bg-white p-[0.25rem]"
            />
            <span className="text-white/90">Apex Athletics</span>
          </Link>
        </div>
        <div className="flex-col gap-2 sm:flex-row">
          <ShoppingCartButton cart={cart} />

          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input input-bordered w-full min-w-[100px]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
