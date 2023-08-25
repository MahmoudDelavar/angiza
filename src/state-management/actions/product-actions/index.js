import { getAllProducts } from '../../../lib/requests';
import { productActions } from '../actionTypes';
//==================================================

//------------------featch Fucntion------------------
export const getAllproducts = async (dispatch) => {
  try {
    dispatch(getProductReq());
    const data = await getAllProducts();
    dispatch(getProductSuccess(data));
  } catch (error) {
    dispatch(getProductFailed(error));
  }
};

//--------------------actions-------------------------
export const getProductReq = () => {
  return {
    type: productActions.FETCH_PRODUCTS_REQ,
  };
};

export const getProductSuccess = (data) => {
  return {
    type: productActions.FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const getProductFailed = (err) => {
  return {
    type: productActions.FETCH_PRODUCTS_FAILED,
    payload: err,
  };
};
