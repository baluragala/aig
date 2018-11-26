import { put, takeLatest, takeEvery, throttle, all } from "redux-saga/effects";
import {
  getProductsSuccessAction,
  getProductsFailureAction,
  addProductSuccessAction,
  addProductFailureAction,
  deleteProductSuccessAction
} from "../actions/product";
import { ADD_PRODUCT, DELETE_PRODUCT } from "../actionTypes/product";

function* getProductsFromApi() {
  try {
    let baseURL = yield fetch(`${window.location.origin}/config.json`).then(
      response => response.json()
    );
    console.log("baseURL", baseURL);
    let products = yield fetch(`${baseURL.endpoint}/products`).then(response =>
      response.json()
    );
    yield put(getProductsSuccessAction(products));
  } catch (e) {
    console.log(e);
    yield put(getProductsFailureAction(e));
  }
}

function* addProductToApi(action) {
  try {
    let baseURL = yield fetch(`${window.location.origin}/config.json`).then(
      response => response.json()
    );
    console.log("baseURL", baseURL);
    let product = yield fetch(`${baseURL.endpoint}/products`, {
      method: "POST",
      body: JSON.stringify(action.product),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
    yield put(addProductSuccessAction(product));
  } catch (e) {
    console.log(e);
    yield put(addProductFailureAction(e));
  }
}

function* deleteProductFromApi(action) {
  try {
    let baseURL = yield fetch(`${window.location.origin}/config.json`).then(
      response => response.json()
    );
    console.log("baseURL", baseURL);
    yield fetch(`${baseURL.endpoint}/products/${action.id}`, {
      method: "DELETE"
    }).then(response => response.json());
    yield put(deleteProductSuccessAction());
  } catch (e) {
    console.log(e);
    //yield put(addProductFailureAction(e));
  }
}

export function* productWatcher() {
  yield all([
    throttle(1500, "GET_PRODUCTS", getProductsFromApi),
    takeLatest(ADD_PRODUCT, addProductToApi),
    takeLatest(DELETE_PRODUCT, deleteProductFromApi)
  ]);
}
