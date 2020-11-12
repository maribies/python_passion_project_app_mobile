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

export const Products = ({ products = null }) => {
  // TODO: Create a generic error component to return with custom message.
  if (!products || products.length === 0) {
    return <H3>Something went wrong. No products are found yet!</H3>;
  }

  const [data, setData] = useState(products.products);

  useEffect(() => {
    setData(products.products);
  }, []);

  return (
    <ProductsContainer
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.sku}
    />
  );
};
