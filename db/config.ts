import { column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config

const Product = defineTable({
  columns: {
    productName: column.text(),
    title: column.text(),
    price: column.number(),
    category: column.text(),
    details: column.json(),
    created_at: column.number(),
    isAvailable: column.boolean(),
    status: column.text(),
    metadata: column.json(),
  },
});
export default defineDb({
  tables: { Product },
});

// {
//   "productName": "Product 1",
//   "price": 484.44,
//   "category": "Food",
//   "details": {
//       "description": "This is a sample description for product 1.",
//       "weight": "",
//       "dimensions": {
//           "width": "N/A",
//           "height": 7,
//           "depth": 3
//       }
//   },
//   "created_at": 1735162071,
//   "isAvailable": false,
//   "status": "available",
//   "metadata": {
//       "id": "d4779ca0-8f13-4c25-ab07-9148f9bb8ce3",
//       "tags": []
//   }
// }
