export default function productReducer(
  prevState = {
    products: [],
    isLoading: false
  },
  action
) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...prevState,
        isLoading: true
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...prevState,
        isLoading: false,
        products: action.products
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        ...prevState,
        isLoading: false,
        error: action.error
      };
    case "SELL":
      let { products } = prevState;
      let index = products.findIndex(p => p.id === action.id);
      let productToUpdate = { ...products[index] };
      productToUpdate.stock--;
      products.splice(index, 1);
      products.splice(index, 0, productToUpdate);
      return {
        products: [...products]
      };
    default:
      return prevState;
  }
}
