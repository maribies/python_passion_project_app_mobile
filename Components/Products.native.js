import React from "react";
import styled from "@emotion/native";
import { H3 } from "../Components/Text.native";
import { Product } from "../Components/Product.native";

// TODO: Probably better as flatlist, or section list.
const ProductsContainer = styled.ScrollView`
  margin-bottom: ${(props) => props.theme.marginBottom};
`;

export const Products = ({ products = null }) => {
  // TODO: Create a generic error component to return with custom message.
  if (!products) {
    return <H3>Something went wrong. No products are found yet!</H3>;
  }

  const productsData = products.products;

  return (
    <ProductsContainer showsVerticalScrollIndicator={false}>
      {productsData.map((product) => {
        return <Product product={product} key={product.sku} />;
      })}
    </ProductsContainer>
  );
};
