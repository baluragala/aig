import {
  CHANGE_TITLE,
  CHANGE_CATEGORY,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS
} from "../actionTypes/product";

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

export function getTitleChange(title) {
  return { type: CHANGE_TITLE, title };
}

export function getCategoryChange(category) {
  return { type: CHANGE_CATEGORY, category };
}

export function addProductAction(product) {
  return { type: ADD_PRODUCT, product };
}

export function addProductSuccessAction(product) {
  return { type: ADD_PRODUCT_SUCCESS, product };
}

export function addProductFailureAction(error) {
  return { type: ADD_PRODUCT_FAILURE, error };
}

export function deleteProductAction(id) {
  return { type: DELETE_PRODUCT, id };
}

export function deleteProductSuccessAction() {
  return { type: DELETE_PRODUCT_SUCCESS };
}
