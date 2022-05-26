import {
  GETALLPRODUCTFAILED,
  GETALLPRODUCTLOAD,
  GETALLPRODUCTSUCCESSED,
} from "../actionTypes/productConst";

const iniState = { products: [], load: false, error: null };

const productReducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case GETALLPRODUCTLOAD:
      return { ...state, load: true };
    case GETALLPRODUCTSUCCESSED:
      return { ...state, load: false, products: payload.allproducts };
    case GETALLPRODUCTFAILED:
      return { ...state, load: false, error: payload };
    default:
      return state;
  }
};
export default productReducer;
