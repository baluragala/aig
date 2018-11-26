import { put, takeLatest, takeEvery, throttle } from "redux-saga/effects";
import {
  getProductsSuccessAction,
  getProductsFailureAction
} from "../actions/product";

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

export function* productWatcher() {
  yield throttle(1500, "GET_PRODUCTS", getProductsFromApi);
}
