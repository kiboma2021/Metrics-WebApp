/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import ActionTypes from '../Constants/action-types';

const initialState = {
  news: [{
    id: 1,
    title: "3 signs it's getting less competitive to buy a home",
    description: 'Prices in hot markets are dipping and buyers are scrambling to cancel contracts — good news for people intimidated by the competitive buying process.',
  }],
};

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ALL_NEWS:
      return state;
    default:
      return state;
  }
};
