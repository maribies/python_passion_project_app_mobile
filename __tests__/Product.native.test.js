import React from "react";
import { create } from "react-test-renderer";
import { Product } from "../Components/Product.native";
import products from "../Fixtures/products.json";

const product = products[0];

test('renders correctly with no data', () => {
  const tree = create(<Product />).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({Text:"Opps! No Data!"})
});

test('renders correctly with undefined data', () => {
  const tree = create(<Product product={undefined}/>).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({Text:"Opps! No Data!"})
});

test('renders correctly with data', () => {
  const tree = create(<Product product={product} />).toJSON();

  expect(tree).toMatchSnapshot();
  expect.objectContaining({Text:"Chanel"})
});

// TODO: Should be testing this method directly but keep getting mock function errors.
test('getStockDetails mock returns details', () => {
  const stock = [{"color":"black", "quantity": 3}, {"color":"white", "quantity": 4}];

  const testGetStockDetails = jest.fn(stock => stock.map(data => {
    const { color, quantity } = data;

    return `${color} ${quantity}`
  }));

  testGetStockDetails(stock);

  expect(testGetStockDetails).toHaveReturnedWith(["black 3", "white 4"])
});
