import type { Dispatch, SetStateAction } from "react";
import type { ProductData } from "../../types";
type ProductProps = {
  product: ProductData;
  updateCart: Dispatch<SetStateAction<ProductData[]>>;
};

export const Product = ({ updateCart, product }: ProductProps) => {
  return (
    <div className="p-4 rounded-xl bg-neutral-50 shadow-md flex flex-col gap-3.5">
      <img
        src="https://www.pixsector.com/cache/517d8be6/av5c8336583e291842624.png"
        alt=""
        className="h-48 w-full object-contain"
      />
      <div>
        <h1>{product.title ?? "Product"}</h1>
        <p className="line-clamp-1">{product.details.description}</p>
      </div>
      <button
        className="px-4 py-2 text-black bg-yellow-500 rounded-xl hover:bg-yellow-400 disabled:opacity-50"
        disabled={product.status === "available" ? false : true}
        onClick={() => updateCart((p) => [...p, product])}
      >
        {product.status === "available" ? "Add to cart" : "Out of stock"}
      </button>
    </div>
  );
};
