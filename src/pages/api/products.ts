import type { APIRoute } from "astro";
import { PRODUCTS } from "../../inner/constants";
import type { ProductData } from "../../outer/types";

export const GET: APIRoute = async ({ request }) => {
  try {
    console.log(PRODUCTS.length);
    // const data = db.get(Product);
    const products: ProductData[] = PRODUCTS;
    return new Response(JSON.stringify(products));
  } catch (error) {
    console.error({ error });
    return new Response(
      JSON.stringify({
        message: `${error}`,
      }),
      { status: 500 }
    );
  }
};
