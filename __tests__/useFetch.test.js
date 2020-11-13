import { act } from "react-test-renderer";
import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../Hooks/useFetch";
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

describe("useFetchHook", () => {
  it("returns data", async () => {
    const { result } = renderHook(() => useFetch(products));

    expect(fetch).toHaveBeenCalledTimes(1);
    await act(() => fetch());

    expect(result.current.status).toEqual("fetched");
    expect(result.current.data.products).toEqual(products.products);
  });

  it("returns an error", async () => {
    const { result } = renderHook(() => useFetch("fail"));

    expect(fetch).toHaveBeenCalledTimes(1);
    await act(() => fetch());

    expect(result.current.error).toBeDefined();
  });
});
