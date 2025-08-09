import { db, Product } from "astro:db";
import { PRODUCTS } from "../src/inner/constants";

// https://astro.build/db/seed
export default async function seed() {
  // await db.insert(Product).values(PRODUCTS);
}
