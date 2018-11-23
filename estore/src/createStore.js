import { createStore, applyMiddleware, combineReducers } from "redux";
import productReducer from "./reducers/product";
import { productWatcher } from "./sagas/product";
import createSagaMiddleware from "redux-saga";
import offerReducer from "./reducers/offer";

const rootReducer = combineReducers({
  productState: productReducer,
  offerState: offerReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(productWatcher);

export default store;
