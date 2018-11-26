import { Map, List, fromJS } from "immutable";
import {
  CHANGE_TITLE,
  CHANGE_CATEGORY,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  CHANGE_STOCK
} from "../actionTypes/product";

export default function productReducer(
  prevState = Map({
    products: List(),
    isLoading: false,
    title: "",
    category: "",
    product: null
  }),
  action
) {
  console.log(action.type);
  switch (action.type) {
    case "GET_PRODUCTS":
      return prevState.set("isLoading", true);
    case "GET_PRODUCTS_SUCCESS":
      //return prevState.set("isLoading", false).set("products", action.products);

      return prevState.withMutations(map => {
        map.set("isLoading", false);
        map.set("products", fromJS(action.products));
      });

    case "GET_PRODUCTS_FAILURE":
      return prevState.withMutations(map => {
        map.set("isLoading", false);
        map.set("error", action.error);
      });
    case "SELL":
      let products = prevState.get("products").toJS();
      let index = products.findIndex(p => p.id === action.id);
      let productToUpdate = { ...products[index] };
      productToUpdate.stock--;
      let updatedProducts = prevState
        .get("products")
        .set(index, Map(productToUpdate));
      console.log("updatedProducts", updatedProducts.toJS());
      return prevState.set("products", updatedProducts);
    case CHANGE_TITLE:
      return prevState.set("title", action.title);
    case CHANGE_CATEGORY:
      return prevState.set("category", action.category);
    case CHANGE_STOCK:
      return prevState.set("stock", action.stock);
    case ADD_PRODUCT:
      return prevState.set("isLoading", true);
    case ADD_PRODUCT_SUCCESS:
      return prevState.set("isLoading", false).set("product", action.product);
    case DELETE_PRODUCT:
      return prevState.set("isLoading", true);
    case DELETE_PRODUCT_SUCCESS:
      return prevState.set("isLoading", false);
    default:
      return prevState;
  }
}
