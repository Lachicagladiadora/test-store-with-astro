export type Page = {
  name: string;
};

type Status = "available" | "discontinued" | "out_of_stock" | "" | null;

export type ProductData = {
  productName?: string;
  title?: string;
  price?: string | number | null;
  cost?: string | null | number;
  category: string;
  details: {
    description: string;
    weight: string | null;
    dimensions: {
      width: number | string | null;
      height: number | string | null;
      depth: number | null;
    };
  };
  created_at: string | number;
  isAvailable: string | boolean | null;
  status: string | null;
  metadata: {
    id: string;
    tags: (string | null)[] | null;
  };
};
