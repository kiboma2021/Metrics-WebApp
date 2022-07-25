import ActionTypes from '../Constants/action-types';

export const myProducts = (products) => ({
  type: ActionTypes.ALL_PRODUCTS,
  payload: products,
});

export const newsCategory = (category) => ({
  type: ActionTypes.NEWS_CATEGORY,
  payload: category,
});
