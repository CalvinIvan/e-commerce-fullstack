"use client";
import { useTransition } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface AddToCartButtonProps {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}

export default function AddToCartButton({
  productId,
  incrementProductQuantity,
}: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="mt-4 flex items-center gap-2">
      <button
        className="btn btn-secondary"
        onClick={() => {
          setSuccess(false);
          startTransition(() => {
            incrementProductQuantity(productId).then(() => {
              setSuccess(true);
            });
          });
        }}
      >
        Add to cart{" "}
        <div className="text-2xl">
          <AiOutlineShoppingCart />
        </div>
      </button>
    </div>
  );
}
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
