import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import imagesReducer from './imagesReducer';
import loadingReducer from './loadingReducer';
import nextPageReducer from './nextPageReducer';
import prevPageReducer from './prevPageReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  images: imagesReducer,
  isLoading: loadingReducer,
  nextPage: nextPageReducer,
  prevPage: prevPageReducer,
  searchName: searchReducer,
});

export default rootReducer;
