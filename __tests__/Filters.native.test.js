import React from "react";
import { ThemeProvider } from "emotion-theming";
import { create } from "react-test-renderer";
import {
  Filters,
  createFilter,
  createFilters,
} from "../Components/Filters.native";

import filters from "../Fixtures/filters.json";

const theme = {
  margin: "20px",
  fontXLarge: "33px",
  fontLarge: "26px",
  fontMedium: "20px",
  fontDefaultSize: "16px",
  fontSmall: "12.5px",
  fontDefaultFamily: "Georgia",
  fontDefaultWeight: "normal",
  colors: {
    primary: "lavender",
  },
  inputs: {
    borderRadius: "8px",
    padding: "8px",
  },
};

describe("Filters", () => {
  it("does not render if there are no filters", () => {
    const tree = create(<Filters />).toJSON();

    expect(tree).toBeNull();
  });

  it("does not render if filters are undefined", () => {
    const tree = create(<Filters type={undefined} />).toJSON();

    expect(tree).toBeNull();
  });

  it("renders given filters", () => {
    const tree = create(
      <ThemeProvider theme={theme}>
        <Filters types={filters} />
      </ThemeProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("methods", () => {
    const testFilters = {
      test: ["info", "more info"],
      double: ["category", "another category"],
      better: ["range", "range plus", "range minus"],
    };
    const filters = { names: testFilters.test, activeFilters: [null] };

    it("creates a filter", () => {
      const filter = "test";

      const result = createFilter(filters, filter);

      expect(result).toHaveProperty("key", "Test");
      expect(result.props.onPress).toBeDefined();
    });

    it("creates filters for multiple names", () => {
      const result = createFilters(filters);

      expect(result).toHaveLength(2);
      expect(result[0]).toHaveProperty("key", "Info");
      expect(result[0].props.onPress).toBeDefined();
      expect(result[1]).toHaveProperty("key", "More info");
      expect(result[1].props.onPress).toBeDefined();
    });
  });
});
