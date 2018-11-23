import productReducer from "./product";
import { Map, List, fromJS } from "immutable";

describe("Product Reducer", () => {
  it("it should create initial state", () => {
    const initialState = Map({
      products: List(),
      isLoading: false
    });
    const state = productReducer(undefined, { type: "INITIAL" });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it("it should create new state for GET_PRODUCTS_SUCCESS", () => {
    const testProducts = [
      { id: 1, title: "p1", price: 100, stock: 20 },
      { id: 2, title: "p2", price: 200, stock: 20 }
    ];

    const testState = {
      isLoading: false,
      products: testProducts
    };

    const state = productReducer(undefined, {
      type: "GET_PRODUCTS_SUCCESS",
      products: testProducts
    });
    expect(state.toJS()).toEqual(testState);
  });
});
