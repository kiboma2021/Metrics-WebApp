/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import ActionTypes from '../Constants/action-types';

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ALL_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
