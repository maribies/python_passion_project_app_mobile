import React from "react";
import { ThemeProvider } from "emotion-theming";
import { H1, H3 } from "./Components/Text";
import { Layout } from "./Components/Layout.native";
import { Products } from "./Components/Products.native";

import products from "./Fixtures/products";

const theme = {
  margin: "20px",
  xlarge: "33px",
  large: "26px",
  medium: "20px",
  default: "16px",
  small: "12.5px",
  family: "Georgia",
  weight: "normal",
  lineHeight: "21px",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <H1>Find and Seek</H1>
        <H3>FIND THE PERFECT PIECE FROM ANYWHERE ON THE INTERNET</H3>
        <H3>Search</H3>
        <H3>Filters</H3>
        <Products products={products} />
      </Layout>
    </ThemeProvider>
  );
}
