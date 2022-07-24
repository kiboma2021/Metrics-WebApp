import ActionTypes from '../Constants/action-types';

export const allNews = (news) => ({
  type: ActionTypes.ALL_NEWS,
  payload: news,
});

export const newsCategory = (category) => ({
  type: ActionTypes.NEWS_CATEGORY,
  payload: category,
});
