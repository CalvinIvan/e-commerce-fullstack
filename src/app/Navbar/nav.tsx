import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { redirect } from "next/navigation";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default function Navbar() {
  return (
    <div className="bg-sky-200">
      <div className="navbar m-auto max-w-7xl flex-col sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-lg normal-case">
            <Image src={Logo} alt="Logo" width={40} height={40} />
            Kickz!
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="rounded-full border border-sky-400 bg-transparent p-3 text-2xl transition hover:scale-105 hover:cursor-pointer">
            <AiOutlineShoppingCart />
          </div>
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
