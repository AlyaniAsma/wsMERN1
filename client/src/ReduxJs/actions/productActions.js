import axios from "axios";
import {
  GETALLPRODUCTFAILED,
  GETALLPRODUCTLOAD,
  GETALLPRODUCTSUCCESSED,
} from "../actionTypes/productConst";

export const getallproduct = () => async (dispatch) => {
  dispatch({ type: GETALLPRODUCTLOAD });
  try {
    const response = await axios.get("/product");
    console.log(response);
    dispatch({ type: GETALLPRODUCTSUCCESSED, payload: response.data });
  } catch (error) {
    dispatch({ type: GETALLPRODUCTFAILED, payload: error });
  }
};
