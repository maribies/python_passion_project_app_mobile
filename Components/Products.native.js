import React, { useState, useEffect } from "react";
import styled from "@emotion/native";
import { H3 } from "../Components/Text.native";
import { Product } from "../Components/Product.native";

const ProductsContainer = styled.FlatList`
  margin-bottom: ${(props) => props.theme.margin};
`;

export const renderItem = ({ item }) => {
  return <Product product={item} />;
};

export const Products = () => {
  const [allProducts, setScrollingProducts] = useState([]);
  const [error, setError] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = (page) => {
    const url = `https://findandseek.herokuapp.com/api/v1/products/?page=${page}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const productsData = response.products;

        setScrollingProducts(allProducts.concat(productsData));
        setNextPage(response.next);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, []);

  useEffect(() => {
    if (nextPage) {
      fetchProducts(nextPage);
    }
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(nextPage);
  };

  if (error) {
    console.log(error);

    return <H3>Something went wrong. No products are found yet!</H3>;
  }

  return (
    <ProductsContainer
      showsVerticalScrollIndicator={false}
      data={allProducts}
      renderItem={renderItem}
      onEndReached={handleLoadMore}
    />
  );
};
