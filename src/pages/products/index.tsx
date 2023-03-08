import { useEffect, useState } from "react";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function ProductsPage(): JSX.Element {
  const [products, setProducts] = useState<ProductType[]>([]);

  return <></>;
}
