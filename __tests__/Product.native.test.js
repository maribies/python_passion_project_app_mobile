import React from "react";
import { create } from "react-test-renderer";
import { ThemeProvider } from "emotion-theming";

import { Product } from "../Components/Product.native";
import { theme } from "../theme";

import products from "../Fixtures/products.json";

const product = products[0];

test("renders correctly with no data", () => {
  const tree = create(
    <ThemeProvider theme={theme}>
      <Product />
    </ThemeProvider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({ Text: "Oops! No Data!" });
});

test("renders correctly with undefined data", () => {
  const tree = create(
    <ThemeProvider theme={theme}>
      <Product product={undefined} />
    </ThemeProvider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({ Text: "Oops! No Data!" });
});

test("renders correctly with data", () => {
  const tree = create(
    <ThemeProvider theme={theme}>
      <Product product={product} />
    </ThemeProvider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({ Text: "Chanel" });
});
