import { put, takeLatest } from "redux-saga/effects";
import {
  getProductsSuccessAction,
  getProductsFailureAction
} from "../actions/product";

function* getProductsFromApi() {
  try {
    let products = yield fetch("http://localhost:4000/products").then(
      response => response.json()
    );
    yield put(getProductsSuccessAction(products));
  } catch (e) {
    yield put(getProductsFailureAction(e));
  }
}

export function* productWatcher() {
  yield takeLatest("GET_PRODUCTS", getProductsFromApi);
}
