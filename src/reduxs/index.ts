import { combineReducers } from 'redux';
import langReducer from './reducers/langReducer';
import themeReducer from './reducers/themeReducer';
import kdgTabReducer from './reducers/kdgTabReducer';

export default combineReducers({
    langReducer,
    themeReducer,
    kdgTabReducer
});
