import {combineReducers} from 'react-redux';
import {itemReducer} from './itemReducer';
import {listReducer} from './listReducer';
import {loadingReducer} from './loadingReducer';
import {errorReducer} from './errorReducer';

export const rootReducer = combineReducers({
  items: itemReducer,
  lists: listReducer,
  loading: loadingReducer,
  error: errorReducer
});