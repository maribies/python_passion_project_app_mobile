import React from "react";
import { create } from "react-test-renderer";
import { ThemeProvider } from "emotion-theming";

import { Products } from "../Components/Products.native";
import { theme } from "../theme";

import products from "../Fixtures/products.json";

test("renders correctly with no data", () => {
  const tree = create(
    <ThemeProvider theme={theme}>
      <Products />
    </ThemeProvider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({
    Text: "Something went wrong. No products are found yet!",
  });
});

test("renders correctly with undefined data", () => {
  const tree = create(
    <ThemeProvider theme={theme}>
      <Products products={undefined} />
    </ThemeProvider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({
    Text: "Something went wrong. No products are found yet!",
  });
});

test("renders correctly with data", () => {
  const tree = create(
    <ThemeProvider theme={theme}>
      <Products products={products} />
    </ThemeProvider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({ Text: "Chanel" });
});
