import React from "react";
import { create } from "react-test-renderer";
import { Product } from "../Components/Product.native";
import products from "../Fixtures/products.json";

const product = products[0];

test("renders correctly with no data", () => {
  const tree = create(<Product />).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({ Text: "Oops! No Data!" });
});

test("renders correctly with undefined data", () => {
  const tree = create(<Product product={undefined} />).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({ Text: "Oops! No Data!" });
});

test("renders correctly with data", () => {
  const tree = create(<Product product={product} />).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({ Text: "Chanel" });
});
