import { useState, useEffect } from "react";

export const useProducts = (
  url = "https://findandseek.herokuapp.com/api/v1/products/"
) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("fetching");
  const [pages, setPages] = useState(null);

  useEffect(() => {
    const fetchProducts = async (url) => {
      setStatus("fetching");

      await fetch(url)
        .then((response) => response.json())
        .then((response) => {
          const productsData = response.products;
          const pagesData = {
            next: response.next,
            previous: response.previous,
            current: response.current,
            total: response.total,
          };

          setProducts(productsData);
          setPages(pagesData);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setStatus("fetched");
        });
    };

    fetchProducts(url);
  }, []);

  return { status, pages, products, error };
};
