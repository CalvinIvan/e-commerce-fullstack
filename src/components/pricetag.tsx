import { formatPrice } from "@/lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className }: PriceTagProps) {
  return (
    <span
      className={`badge bg-gradient-to-r from-indigo-500 to-blue-500 p-3 font-semibold text-white ${className}`}
    >
      {formatPrice(price)}
    </span>
  );
}
