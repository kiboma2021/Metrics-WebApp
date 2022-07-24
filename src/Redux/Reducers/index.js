import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer';

const reducers = combineReducers({
  allnews: newsReducer,
});

export default reducers;
