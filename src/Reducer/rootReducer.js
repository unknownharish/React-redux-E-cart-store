import {combineReducers} from 'redux';
import reducer from './reducer';


const rootReducer = combineReducers({shop:reducer});

export default rootReducer;