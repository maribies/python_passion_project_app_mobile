import React from "react";
import { create, act } from "react-test-renderer";
import App from "../App";
import { Layout } from "../Components/Layout.native";

jest.mock("../Components/Layout.native.js");

test("renders without crashing", () => {
  Layout.mockReturnValue("Layout");

  let root;
  act(() => {
    root = create(<App />);
  });

  expect(root.toJSON()).toMatchSnapshot();
});
