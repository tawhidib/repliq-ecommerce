import { useEffect, useState } from "react";
import axios from "axios";
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

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data, status }) => {
      if (status === 200) {
        setProducts(data);
      }
    });
  }, []);

  return <></>;
}
