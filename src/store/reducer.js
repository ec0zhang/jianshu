import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';

// reducer 的目录
const reducer =  combineReducers({
    header: headerReducer
});

export default reducer;