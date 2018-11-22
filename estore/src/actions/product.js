export function getProductsAction() {
  return { type: "GET_PRODUCTS" };
}

export function getProductsSuccessAction(products) {
  return { type: "GET_PRODUCTS_SUCCESS", products };
}

export function getProductsFailureAction(error) {
  return { type: "GET_PRODUCTS_FAILURE", error };
}
export function getSaleAction(id) {
  return { type: "SELL", id };
}
