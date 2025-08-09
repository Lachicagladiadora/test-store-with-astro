import "../styles/global.css";
import { useEffect, useState } from "react";
import { Header } from "./atomic/organisms/Header";
import type { Page, ProductData } from "./types";
import { Footer } from "./atomic/organisms/Footer";
import { Products } from "./atomic/organisms/Products";
// import axios from "axios";
// import AxiosMockAdapter from "axios-mock-adapter";
import { PRODUCTS } from "../inner/constants";
import { PAGE_OFFSET } from "./constants";

// const mock = new AxiosMockAdapter(axios);

// mock.onGet("/products", { params: { searchText: "" } }).reply(200, {
//   products: PRODUCTS,
// });

function App() {
  const [query, setQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<Page>({
    name: "books",
  });
  const [cart, setCart] = useState<ProductData[]>([]);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [page, setPage] = useState(1);

  const getProducts = async () => {
    const response = await fetch("http://localhost:4321/api/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status !== 200) {
      throw Error(response.statusText);
    }
    return response.json();
  };
  const getData = async () => {
    const data = await getProducts();
    const start = (page - 1) * PAGE_OFFSET;
    const end = page * PAGE_OFFSET;
    if (page === 1) {
      setProducts(data.slice(0, 10));
      return;
    }
    const pageProducts = data.slice(start - 1, end - 1);
    setProducts(pageProducts);
  };
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="w-full bg-zinc-200 flex flex-col p-2">
      <Header
        updateQuery={setQuery}
        query={query}
        cartList={cart}
        currentPage={currentPage}
        updatePage={setCurrentPage}
      />
      <Products list={products} updateCart={setCart} />
      <div className="flex gap-3 items-center justify-center bg-neutral-200 pb-4">
        <button
          className="px-4 py-2 text-black bg-yellow-500 rounded-xl hover:bg-yellow-400 disabled:opacity-50"
          disabled={page <= 1}
          onClick={() =>
            setPage((p) => {
              if (p <= 1) return p;
              return p - 1;
            })
          }
        >
          Back
        </button>
        <button className="px-4 py-2 text-black bg-yellow-500 rounded-xl hover:bg-yellow-400 disabled:opacity-50">
          {page}
        </button>
        <button
          className="px-4 py-2 text-black bg-yellow-500 rounded-xl hover:bg-yellow-400 disabled:opacity-50"
          disabled={page >= PRODUCTS.length / PAGE_OFFSET}
          onClick={() =>
            setPage((p) => {
              if (p >= PRODUCTS.length / PAGE_OFFSET) return p;
              return p + 1;
            })
          }
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
