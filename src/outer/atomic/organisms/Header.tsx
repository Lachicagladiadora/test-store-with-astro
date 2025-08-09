import { CATEGORIES } from "../../constants";
import type { Page, ProductData } from "../../types";

type HeaderProps = {
  updateQuery: (p: string) => void;
  query: string;
  currentPage: Page;
  updatePage: (p: Page) => void;
  cartList: ProductData[];
};

export const Header = ({
  updateQuery,
  query,
  currentPage,
  cartList,
  updatePage,
}: HeaderProps) => {
  return (
    <div className="w-full p-2 flex flex-col gap-3">
      <div className="header-contain w-full max-w-[900px] h-1/2 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="brand flex items-center justify-start">StoreTest</div>
        <div className="categories w-full px-3 flex items-center justify-between">
          {CATEGORIES.map((c, i) => (
            <button
              key={i}
              onClick={() => updatePage(c)}
              className={`capitalize ${
                currentPage.name === c.name ? "font-bold" : "text-neutral-800"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="user-options flex items-center justify-end">
          <button className="relative">
            🛍️
            <div className="absolute size-5 -top-3 -right-3 rounded-full bg-yellow-400 text-black text-xs p-0.5">
              {cartList.length}
            </div>
          </button>
        </div>
      </div>
      <form className="w-full max-w-[900px] h-1/2 mx-auto flex gap-6 justify-center items-center ">
        <input
          type="text"
          placeholder="Toys"
          className="w-full px-4 py-2 bg-white border border-neutral-200 rounded-xl focus:border-neutral-400 outline-none"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
        />
        <button className="px-4 py-2 text-black bg-yellow-500 rounded-xl hover:bg-yellow-400">
          Search
        </button>
      </form>
    </div>
  );
};
