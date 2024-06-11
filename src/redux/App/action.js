import * as types from "./actionTypes";

const getProducts = (filters = {}) => async (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  try {
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`https://fakestoreapi.com/products?${query}`);
    const data = await response.json();
    dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_PRODUCTS_FAILURE });
  }
};

const addProduct = (product) => async (dispatch) => {
  dispatch({ type: types.POST_PRODUCT_REQUEST });
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    dispatch({ type: types.POST_PRODUCT_SUCCESS, payload: data });
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: types.POST_PRODUCT_FAILURE });
  }
};


const editProduct = (product) => async (dispatch) => {
  dispatch({ type: types.PATCH_PRODUCT_REQUEST });
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    dispatch({ type: types.PATCH_PRODUCT_SUCCESS, payload: data });
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: types.PATCH_PRODUCT_FAILURE });
  }
};

const deleteProduct = (productId) => async (dispatch) => {
  dispatch({ type: types.DELETE_PRODUCT_REQUEST });
  try {
    await fetch(`https://fakestoreapi.com/products/${productId}`, { method: 'DELETE' });
    dispatch({ type: types.DELETE_PRODUCT_SUCCESS, payload: productId });
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: types.DELETE_PRODUCT_FAILURE });
  }
};

const addToCart = (data) => async (dispatch) => {
  dispatch({ type: types.POST_CART_REQUEST });
  try {
    await fetch('https://first-deploy-92k2.onrender.com/addcart', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    dispatch({ type: types.POST_CART_SUCCESS });
    dispatch(GetCart());
  } catch (error) {
    dispatch({ type: types.POST_CART_FAILURE });
  }
};

const GetCart = () => async (dispatch) => {
  dispatch({ type: types.GET_CART_REQUEST });
  try {
    const response = await fetch('https://first-deploy-92k2.onrender.com/cart');
    const data = await response.json();
    dispatch({ type: types.GET_CART_SUCCESS, payload: data.msg });
  } catch (error) {
    dispatch({ type: types.GET_CART_FAILURE });
  }
};

const CartQuantity = (data) => async (dispatch) => {
  dispatch({ type: types.PATCH_CARTQUANTITY_REQUEST });
  try {
    await fetch(`https://first-deploy-92k2.onrender.com/editcart/${data._id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    dispatch({ type: types.PATCH_CARTQUANTITY_SUCCESS });
    dispatch(GetCart());
  } catch (error) {
    dispatch({ type: types.PATCH_CARTQUANTITY_FAILURE });
  }
};

const deleteCart = (data) => async (dispatch) => {
  dispatch({ type: types.DELETE_CART_REQUEST });
  try {
    await fetch(`https://first-deploy-92k2.onrender.com/deletecart/${data._id}`, {
      method: 'DELETE',
    });
    dispatch({ type: types.DELETE_CART_SUCCESS });
    dispatch(GetCart());
  } catch (error) {
    dispatch({ type: types.DELETE_CART_FAILURE });
  }
};

const getUserLogin = (payload) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  try {
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    dispatch({ type: types.LOGIN_SUCCESS, payload: data.token });
    localStorage.setItem('isAuth', true);
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE });
  }
};

export { getProducts, addProduct, editProduct, deleteProduct, addToCart, GetCart, CartQuantity, deleteCart, getUserLogin };
