import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducer/productReducer";
const dtl =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(
  productReducer,
  compose(applyMiddleware(thunk), dtl)
);
