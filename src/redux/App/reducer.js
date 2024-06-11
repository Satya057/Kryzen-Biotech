import * as types from "./actionTypes";

let initialState = {
  products: [],
  cart: [],
  isLoading: false,
  isError: false, // Changed from isErr
};

let reducer = (state = initialState, action) => {
  let { type, payload } = action;
  
  switch (type) {
    // ---------------------------Getproductstart-----------------//
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, isError: false, products: payload };
    case types.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true, products: [] };
    // ---------------------------GetproductsEnd------------------//

    // ---------------------------PostCartstart-----------------//
    case types.POST_CART_REQUEST:
      return { ...state, isLoading: true };
    case types.POST_CART_SUCCESS:
      return { ...state, isLoading: false, isError: false, cart: payload };
    case types.POST_CART_FAILURE:
      return { ...state, isLoading: false, isError: true, cart: [] };
    // ---------------------------PostCartEnd------------------//

    // ---------------------------GetCartstart-----------------//
    case types.GET_CART_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_CART_SUCCESS:
      return { ...state, isLoading: false, isError: false, cart: payload };
    case types.GET_CART_FAILURE:
      return { ...state, isLoading: false, isError: true, cart: [] };
    // ---------------------------GetCartEnd------------------//

    // ---------------------------CartQuantitystart-----------------//
    case types.PATCH_CARTQUANTITY_REQUEST:
      return { ...state, isLoading: true };
    case types.PATCH_CARTQUANTITY_SUCCESS:
      return { ...state, isLoading: false, isError: false, cart: payload };
    case types.PATCH_CARTQUANTITY_FAILURE:
      return { ...state, isLoading: false, isError: true, cart: [] };
    // ---------------------------CartQuantityend------------------//

    // ---------------------------DeleteCartstart-----------------//
    case types.DELETE_CART_REQUEST:
      return { ...state, isLoading: true };
    case types.DELETE_CART_SUCCESS:
      return { ...state, isLoading: false, isError: false, cart: payload };
    case types.DELETE_CART_FAILURE:
      return { ...state, isLoading: false, isError: true, cart: [] };
    // ---------------------------DeleteCartyend------------------//

    default:
      return state;
  }
};

export { reducer };
