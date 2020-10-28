import { act } from "react-test-renderer";
import { renderHook } from "@testing-library/react-hooks";
import {
  useFilters,
  getSubfilters,
  getGroupFilters,
  getAllSubfilters,
} from "../Hooks/useFilters";

describe("useFilters Hook", () => {
  describe("helpers do what they are supposed to", () => {
    const testFilters = {
      test: ["info", "more info"],
      double: ["category", "another category"],
      better: ["range", "range plus", "range minus"],
    };

    it("returns the correct subfilters", () => {
      const filter = "better";
      const allFilters = testFilters;

      const result = getSubfilters(filter, allFilters);

      expect(result).toEqual(["range", "range plus", "range minus"]);
    });

    it("returns the correct keys as filters", () => {
      const filterKeys = getGroupFilters(testFilters);

      expect(filterKeys).toEqual(["test", "double", "better"]);
    });

    it("returns all of the subfilters in one array", () => {
      const result = getAllSubfilters(testFilters);

      expect(result).toEqual([
        "info",
        "more info",
        "category",
        "another category",
        "range",
        "range plus",
        "range minus",
      ]);
    });
  });

  it("the subfilters update", () => {
    const filters = { test: "value", double: "item" };
    const filter = "test";
    const groups = ["test", "double"];
    const groupsAndSubgroups = ["test", "double", "value"];

    const { result } = renderHook(() => useFilters(filters));

    expect(result.current.names).toEqual(groups);

    act(() => result.current.updateFilters(filter));

    expect(result.current.names).toEqual(groupsAndSubgroups);
  });

  it("clears the subfilters", () => {
    const filters = { test: "value", double: "item" };
    const filter = "test";
    const groups = ["test", "double"];

    const { result } = renderHook(() => useFilters(filters));

    act(() => result.current.updateFilters(filter));

    act(() => result.current.clearAllFilters());

    expect(result.current.names).toEqual(groups);
  });

  // TODO: Wish to have more than one active filter.
  it("keeps active filters in state", () => {
    const filters = { test: "value", double: "item" };
    const filter = "test";

    const { result } = renderHook(() => useFilters(filters));

    act(() => result.current.updateActiveFilters(filter));

    expect(result.current.activeFilters).toEqual(filter);
  });
});
