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

  return (
    <div className="component mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio eveniet
      distinctio odit deserunt error minima, voluptas atque iure in quis culpa,
      excepturi iusto illum corrupti quo. Repellendus unde in aspernatur!
    </div>
  );
}
