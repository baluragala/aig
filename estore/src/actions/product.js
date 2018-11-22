export function getProductsAction() {
  return { type: "GET_PRODUCTS" };
}

export function getSaleAction(id) {
  return { type: "SELL", id };
}
