import React from "react";
import { create } from "react-test-renderer";
import { Products } from "../Components/Products.native";
import products from "../Fixtures/products.json";

jest.useFakeTimers();

test('renders correctly with no data', () => {
  const tree = create(<Products />).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({Text:"Something went wrong. No products are found yet!"})
});

test('renders correctly with undefined data', () => {
  const tree = create(<Products products={undefined}/>).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({Text:"Something went wrong. No products are found yet!"})
});

test('renders correctly with data', () => {
  const tree = create(<Products products={products} />).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({Text:"Chanel"});
});
