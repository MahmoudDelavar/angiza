import { productActions } from '../../actions/actionTypes';
//=========================================

const initialState = {
  data: [],
  isLoading: true,
  error: '',
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case productActions.FETCH_PRODUCTS_REQ:
      return {
        state,
      };

    case productActions.FETCH_PRODUCTS_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        error: '',
      };
    case productActions.FETCH_PRODUCTS_FAILED:
      return {
        data: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
