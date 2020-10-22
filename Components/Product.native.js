import React from "react";
import styled from "@emotion/native";
import { H1, MainText } from "../Components/Text.native";

// TODO: on click go to site_url.
const ProductContainer = styled.View`
  margin-bottom: ${(props) => props.theme.margin};
`;

// TODO: maybe this could be a horizontal scroll instead of a wrap?
const StockWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const StockContainer = styled.View`
  margin-right: 8px;
  align-items: center;
  flex-wrap: wrap;
  max-width: 64px;
  justify-content: flex-start;
`;

const ProductImage = styled.Image`
  height: 223px;
  margin-bottom: ${(props) => props.theme.margin};
`;

export const getStockDetails = (stock) => {
  return stock.map((data) => {
    const { color, quantity } = data;

    return (
      <StockContainer key={color}>
        <MainText style={{ marginBottom: 0 }}>{color}</MainText>
        <MainText style={{ justifyContent: "flex-end" }}>{quantity}</MainText>
      </StockContainer>
    );
  });
};

// TODO: add a carousel to swipe image and product details.
// TODO: also replace catch below with custom error component.
export const Product = ({ product = null }) => {
  if (!product) {
    return <H1>Oops! No Data!</H1>;
  }

  const { designer, name, product_price, images, stock } = product;

  return (
    <ProductContainer>
      <ProductImage source={{ uri: images[0] }} />

      <H1 style={{ fontSize: 20 }}>{designer}</H1>

      <MainText style={{ fontSize: 20 }}>{name}</MainText>

      <StockWrapper>{getStockDetails(stock)}</StockWrapper>

      <MainText>{product_price}</MainText>
    </ProductContainer>
  );
};
