/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import ActionTypes from '../Constants/action-types';

const initialState = {
  news: [],
};

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ALL_NEWS:
      return { ...state, news: payload };
    default:
      return state;
  }
};
