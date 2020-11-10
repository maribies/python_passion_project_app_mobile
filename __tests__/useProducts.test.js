import { act } from "react-test-renderer";
import { renderHook } from "@testing-library/react-hooks";
import { useProducts } from "../Hooks/useProducts";
import products from "../Fixtures/products";

global.fetch = jest.fn((resolver) => {
  if (resolver == "fail") {
    return Promise.resolve({
      json: () => Promise.reject(new Error("fail")),
    });
  }

  return Promise.resolve({
    json: () => Promise.resolve(resolver),
  });
});

beforeEach(() => {
  fetch.mockClear();
});

describe("useProductsHook", () => {
  it("returns products", async () => {
    const { result } = renderHook(() => useProducts(products));

    expect(fetch).toHaveBeenCalledTimes(1);
    await act(() => fetch());

    expect(result.current.status).toEqual("fetched");
    expect(result.current.products).toEqual(products.products);
  });

  it("returns an error", async () => {
    const { result } = renderHook(() => useProducts("fail"));

    expect(fetch).toHaveBeenCalledTimes(1);
    await act(() => fetch());

    expect(result.current.status).toEqual("error");
    expect(result.current.error).toBeDefined();
  });
});
