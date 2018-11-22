import { createStore, applyMiddleware } from "redux";
import productReducer from "./reducers/product";
import { productWatcher } from "./sagas/product";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(productReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(productWatcher);

export default store;
