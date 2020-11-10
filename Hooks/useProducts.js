import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

export const useProducts = (
  url = "https://findandseek.herokuapp.com/api/v1/products/"
) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");

  const response = useFetch(url);

  useEffect(() => {
    if (response.error) {
      setError(response.error);
    }

    if (response.status == "fetched") {
      const productsData = response.data.products;

      setProducts(productsData);
    }

    setStatus(response.status);
  }, [response]);

  return { status, products, error };
};
