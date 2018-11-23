import { Map, List, fromJS } from "immutable";

export default function productReducer(
  prevState = Map({
    products: List(),
    isLoading: false
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
    default:
      return prevState;
  }
}
