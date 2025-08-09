import { type Dispatch, type SetStateAction } from "react";
import type { ProductData } from "../../types";
import { Product } from "../atoms/Product";

type ProductsProps = {
  list: ProductData[];
  updateCart: Dispatch<SetStateAction<ProductData[]>>;
};

export const Products = ({ updateCart, list }: ProductsProps) => {
  return (
    <div className="w-full max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-6 ">
      {list.map((c) => (
        <Product key={c.metadata.id} product={c} updateCart={updateCart} />
      ))}
    </div>
  );
};
